require('dotenv').config();
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const CONTACT_TO = process.env.CONTACT_TO || 'vishal.soni2702@gmail.com';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';

app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '');
}

function createTransport() {
  if (!SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
}

app.post('/api/messages', async (req, res) => {
  const { name = '', email = '', subject = '', message = '', website = '' } = req.body || {};

  // Honeypot: silently accept obvious bot submissions.
  if (String(website).trim()) return res.status(204).end();

  if (!name.trim() || !validEmail(email) || !message.trim()) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' });
  }

  const transport = createTransport();
  if (!transport) {
    return res.status(503).json({
      error: 'Email service is not configured yet. Add SMTP_USER and SMTP_PASS to .env.'
    });
  }

  const cleanSubject = subject.trim() || 'Project enquiry from Vishal Gupta portfolio';
  const text = [
    'New portfolio enquiry',
    '',
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Subject: ${cleanSubject}`,
    '',
    message.trim()
  ].join('\n');

  try {
    await transport.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO,
      replyTo: email.trim(),
      subject: `[Portfolio] ${cleanSubject}`,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
          <p><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
          <hr>
          <p style="white-space:pre-wrap">${escapeHtml(message.trim())}</p>
        </div>
      `
    });

    return res.json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(502).json({ error: 'The email service could not send the message.' });
  }
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
  console.log(`Contact destination: ${CONTACT_TO}`);
});
