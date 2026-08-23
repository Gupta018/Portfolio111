const nav = document.querySelector(".nav");
const progress = document.querySelector(".progress");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const glow = document.querySelector(".cursor-glow");

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
});

window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const skillsToggle = document.querySelector(".skills-toggle-box");
const skillsRevealPanel = document.getElementById("skillsRevealPanel");

if (skillsToggle && skillsRevealPanel) {
  skillsToggle.addEventListener("click", () => {
    const isExpanded = skillsToggle.getAttribute("aria-expanded") === "true";
    skillsRevealPanel.toggleAttribute("hidden", isExpanded);
    skillsToggle.setAttribute("aria-expanded", String(!isExpanded));
  });
}

// Small stagger for repeated cards
document.querySelectorAll(".skills-grid .skill-card, .projects-grid .project, .about-cards article").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 70}ms`;
});


const projectData = {
  "market-segmentation": {
    title: "Market Segmentation Analysis",
    type: "Analytics / Power BI",
    number: "01",
    accent: "POWER BI",
    summary: "An interactive analytics system for understanding customer behavior, market trends and high-value segments.",
    objective: "Turn raw customer and transaction data into a dashboard that helps a viewer move from a high-level market picture to a specific customer segment.",
    stack: ["Power BI Desktop", "Power BI Service", "DAX", "Python", "Data Modeling"],
    features: ["Interactive KPI cards", "Customer segmentation", "Trend analysis", "Slicers & drill-downs", "50+ DAX measures", "Power BI Service deployment"],
    images: [
      {title: "Sales Report", desc: "Executive market view with KPI cards, customer segmentation, filters and state-level performance.", src: "assets/market-segmentation/01-sales-report.png"},
      {title: "Sales Working Dashboard", desc: "Interactive analytical view combining gender, language, customer and state performance analysis.", src: "assets/market-segmentation/02-sales-working.png"},
      {title: "Customer Report", desc: "Customer-focused report view with segment dimensions, sales distribution and performance detail.", src: "assets/market-segmentation/03-customer-report.png"}
    ],
    process: [
      ["01", "Data preparation", "Cleaned and transformed source data, fixed types and prepared fields for analysis."],
      ["02", "Model design", "Built a structured model so measures, dimensions and relationships stay understandable."],
      ["03", "Insight layer", "Created DAX measures and interactive visuals for revenue, customers, trends and segments."],
      ["04", "Delivery", "Published the dashboard through Power BI Service with a clear analytical flow."]
    ],
    result: "A reusable dashboard experience that turns scattered business data into a decision-friendly market view.",
    lesson: "Good dashboards are not collections of charts. The real work is deciding what the user should understand first, second and third.",
    metrics: [["50+", "DAX measures"], ["3", "analysis layers"], ["1", "interactive dashboard"]],
    tags: ["Power BI", "DAX", "Analytics"]
  },
  "loan-predictor": {
    title: "Loan Predictor",
    type: "Machine Learning / Python",
    number: "02",
    accent: "MACHINE LEARNING",
    summary: "A classification workflow that predicts loan approval while giving borderline applications room for manual review.",
    objective: "Build a practical prediction pipeline using applicant information such as income, credit history, education, dependents and property area.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    features: ["Data preprocessing", "EDA", "Logistic Regression", "Decision Tree", "Random Forest", "Interactive prediction"],
    images: [
      {title: "Income & Debt Analysis", desc: "Distribution analysis used to understand applicant income and debt-to-income patterns before modeling.", src: "assets/loan-predictor/01-income-distribution.png"},
      {title: "K-Means Applicant Segments", desc: "Clustering analysis separating applicant groups using income and loan amount.", src: "assets/loan-predictor/02-kmeans-segments.png"},
      {title: "Feature Relationship Analysis", desc: "Credit score, annual income and loan amount relationships grouped by loan outcome.", src: "assets/loan-predictor/03-feature-distributions.png"},
      {title: "Distribution Transformation", desc: "Before-and-after log transformations used to make skewed financial variables easier to model.", src: "assets/loan-predictor/04-log-transformations.png"}
    ],
    process: [
      ["01", "Data collection", "Loaded applicant records and inspected columns, types, missing values and target distribution."],
      ["02", "Preprocessing", "Handled missing values and encoded categorical features for model training."],
      ["03", "Model building", "Compared Logistic Regression with Decision Tree and Random Forest approaches."],
      ["04", "Evaluation", "Reviewed model performance and created a user-input prediction flow."]
    ],
    result: "The project reached about 79% accuracy and demonstrated an end-to-end machine-learning workflow from raw data to prediction.",
    lesson: "A useful ML product is more than an accuracy number — the input flow, edge cases and interpretation matter too.",
    metrics: [["79%", "accuracy"], ["3", "models compared"], ["6+", "key feature groups"]],
    tags: ["Python", "ML", "Scikit-learn"]
  },
  "booking-express": {
    title: "Booking Express",
    type: "UI / UX Design",
    number: "03",
    accent: "PRODUCT DESIGN",
    summary: "A user-focused cab booking experience designed to make searching, selecting and booking feel simple across desktop and mobile.",
    objective: "Create a clear journey from discovery to confirmed ride while reducing friction and keeping the interface visually consistent.",
    stack: ["Figma", "Framer", "User Flows", "Wireframing", "Prototyping"],
    features: ["Personas", "User journeys", "Responsive wireframes", "Booking flow", "Prototype interactions", "Mobile-first thinking"],
    images: [
      {title: "Booking Express · Home", desc: "Branded mobile onboarding with ride and package entry points.", src: "assets/booking-express/01-home.png"},
      {title: "Send & Receive Packages", desc: "Package delivery flow designed as a first-class experience.", src: "assets/booking-express/02-packages.png"},
      {title: "Location & Pickup", desc: "Pickup discovery flow with a focused location-service prompt.", src: "assets/booking-express/03-location.png"},
      {title: "Ride Progress", desc: "A route view that communicates trip progress, driver details and fare information.", src: "assets/booking-express/04-route.png"}
    ],
    process: [
      ["01", "Research", "Defined user goals, pain points and the most important actions in a cab-booking journey."],
      ["02", "Flow", "Mapped the path from pickup and destination selection to confirmation."],
      ["03", "Prototype", "Built responsive screens and connected interactions in a realistic prototype."],
      ["04", "Refine", "Improved hierarchy, spacing and navigation after reviewing the flow as a complete experience."]
    ],
    result: "A cleaner booking journey with a responsive visual system that can move naturally between desktop and mobile.",
    lesson: "Good UI is not about adding more screens. It is about removing unnecessary decisions from the user.",
    metrics: [["2", "target platforms"], ["1", "end-to-end flow"], ["100%", "prototype-driven"]],
    tags: ["Figma", "Framer", "UI/UX"]
  },
  "hospital-management": {
    title: "Hospital Management System",
    type: "Python / MySQL",
    number: "04",
    accent: "DESKTOP APP",
    summary: "A practical desktop application for managing patients, prescriptions and medicine records in a structured database.",
    objective: "Reduce repetitive manual record handling by providing a simple interface connected to a reliable relational database.",
    stack: ["Python", "Tkinter", "MySQL", "SQL", "CRUD"],
    features: ["Patient registration", "Prescription records", "Search", "Update", "Delete", "Database-backed CRUD"],
    images: [
      {title: "System Overview", desc: "Hospital Management System overview showing the core modules and operational areas.", src: "assets/hospital-management/01-system-overview.png"},
      {title: "Admin Dashboard", desc: "Admin dashboard for navigating doctors, patients, nurses, pharmacy, payments and hospital operations.", src: "assets/hospital-management/02-admin-dashboard.png"},
      {title: "Appointment Booking", desc: "Patient appointment workflow for selecting department, doctor, date, time and visit type.", src: "assets/hospital-management/03-appointment-flow.png"}
    ],
    process: [
      ["01", "Schema", "Designed tables for patient and prescription information and mapped application fields to columns."],
      ["02", "Interface", "Built a Tkinter desktop UI for entering and viewing records."],
      ["03", "Database layer", "Connected Python to MySQL and implemented parameterized CRUD operations."],
      ["04", "Debugging", "Resolved schema mismatches such as unknown-column errors by tracing field mappings."]
    ],
    result: "A focused CRUD application that keeps patient and prescription data organized and searchable.",
    lesson: "Backend correctness often depends on small details — field names, parameter order and database schema alignment.",
    metrics: [["2", "core data areas"], ["6+", "CRUD actions"], ["1", "desktop workflow"]],
    tags: ["Python", "Tkinter", "MySQL"]
  },
  "tableau-dashboard": {
    title: "Customer Complaints & Sales",
    type: "Tableau / Visualization",
    number: "05",
    accent: "TABLEAU",
    summary: "A dynamic dashboard combining customer feedback and sales trends so patterns can be explored instead of simply reported.",
    objective: "Prepare raw data for Tableau and create an interactive report with filters, parameters and drill-down paths.",
    stack: ["Tableau Prep", "Tableau Desktop", "Calculated Fields", "Filters"],
    features: ["Data preparation", "Dynamic filters", "Parameters", "Pivot analysis", "Drill-down reports", "Trend exploration"],
    images: [
      {title: "Dashboard Overview", desc: "High-level reporting view with KPI cards, filters and time-based performance signals.", src: "assets/customer-complaints/01-overview.png"},
      {title: "Call-Out List", desc: "Detailed tabular reporting with filters, incident attributes and response-time fields.", src: "assets/customer-complaints/02-callout-list.png"},
      {title: "Station Comparison", desc: "Comparative analytics view using ranked performance bars and station-level patterns.", src: "assets/customer-complaints/03-station-comparison.png"}
    ],
    process: [
      ["01", "Prepare", "Structured raw data and created a clean analytical dataset."],
      ["02", "Explore", "Identified useful dimensions and measures for complaints and sales analysis."],
      ["03", "Visualize", "Built interactive charts, filters and parameter-driven views."],
      ["04", "Report", "Added drill-down paths so users can move from summary to detail."]
    ],
    result: "A dashboard that makes it easier to connect customer experience signals with sales performance.",
    lesson: "Visualization becomes powerful when interaction answers the next question a user is likely to ask.",
    metrics: [["2", "business views"], ["6+", "interactive controls"], ["1", "drill-down story"]],
    tags: ["Tableau", "Prep", "Visualization"]
  },
  "personal-portfolio": {
    title: "Animated Personal Portfolio",
    type: "Web Development",
    number: "06",
    accent: "HTML / CSS / JS",
    summary: "A custom portfolio built around one developer character, motion, project storytelling and a dedicated project lab.",
    objective: "Create a portfolio that feels like a product rather than a standard resume page, while staying lightweight and responsive.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "CSS Animation"],
    features: ["Scroll reveal", "Animated hero", "Project Lab", "Responsive layout", "Interactive navigation", "Dedicated case studies"],
    images: [
      {title: "Homepage Design", desc: "Hero section with animated character and projects"},
      {title: "Skills Showcase", desc: "Interactive skills section with animated robot"},
      {title: "Project Lab", desc: "Dynamic case study pages with detailed insights"}
    ],
    process: [
      ["01", "Visual concept", "Designed a distinct visual language around a single developer character and build-lab idea."],
      ["02", "Structure", "Organized the portfolio around identity, skills, projects, journey and contact."],
      ["03", "Motion", "Added scroll reveal, hover states, floating elements and progress feedback."],
      ["04", "Case studies", "Built a separate project page that dynamically loads detailed project stories."]
    ],
    result: "A portfolio experience that turns project browsing into a small interactive journey.",
    lesson: "A memorable portfolio needs a point of view. Consistent visual storytelling can make technical work feel personal.",
    metrics: [["6", "case studies"], ["2", "main pages"], ["100%", "responsive"]],
    tags: ["HTML", "CSS", "JavaScript"]
  },
  "cbank-atm": {
    title: "cBank ATM Machine",
    type: "Product Design / UI/UX",
    number: "07",
    accent: "FIGMA",
    summary: "A complete ATM interface concept designed in Figma, turning a banking journey into a clear, secure and easy-to-follow digital experience.",
    objective: "Design a realistic ATM experience with a consistent visual system and intuitive flows for authentication, account selection, transactions, balance checks, PIN changes and feedback states.",
    stack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    features: ["ATM user flow", "Card insertion journey", "PIN authentication", "Account selection", "Transaction navigation", "Error and success states", "Interactive prototype"],
    images: [
      {title: "Welcome / Card Insert", desc: "cBank landing screen introducing the ATM journey and secure card-insert step.", src: "assets/cbank-atm/01-welcome.png"},
      {title: "Main Transaction Menu", desc: "Core action menu for withdrawal, transfer, deposit, balance and PIN management.", src: "assets/cbank-atm/02-main-menu.png"},
      {title: "Account Type", desc: "Account selection step that branches the transaction flow into the correct banking context.", src: "assets/cbank-atm/03-account-type.png"},
      {title: "Bank Code", desc: "Bank selection interface presented as part of the transaction flow.", src: "assets/cbank-atm/04-bank-code.png"},
      {title: "PIN Authentication", desc: "Four-digit PIN entry with keypad and an alternate authentication prompt.", src: "assets/cbank-atm/05-enter-pin.png"},
      {title: "Balance Information", desc: "Account balance view with clear next actions for additional transactions or exit.", src: "assets/cbank-atm/06-balance.png"},
      {title: "Change PIN", desc: "PIN change confirmation flow using keypad input and confirm / decline actions.", src: "assets/cbank-atm/07-change-pin.png"},
      {title: "Transaction Failed", desc: "Error-state feedback for insufficient funds with safe recovery actions.", src: "assets/cbank-atm/08-transaction-failed.png"},
      {title: "Transaction Feedback", desc: "Completion state that confirms the transaction and reminds the user to remove the card.", src: "assets/cbank-atm/09-transaction-success.png"}
    ],
    demoVideo: {src: "assets/cbank-atm/demo.mp4", poster: "assets/cbank-atm/demo-poster.jpg", title: "cBank ATM prototype — motion walkthrough"},
    process: [
      ["01", "User flow", "Mapped the ATM journey from card insertion and authentication through account selection, transactions and exit."],
      ["02", "Wireframe", "Structured each screen so the next action is obvious and the same interaction language carries through the journey."],
      ["03", "Prototype", "Connected the Figma screens into a realistic ATM flow with navigation, keypad states and feedback moments."],
      ["04", "Refine", "Reviewed success, error and security states to keep the interface clear, consistent and easy to recover from."]
    ],
    result: "A polished cBank ATM prototype that turns a familiar banking workflow into a cohesive, presentation-ready UI/UX case study.",
    lesson: "Good interaction design makes complex transaction flows feel simple by giving users clear choices, visible feedback and predictable next steps.",
    metrics: [["9", "screen states"], ["1", "interactive prototype"], ["100%", "Figma UI/UX"]],
    tags: ["Figma", "UI/UX", "Prototype"]
  },
};




function getProjectIcon(projectKey) {
  const icons = {
    "market-segmentation": "📊",
    "loan-predictor": "🤖",
    "booking-express": "🚗",
    "hospital-management": "🏥",
    "tableau-dashboard": "📈",
    "personal-portfolio": "✨",
    "cbank-atm": "🏧"
  };
  return icons[projectKey] || "⭐";
}

function generateProjectSVG(projectKey, imageIndex = 0) {
  const themes = {
    "market-segmentation": ["POWER BI", "Customer Segments", "Trend View", "Decision Layer"],
    "loan-predictor": ["ML WORKFLOW", "Applicant Data", "Model Comparison", "Prediction"],
    "booking-express": ["BOOKING", "Pickup", "Destination", "Confirmation"],
    "hospital-management": ["PATIENT DB", "Patients", "Prescriptions", "Search"],
    "tableau-dashboard": ["TABLEAU", "Sales Trend", "Complaint View", "Drill-down"],
    "personal-portfolio": ["PORTFOLIO", "Hero", "Skills", "Projects"],
    "cbank-atm": ["FIGMA", "Account", "Withdraw", "Balance"]
  };
  const t = themes[projectKey] || themes["personal-portfolio"];
  const variant = imageIndex % 3;
  let content = "";
  if (variant === 0) {
    const bars = [44, 66, 52, 78, 62].map((h,i) =>
      `<rect x="60" y="280" width="34" height="${h}" rx="9" fill="currentColor" opacity="${0.35+i*.10}"/>`
    ).join("");
    content = `
      <rect x="35" y="35" width="530" height="48" rx="12" fill="currentColor" opacity=".10"/>
      <text x="55" y="65" fill="currentColor" font-size="18" font-weight="800">${t[0]}</text>
      <text x="55" y="118" fill="currentColor" font-size="11" opacity=".7">${t[1]}</text>
      <text x="235" y="118" fill="currentColor" font-size="11" opacity=".7">${t[2]}</text>
      <text x="395" y="118" fill="currentColor" font-size="11" opacity=".7">${t[3]}</text>
      <rect x="55" y="140" width="150" height="78" rx="14" fill="currentColor" opacity=".06"/>
      <rect x="225" y="140" width="150" height="78" rx="14" fill="currentColor" opacity=".06"/>
      <rect x="395" y="140" width="150" height="78" rx="14" fill="currentColor" opacity=".06"/>
      <path d="M55 295 C130 238 175 260 235 214 S345 190 410 145 S500 162 545 105" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
      ${bars}
    `;
  } else if (variant === 1) {
    content = `
      <rect x="35" y="35" width="530" height="48" rx="12" fill="currentColor" opacity=".10"/>
      <text x="55" y="65" fill="currentColor" font-size="18" font-weight="800">${t[0]} / DETAIL</text>
      <circle cx="160" cy="205" r="92" fill="none" stroke="currentColor" stroke-width="22" opacity=".16"/>
      <path d="M160 113 A92 92 0 1 1 89 263" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round"/>
      <circle cx="390" cy="165" r="11" fill="currentColor"/>
      <circle cx="390" cy="215" r="11" fill="currentColor" opacity=".55"/>
      <circle cx="390" cy="265" r="11" fill="currentColor" opacity=".28"/>
      <text x="420" y="170" fill="currentColor" font-size="13">${t[1]}</text>
      <text x="420" y="220" fill="currentColor" font-size="13">${t[2]}</text>
      <text x="420" y="270" fill="currentColor" font-size="13">${t[3]}</text>
    `;
  } else {
    content = `
      <rect x="35" y="35" width="530" height="48" rx="12" fill="currentColor" opacity=".10"/>
      <text x="55" y="65" fill="currentColor" font-size="18" font-weight="800">${t[0]} / FLOW</text>
      <rect x="55" y="110" width="150" height="64" rx="14" fill="currentColor" opacity=".07"/>
      <rect x="225" y="110" width="150" height="64" rx="14" fill="currentColor" opacity=".07"/>
      <rect x="395" y="110" width="150" height="64" rx="14" fill="currentColor" opacity=".07"/>
      <text x="75" y="145" fill="currentColor" font-size="12">${t[1]}</text>
      <text x="245" y="145" fill="currentColor" font-size="12">${t[2]}</text>
      <text x="415" y="145" fill="currentColor" font-size="12">${t[3]}</text>
      <path d="M80 250 H520" stroke="currentColor" stroke-width="3" opacity=".18"/>
      ${[100,220,340,460].map((x,i)=>`<circle cx="${x}" cy="250" r="11" fill="currentColor" opacity="${0.45+i*.12}"/>`).join("")}
      <path d="M111 250 H208 M231 250 H328 M351 250 H448" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".45"/>
    `;
  }
  return `<svg class="project-svg" viewBox="0 0 600 360" role="img" aria-label="${t[0]} project interface recreation">
    <rect width="600" height="360" rx="24" fill="var(--visual-bg, #0b1220)"/>
    <g color="var(--visual-accent, #65e6ff)">${content}</g>
  </svg>`;
}

function syncBuildConsole(p){
  const root=document.getElementById("buildConsole"); if(!root||!p)return;
  const map={
    "Analytics / Power BI":["Customer data","Useful insight","Model → Measure → Visual","Decision-ready analytics"],
    "Machine Learning / Python":["Applicant inputs","Model prediction","Features → Model → Review","Interpretable prediction"],
    "UI / UX Design":["User needs","Clear interaction","Flow → Prototype → Refine","Reduced friction"],
    "Python / MySQL":["Patient records","Reliable workflow","Schema → CRUD → Validate","Organized data"],
    "Tableau / Visualization":["Business data","Interactive report","Prepare → Explore → Visualize","Questions answered"],
    "Web Development":["Content + structure","Responsive experience","Design → Build → Refine","Clear product story"]
  };
  const v=map[p.type]||["Project inputs","Working outcome","Plan → Build → Refine","Useful delivery"];
  const isCbank=p && p.title === "cBank ATM Machine";
  root.classList.toggle("cbank-build", !!isCbank);
  const set=(id,val)=>{const e=document.getElementById(id);if(e)e.textContent=val};
  set("consoleNumber",p.number);
  set("consoleTitle",p.title);
  set("consoleType",p.accent);
  set("consoleInput",isCbank?"User flow & screen states":v[0]);
  set("consoleOutput",isCbank?"Prototype-ready journey":v[1]);
  set("consoleStep",isCbank?"Flow → Wireframe → Prototype":v[2]);
  set("consoleFocus",isCbank?"Clear banking interactions":v[3]);
  set("consoleAccent",isCbank?"FIGMA · UI/UX":p.accent);
  set("consoleProgress",String(p.number).padStart(2,"0"));
  set("consoleTotal",String(Object.keys(projectData).length).padStart(2,"0"));
  const mode=document.getElementById("modeText");
  if(mode) mode.textContent=`PROJECT MODE · ${isCbank ? "PRODUCT DESIGN" : (p.type.split("/")[0]||p.accent).trim().toUpperCase()}`;
  const bar=document.getElementById("consoleProgressBar");
  if(bar)bar.style.width=`${(parseInt(p.number,10)/Object.keys(projectData).length)*100}%`;
}



function renderBookingFourPreview(project){
  return `
    <div class="booking-four-preview" aria-label="Booking Express four-screen preview">
      ${(project.images || []).map((img,i) => `
        <article class="booking-screen-card">
          <div class="booking-screen-index">${String(i+1).padStart(2,'0')}</div>
          <div class="booking-screen-image">
            <img src="${img.src}" alt="${img.title} — ${project.title}" loading="${i===0?'eager':'lazy'}" decoding="async">
          </div>
          <div class="booking-screen-copy">
            <strong>${img.title}</strong>
            <span>${img.desc}</span>
          </div>
        </article>
      `).join('')}
    </div>`;
}

function renderCbankMedia(project){
  const video=project.demoVideo;
  return `
    <div class="cbank-media-stack">
      <section class="cbank-demo-panel">
        <div class="cbank-demo-head">
          <div>
            <span class="block-label">PROTOTYPE WALKTHROUGH</span>
            <h3>See the cBank ATM flow in motion.</h3>
            <p>A short screen-recorded walkthrough of the Figma prototype — from entry and authentication to transaction states and final feedback.</p>
          </div>
          <span class="cbank-demo-badge"><i></i> FIGMA PROTOTYPE</span>
        </div>
        <div class="cbank-demo-layout cbank-demo-layout-full">
          <div class="cbank-video-wrap">
            <div class="cbank-video-frame">
              <video data-cbank-video playsinline preload="metadata" poster="${video.poster}" aria-label="${video.title}">
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video element.
              </video>
              <button class="cbank-video-play" type="button" data-video-play aria-label="Play prototype walkthrough">▶</button>
              <div class="cbank-video-controls" data-video-controls>
                <button type="button" data-video-toggle aria-label="Play or pause video">▶</button>
                <span class="cbank-video-time" data-video-time>0:00</span>
                <div class="cbank-video-progress" data-video-progress><i></i></div>
                <button type="button" data-video-fullscreen aria-label="Enter fullscreen">⛶</button>
              </div>
            </div>
            <div class="cbank-video-caption"><span><b>Prototype walkthrough</b> · Figma interaction</span><span>16:9 · ${video.title}</span></div>
          </div>
          <div class="cbank-flow-strip" aria-label="Prototype flow">
            <div><span>01</span><strong>Authenticate</strong><small>Card entry · PIN</small></div>
            <i aria-hidden="true"></i>
            <div><span>02</span><strong>Choose</strong><small>Account · transaction</small></div>
            <i aria-hidden="true"></i>
            <div><span>03</span><strong>Complete</strong><small>Balance · feedback</small></div>
            <div class="cbank-flow-tool"><small>DESIGN TOOL</small><strong>Figma</strong></div>
          </div>
        </div>
      </section>
      <div class="cbank-screens-head"><div><span class="block-label">SCREEN FLOW</span><h3>From entry to transaction feedback.</h3></div><span>${project.images.length} screens</span></div>
      ${renderStandardGallery(project, 'cbank-atm')}
    </div>`;
}


function renderStandardGallery(project, projectKey){
  return `
    <div class="visual-main dashboard-visual-main" data-gallery-main>
      <div class="visual-main-bg"></div>
      <div class="visual-main-content" data-gallery-content></div>
      <div class="visual-main-copy"><span data-gallery-label>${project.images?.[0]?.title || project.title}</span><p data-gallery-desc>${project.images?.[0]?.desc || ''}</p></div>
    </div>
    <div class="visual-thumbs dashboard-visual-thumbs" role="tablist" aria-label="Project screens">
      ${(project.images || []).map((img,i) => `
        <button class="visual-thumb ${i===0?'active':''}" type="button" data-gallery-index="${i}" role="tab" aria-selected="${i===0?'true':'false'}">
          <span class="thumb-num">${String(i+1).padStart(2,'0')}</span>
          ${img.src ? `<span class="thumb-image"><img src="${img.src}" alt="" loading="lazy" decoding="async"></span>` : ''}
          <span class="thumb-title">${img.title}</span>
        </button>
      `).join('')}
    </div>`;
}

function renderProjectLab() {
  const view = document.getElementById("projectView");
  const menu = document.getElementById("projectMenu");
  if (!view || !menu) return;

  const params = new URLSearchParams(window.location.search);
  const key = params.get("project") || "market-segmentation";
  const p = projectData[key] || projectData["market-segmentation"];

  document.title = `${p.title} | Vishal Gupta`;

  menu.innerHTML = Object.entries(projectData).map(([id,item]) => `
    <button class="project-menu-item ${id === key ? "active" : ""}" data-project="${id}" type="button">
      <span>${item.number}</span>
      <strong>${item.title}</strong>
      <small>${item.type}</small>
      <i>↗</i>
    </button>
  `).join("");

  view.innerHTML = `
    <div class="case-visual-shell ${key === "booking-express" ? "booking-case-visual" : key === "loan-predictor" ? "loan-case-visual" : key === "hospital-management" ? "hospital-case-visual" : key === "market-segmentation" ? "market-case-visual" : key === "tableau-dashboard" ? "tableau-case-visual" : key === "cbank-atm" ? "cbank-case-visual" : ""}" data-project-key="${key}">
      <div class="visual-chrome">
        <div class="visual-title"><span class="visual-live-dot"></span><strong>${p.title}</strong><span>interactive preview</span></div>
        <div class="visual-controls"><button class="visual-arrow" type="button" data-gallery-prev aria-label="Previous preview">←</button><span class="visual-count"><b data-gallery-current>01</b> / <span>${String((p.images||[]).length).padStart(2,'0')}</span></span><button class="visual-arrow" type="button" data-gallery-next aria-label="Next preview">→</button></div>
      </div>
      ${key === "booking-express" ? renderBookingFourPreview(p) : key === "cbank-atm" ? renderCbankMedia(p) : renderStandardGallery(p, key)}
    </div>

    <div class="case-topline">
      <span class="case-number">${p.number}</span>
      <span class="case-type">${p.accent}</span>
      <span class="case-type">${p.type}</span>
    </div>

    <div class="case-heading">
      <div>
        <p class="eyebrow">CASE STUDY / ${p.number}</p>
        <h2>${p.title}</h2>
        <p class="case-summary">${p.summary}</p>
      </div>
      <div class="case-stamp">BUILD<br><b>${p.number}</b></div>
    </div>

    <div class="case-metrics">
      ${p.metrics.map(m => `<div><strong>${m[0]}</strong><span>${m[1]}</span></div>`).join("")}
    </div>

    <nav class="case-tabs" aria-label="Case study sections">
      <a class="active" data-step="01" href="#case-overview">Overview</a>
      <a data-step="02" href="#case-build">Build process</a>
      <a data-step="03" href="#case-outcome">Outcome</a>
    </nav>

    <div class="case-explainer" id="case-overview">
      <div class="explainer-intro">
        <div><span class="block-label">THE THINKING</span><h3>Designed around the decisions that matter.</h3></div>
        <p>A quick read of what the project needed, what shipped, and why the implementation choices were made.</p>
      </div>
      <div class="explainer-grid">
        <section class="case-block explainer-card mission-card">
          <div class="block-label-row"><span class="block-label">THE MISSION</span><span class="block-index">01</span></div>
          <h3>What I wanted to solve</h3>
          <p>${p.objective}</p>
        </section>

        <section class="case-block explainer-card stack-card">
          <div class="block-label-row"><span class="block-label">TOOLKIT</span><span class="block-index">02</span></div>
          <div class="case-tags">${p.stack.map(x => `<span>${x}</span>`).join("")}</div>
          <div class="tool-note">Selected for the actual build, with the focus kept on the user journey and delivery.</div>
        </section>

        <section class="case-block explainer-card shipped-card">
          <div class="block-label-row"><span class="block-label">WHAT SHIPPED</span><span class="block-index">03</span></div>
          <div class="feature-list">${p.features.map(x => `<div><b>✓</b><span>${x}</span></div>`).join("")}</div>
        </section>

        <section class="case-block explainer-card trace-card" id="case-build">
          <div class="block-label-row"><div><span class="block-label">BUILD TRACE</span><h3>From first question to final pass.</h3></div><span class="block-index">04</span></div>
          <div class="trace-progress"><span data-trace-progress></span></div>
          <div class="process-list process-list-wide" data-trace-list>
            ${p.process.map((x,i) => `<button class="process-row ${i===0?'active':''}" type="button" data-trace-index="${i}"><span>${x[0]}</span><div><h4>${x[1]}</h4><p>${x[2]}</p></div><em>↗</em></button>`).join("")}
          </div>
        </section>
      </div>
    </div>

    <div class="case-bottom" id="case-outcome">
      <div class="result-card outcome-card"><span class="block-label">RESULT</span><h3>${p.result}</h3><div class="outcome-line"></div><small>Built to be understood quickly and improved through iteration.</small></div>
      <div class="lesson-card outcome-card"><span class="block-label">TAKEAWAY</span><p>“${p.lesson}”</p><div class="outcome-link">What I would carry into the next build <span>→</span></div></div>
    </div>
  `;

  menu.querySelectorAll(".project-menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.project;
      const url = new URL(window.location.href);
      url.searchParams.set("project", next);
      history.pushState({}, "", url);
      renderProjectLab();
      document.querySelector(".lab-work-v2")?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });

  syncBuildConsole(p);
  window.bindProjectInteractions?.();
}

window.addEventListener("popstate", renderProjectLab);
if (document.body.classList.contains("lab-page")) renderProjectLab();


/* =========================================================
   PROJECT CARTOON — REAL POINTER DRAG
   Mouse + touch + pen. No page navigation.
   ========================================================= */
(function(){
  const target=document.querySelector(".lab-flat-cartoon, .console-character");
  if(!target) return;

  let dragging=false,startX=0,startY=0,baseX=0,baseY=0;

  const currentPosition=()=>{
    const t=getComputedStyle(target).transform;
    if(!t || t==="none") return [0,0];
    try{
      const m=new DOMMatrix(t);
      return [m.m41||0,m.m42||0];
    }catch(_){ return [0,0]; }
  };

  target.style.touchAction="none";

  target.addEventListener("pointerdown",(e)=>{
    if(e.button!==undefined && e.button!==0 && e.pointerType==="mouse") return;
    e.preventDefault();
    const [x,y]=currentPosition();
    baseX=x;baseY=y;startX=e.clientX;startY=e.clientY;dragging=true;
    target.classList.add("dragging");
    target.setPointerCapture?.(e.pointerId);
  });

  target.addEventListener("pointermove",(e)=>{
    if(!dragging)return;
    e.preventDefault();
    const x=baseX+(e.clientX-startX);
    const y=baseY+(e.clientY-startY);
    target.style.transform=`translate3d(${x}px,${y}px,0)`;
  });

  const stop=(e)=>{
    if(!dragging)return;
    dragging=false;
    target.classList.remove("dragging");
    try{target.releasePointerCapture?.(e.pointerId)}catch(_){}
  };

  target.addEventListener("pointerup",stop);
  target.addEventListener("pointercancel",stop);
  target.addEventListener("lostpointercapture",()=>{dragging=false;target.classList.remove("dragging")});
})();
/* Prevent navigation links from retaining focus styles. */
document.querySelectorAll("a").forEach(link => link.addEventListener("click", () => link.blur()));

/* Technology system — hover reveals a concise explanation without moving the nodes. */
(function(){
  const buttons=document.querySelectorAll(".stack-node");
  const title=document.getElementById("stackInspectorTitle");
  const text=document.getElementById("stackInspectorText");
  if(!buttons.length || !title || !text) return;
  buttons.forEach(btn=>{
    const label=btn.querySelector("b")?.textContent?.trim() || "Technology";
    const desc=btn.dataset.desc || "A tool in my practical development stack.";
    btn.addEventListener("mouseenter",()=>{
      buttons.forEach(x=>x.classList.remove("is-focus"));
      btn.classList.add("is-focus");
      title.textContent=label;
      text.textContent=desc;
    });
    btn.addEventListener("focus",()=>btn.dispatchEvent(new Event("mouseenter")));
  });
})();

/* About process — focus the step the visitor is exploring. */
(function(){
  const cards=[...document.querySelectorAll('[data-process-card]')];
  if(!cards.length) return;
  const activate=(card)=>{cards.forEach(c=>c.classList.toggle('is-active',c===card));};
  cards.forEach(card=>{
    card.addEventListener('mouseenter',()=>activate(card));
    card.addEventListener('focusin',()=>activate(card));
  });
})();


/* =========================================================
   CONTACT + MESSAGE STATUS
   ========================================================= */
(function(){
  const form=document.getElementById("contactForm");
  const overlay=document.getElementById("messageSuccess");
  const status=document.getElementById("formStatus");
  if(!form) return;

  const setStatus=(message,type="")=>{
    if(!status) return;
    status.textContent=message;
    status.className=`form-status ${type}`.trim();
  };
  const close=()=>{
    if(!overlay) return;
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  };
  overlay?.querySelectorAll(".success-close,.success-done").forEach(btn=>btn.addEventListener("click",close));
  overlay?.addEventListener("click",e=>{if(e.target===overlay) close();});

  const openMailFallback=(data)=>{
    const subject=data.subject?.trim() || "Project enquiry from portfolio";
    const body=[
      `Name: ${data.name?.trim() || ""}`,
      `Email: ${data.email?.trim() || ""}`,
      "",
      data.message?.trim() || ""
    ].join("\n");
    const mailto=`mailto:vishal.soni2702@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const link=document.createElement("a");
    link.href=mailto;
    link.rel="noopener";
    link.click();
  };

  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const honeypot=form.elements.website?.value?.trim();
    if(honeypot) return;
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    const button=form.querySelector("button[type=submit]");
    const original=button?.innerHTML;
    if(button){button.disabled=true;button.innerHTML="Preparing…";}

    const data=Object.fromEntries(new FormData(form).entries());
    delete data.website;
    setStatus("Preparing your enquiry…");

    try{
      // Static-host / Live Server fallback: first try the real API, then offer a real email handoff.
      const response=await fetch("/api/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      });
      const result=await response.json().catch(()=>({}));

      if(response.ok){
        form.reset();
        setStatus("Message received successfully. Thanks for reaching out.","success");
        if(overlay){overlay.classList.add("show");overlay.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
      }else{
        throw new Error(result.error||`HTTP ${response.status}`);
      }
    }catch(error){
      setStatus("Email sending is not configured on this server, so your email app will open with the enquiry ready to send.","notice");
      openMailFallback(data);
    }finally{
      if(button){button.disabled=false;button.innerHTML=original;}
    }
  });
})();

/* =========================================================
   THEME + BRIGHTNESS
   ========================================================= */
(function(){
  const root=document.documentElement;
  const body=document.body;
  const themeBtn=document.getElementById("themeToggle");
  const icon=document.getElementById("themeIcon");
  const range=document.getElementById("brightnessRange");

  const applyTheme=theme=>{
    root.dataset.theme=theme;
    body.classList.toggle("night-mode",theme==="dark");
    body.classList.toggle("bright-mode",theme==="light");
    if(icon) icon.textContent=theme==="light" ? "☀" : "☾";
    if(themeBtn) themeBtn.setAttribute("aria-label",theme==="light" ? "Switch to night mode" : "Switch to day mode");
    localStorage.setItem("portfolio-theme",theme);
  };

  const saved=localStorage.getItem("portfolio-theme");
  applyTheme(saved==="light"||saved==="dark" ? saved : (window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark"));

  themeBtn?.addEventListener("click",()=>applyTheme(root.dataset.theme==="light" ? "dark" : "light"));

  if(range){
    const savedBrightness=localStorage.getItem("portfolio-brightness");
    if(savedBrightness) range.value=savedBrightness;
    const applyBrightness=()=>{body.style.filter=`brightness(${range.value}%)`;};
    applyBrightness();
    range.addEventListener("input",()=>{applyBrightness();localStorage.setItem("portfolio-brightness",range.value);});
  }
})();

/* The editor traffic lights stay in place; only their semantic light states pulse in sequence. */

/* =========================================================
   PROJECT LAB V7 — VISUAL EXPLORER + BUILD TRACE
   ========================================================= */
(function(){
  function projectVisualMarkup(projectKey, imageIndex){
    const p=projectData[projectKey];
    const img=(p.images||[])[imageIndex] || (p.images||[])[0];
    if(!img) return '';
    if(img.src){
      return `<img class="visual-main-image" src="${img.src}" alt="${img.title} — ${p.title}" decoding="async">`;
    }
    return generateProjectSVG(projectKey,imageIndex);
  }

  function bindCbankVideo(root){
    const video=root.querySelector('[data-cbank-video]');
    if(!video) return ()=>{};
    const play=root.querySelector('[data-video-play]');
    const toggle=root.querySelector('[data-video-toggle]');
    const fs=root.querySelector('[data-video-fullscreen]');
    const progress=root.querySelector('[data-video-progress] i');
    const time=root.querySelector('[data-video-time]');
    const controls=root.querySelector('[data-video-controls]');
    const fmt=(secs)=>{const s=Math.max(0,Math.floor(secs||0));return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`};
    const sync=()=>{
      const pct=video.duration ? (video.currentTime/video.duration)*100 : 0;
      if(progress)progress.style.width=`${pct}%`;
      if(time)time.textContent=`${fmt(video.currentTime)}${video.duration?` / ${fmt(video.duration)}`:""}`;
      const paused=video.paused;
      if(toggle)toggle.textContent=paused?'▶':'Ⅱ';
      if(play){play.textContent=paused?'▶':'Ⅱ';play.classList.toggle('is-hidden',!paused)}
      controls?.classList.toggle('is-visible',!paused);
    };
    const playPause=()=>video.paused?video.play().catch(()=>{}):video.pause();
    play?.addEventListener('click',playPause);
    toggle?.addEventListener('click',playPause);
    video.addEventListener('click',playPause);
    video.addEventListener('timeupdate',sync);
    video.addEventListener('loadedmetadata',sync);
    video.addEventListener('play',sync);
    video.addEventListener('pause',sync);
    video.addEventListener('ended',sync);
    root.querySelector('[data-video-progress]')?.addEventListener('pointerdown',(e)=>{
      if(!video.duration)return;
      const r=e.currentTarget.getBoundingClientRect();
      const pct=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));
      video.currentTime=pct*video.duration;
    });
    fs?.addEventListener('click',async()=>{
      try{
        if(document.fullscreenElement){await document.exitFullscreen();}
        else if(video.requestFullscreen){await video.requestFullscreen();}
      }catch{}
    });
    sync();
    return ()=>{
      play?.removeEventListener('click',playPause);toggle?.removeEventListener('click',playPause);video.removeEventListener('click',playPause);
      video.removeEventListener('timeupdate',sync);video.removeEventListener('loadedmetadata',sync);video.removeEventListener('play',sync);video.removeEventListener('pause',sync);video.removeEventListener('ended',sync);
    };
  }

  function bindProjectInteractions(){
    window.__projectLabCleanup?.();
    const cleanup=[];
    const root=document.querySelector('.project-view-v2');
    if(!root) return;
    const cbankVideoCleanup=bindCbankVideo(root);
    cleanup.push(cbankVideoCleanup);
    const shell=root.querySelector('.case-visual-shell');
    if(!shell) return;
    const key=shell.dataset.projectKey;
    const p=projectData[key];
    const DEFAULT_IMAGE_INDEX=0;
    let activeIndex=DEFAULT_IMAGE_INDEX;
    let timer=null;
    let pause=false;
    let renderToken=0;
    const content=shell.querySelector('[data-gallery-content]');
    const label=shell.querySelector('[data-gallery-label]');
    const desc=shell.querySelector('[data-gallery-desc]');
    const counter=shell.querySelector('[data-gallery-current]');
    const thumbs=[...shell.querySelectorAll('[data-gallery-index]')];

    const render=(i,announce=true)=>{
      const total=p.images.length;
      activeIndex=(i+total)%total;
      const token=++renderToken;
      content.classList.add('switching');
      // Keep the gallery state and the visible frame in lockstep.
      // Older delayed renders must never overwrite a newer selection.
      window.setTimeout(()=>{
        if(token!==renderToken) return;
        const item=p.images[activeIndex];
        content.innerHTML=projectVisualMarkup(key,activeIndex);
        label.textContent=item.title;
        desc.textContent=item.desc;
        counter.textContent=String(activeIndex+1).padStart(2,'0');
        thumbs.forEach((t,idx)=>{
          const on=idx===activeIndex;
          t.classList.toggle('active',on);
          t.setAttribute('aria-selected',String(on));
        });
        content.classList.remove('switching');
      },120);
      if(announce){ content.setAttribute('aria-live','polite'); }
    };
    render(DEFAULT_IMAGE_INDEX,false);

    thumbs.forEach(btn=>btn.addEventListener('click',()=>render(Number(btn.dataset.galleryIndex))));
    shell.querySelector('[data-gallery-prev]')?.addEventListener('click',()=>render(activeIndex-1));
    shell.querySelector('[data-gallery-next]')?.addEventListener('click',()=>render(activeIndex+1));

    const start=()=>{ if(timer) clearInterval(timer); timer=setInterval(()=>{ if(!pause && document.visibilityState==='visible') render(activeIndex+1,false); },7000); };
    shell.addEventListener('mouseenter',()=>pause=true);
    shell.addEventListener('mouseleave',()=>pause=false);
    shell.addEventListener('focusin',()=>pause=true);
    shell.addEventListener('focusout',()=>pause=false);
    // Start after a short settling period so the first project screen is always the hero frame.
    const autoplayDelay=window.setTimeout(start,6500);

    const trace=[...root.querySelectorAll('[data-trace-index]')];
    const progress=root.querySelector('[data-trace-progress]');
    let traceActive=0;
    const setTrace=(i,auto=false)=>{
      traceActive=(i+trace.length)%trace.length;
      trace.forEach((row,idx)=>row.classList.toggle('active',idx===traceActive));
      if(progress) progress.style.width=`${((traceActive+1)/Math.max(trace.length,1))*100}%`;
      if(!auto) pause=true;
    };
    trace.forEach((row,i)=>row.addEventListener('click',()=>setTrace(i)));
    let traceTimer=setInterval(()=>{
      if(!root.matches(':hover') && document.visibilityState==='visible') setTrace(traceActive+1,true);
    },4200);
    root.addEventListener('mouseleave',()=>{ if(traceTimer) clearInterval(traceTimer); traceTimer=setInterval(()=>{ if(document.visibilityState==='visible') setTrace(traceActive+1,true); },4200); });
    setTrace(0,true);

    const keyHandler=(e)=>{
      if(!root.matches(':hover')) return;
      if(e.key==='ArrowRight') render(activeIndex+1);
      if(e.key==='ArrowLeft') render(activeIndex-1);
    };
    const caseTabs=[...root.querySelectorAll('.case-tabs a')]; const sections=caseTabs.map(a=>({a,node:document.querySelector(a.getAttribute('href'))})).filter(x=>x.node); const spy=()=>{const y=window.scrollY+140;let active=sections[0];sections.forEach(s=>{if(s.node.offsetTop<=y)active=s});caseTabs.forEach(a=>a.classList.toggle('active',a===active?.a));}; window.addEventListener('scroll',spy,{passive:true}); spy(); window.addEventListener('keydown',keyHandler); cleanup.push(()=>{if(timer)clearInterval(timer);if(autoplayDelay)clearTimeout(autoplayDelay);if(traceTimer)clearInterval(traceTimer);window.removeEventListener('keydown',keyHandler);window.removeEventListener('scroll',spy);});
    window.__projectLabCleanup=()=>cleanup.forEach(fn=>fn());
  }

  window.bindProjectInteractions=bindProjectInteractions;
  document.addEventListener('DOMContentLoaded',()=>setTimeout(bindProjectInteractions,0));
})();
