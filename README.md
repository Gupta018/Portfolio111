# Vishal Gupta Portfolio — Contact-enabled build

## Contact destination
Portfolio enquiries are configured to be delivered to:

`vishal.soni2702@gmail.com`

## Run locally with the real contact API

1. Install Node.js.
2. Open this folder in a terminal.
3. Run:

```bash
npm install
```

4. Copy `.env.example` to `.env`.
5. In Google Account security, create a Google App Password for the Gmail account used by the server. Put that App Password in `SMTP_PASS` — never use your normal Gmail password.
6. Start the site:

```bash
npm start
```

7. Open:

`http://localhost:3000`

The contact form posts to `/api/messages`, and the backend sends the enquiry to `CONTACT_TO`, which defaults to `vishal.soni2702@gmail.com`.

## Important

Live Server on `index.html` does not run the Node backend, so it cannot send the message through `/api/messages`. Use `npm start` for actual email delivery.

- Contact success state now includes a lightweight animated message-sent developer cartoon.
