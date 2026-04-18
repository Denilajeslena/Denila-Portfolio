const projects = [
  {
    id: "atriva",
    title: "ATRIVA - AI ICU Risk Prediction System",
    summary:
      "Predicts ICU patient risk in real time using multimodal signals and a monitoring dashboard for clinical teams.",
    details:
      "ATRIVA integrates ECG streams and vital signs to generate dynamic risk scores for ICU patients. The system prioritizes early warning by combining model inference, threshold-based alerts, and a clinician-friendly dashboard.",
    tech: ["Python", "Machine Learning", "Time-Series Analytics", "Realtime Dashboard", "Healthcare AI"],
    components: [
      "ECG + vitals ingestion pipeline",
      "Risk scoring engine with real-time inference",
      "Alert manager for high-risk events",
      "Monitoring dashboard for patient trends",
    ],
    github: "https://github.com/haarish-v/CodeCrux.git",
  },
  {
    id: "argus",
    title: "ARGUS - AI Campus Safety System",
    summary:
      "Monitors campus zones by combining AI detection and sensor data to identify suspicious activity and push alerts.",
    details:
      "ARGUS is designed for smart campus surveillance. It fuses camera-based activity analysis with edge sensor inputs, then routes priority alerts to a live dashboard for rapid response and monitoring.",
    tech: ["Computer Vision", "IoT Sensors", "Python", "Realtime Alerts", "Web Dashboard"],
    components: [
      "Suspicious-activity detection model",
      "Sensor event fusion layer",
      "Incident alerting workflow",
      "Live monitoring dashboard",
    ],
    github: "https://github.com/Denilajeslena/ARGUS.git",
  },
  {
    id: "agri-sync",
    title: "AGRI-SYNC - Smart Irrigation System",
    summary:
      "Automates irrigation with IoT sensing, weather intelligence, and ML support for crop health and pest awareness.",
    details:
      "AGRI-SYNC uses soil and environmental sensors with weather API data to optimize irrigation timing. It extends automation with pest-risk indicators, enabling more efficient water usage and proactive field management.",
    tech: ["IoT", "Machine Learning", "Weather API", "MQTT", "Automation"],
    components: [
      "Soil moisture and climate sensor network",
      "Irrigation decision engine",
      "Weather-aware scheduling module",
      "Pest detection and notification support",
    ],
  },
  {
    id: "campussync",
    title: "CAMPUSSYNC - Event Management System",
    summary:
      "Role-based event platform for students and admins with event lifecycle management and registrations.",
    details:
      "CAMPUSSYNC streamlines campus events through role-specific workflows. Admins can create and publish events, while students can browse, register, and track participation in one unified system.",
    tech: ["Web Development", "Role-based Access", "Database", "JavaScript", "Full Stack"],
    components: [
      "Admin event creation and approval panel",
      "Student registration and participation module",
      "Role-based access control",
      "Event tracking and status management",
    ],
    github: "https://github.com/Denilajeslena/campusSync2.git",
  },
  {
    id: "multi-counter",
    title: "MULTI-APPLICATION DOWN COUNTER SYSTEM",
    summary:
      "Embedded counter logic applied to traffic signaling and parking workflows with integrated control behavior.",
    details:
      "This project demonstrates reusable down-counter architecture for multiple embedded applications. It covers timing-driven traffic light control and parking state coordination with hardware-aware logic.",
    tech: ["Embedded C", "Microcontroller Logic", "Control Systems", "Hardware Integration"],
    components: [
      "Countdown timing core",
      "Traffic signal control mapping",
      "Parking gate/slot state control",
      "Embedded I/O integration layer",
    ],
  },
  {
    id: "car-racing",
    title: "2D CAR RACING GAME (C Language)",
    summary:
      "Console-based 2D racing game with collision detection, score logic, and progressively challenging gameplay.",
    details:
      "Built in C for a terminal environment, this game includes obstacle movement, player controls, collision checks, and score progression. It demonstrates game-loop design and efficient state handling in low-level programming.",
    tech: ["C Language", "Game Loop", "Collision Detection", "Console Graphics"],
    components: [
      "Player movement and controls",
      "Obstacle generation and speed scaling",
      "Collision and game-over logic",
      "Scoring and replay flow",
    ],
  },
  {
    id: "eduassist",
    title: "EDUASSIST - Accessibility Web App",
    summary:
      "Accessibility-focused platform with text-to-speech, live captions, voice navigation, and multilingual support.",
    details:
      "EDUASSIST is designed to make digital learning inclusive for diverse users. It combines text-to-speech for easier content consumption, real-time captions for better comprehension, voice navigation for hands-free interaction, and multilingual support to serve broader learner communities. The application emphasizes accessible UI patterns and low-friction interaction design.",
    tech: ["Next.js", "Google APIs", "JavaScript", "Accessibility", "Web App"],
    components: [
      "Text-to-speech content playback",
      "Real-time captions and subtitle rendering",
      "Voice-command navigation system",
      "Multilingual interface and content support",
    ],
    github: "https://github.com/nitharshh2007-creator/Auriva2.0",
  },
  {
    id: "smart-tv-lru",
    title: "SMART TV LRU SYSTEM",
    summary:
      "Applies LRU caching to personalize and prioritize channel access based on user viewing behavior.",
    details:
      "This project models smart remote behavior by maintaining channel recency patterns with LRU logic. It uses user interaction history to surface frequently accessed channels and improve switching efficiency.",
    tech: ["Data Structures", "LRU Cache", "C/C++", "Recommendation Logic"],
    components: [
      "Channel history tracking",
      "LRU cache implementation",
      "Priority channel recommendation",
      "Remote interaction simulation",
    ],
  },
  {
    id: "ai-smart-fan",
    title: "AI SMART FAN SYSTEM",
    summary:
      "Predicts and adjusts fan speed using ML signals and control logic for smarter energy-conscious operation.",
    details:
      "AI SMART FAN CONTROL SYSTEM learns from environmental and user data patterns to infer optimal fan speed. The workflow combines signal processing and control-system design for stable, adaptive behavior.",
    tech: ["Machine Learning", "Signal Processing", "Control Systems", "Embedded Integration"],
    components: [
      "Input signal filtering pipeline",
      "ML-based speed prediction model",
      "Control algorithm for fan actuation",
      "Monitoring and response feedback loop",
    ],
  },
];

let imageManifest = {};

const projectGrid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalComponents = document.getElementById("modal-components");
const modalGallery = document.getElementById("modal-gallery");
const modalGalleryBlock = document.getElementById("modal-gallery-block");
const modalNoGallery = document.getElementById("modal-no-gallery");
const closeButton = document.getElementById("modal-close");
const backToTop = document.getElementById("back-to-top");
const navToggle = document.querySelector(".nav-toggle");
const navLinksWrap = document.querySelector(".nav-links");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const heroDate = document.getElementById("hero-date");

function updateHeroDate() {
  if (!heroDate) {
    return;
  }

  const now = new Date();
  heroDate.textContent = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.style.setProperty("--stagger", `${index * 100}ms`);
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p class="project-desc">${project.summary}</p>
    <p class="project-meta"><strong>Tech:</strong> ${project.tech.slice(0, 3).join(" • ")}</p>
    <div class="project-actions">
      <button class="btn btn-primary btn-card" data-detail-id="${project.id}">View Details</button>
      ${project.github ? `<a class="btn btn-secondary btn-card" href="${project.github}" target="_blank" rel="noreferrer">GitHub Repo</a>` : ''}
    </div>
  `;
  projectGrid.appendChild(card);
}

function renderProjects() {
  projects.forEach((project, index) => createProjectCard(project, index));
}

async function loadImageManifest() {
  const fallback = {
    atriva: ["atriva-1.jpg", "atriva-2.jpg", "atriva-3.jpg"],
    argus: ["argus-1.jpg", "argus-2.jpg", "argus-3.jpg", "argus-4.jpg"],
    "agri-sync": [
      "Screenshot 2026-04-18 102423.png",
      "Screenshot 2026-04-18 102525.png",
      "Screenshot 2026-04-18 102532.png",
      "Screenshot 2026-04-18 102539.png",
    ],
    campussync: [
      "WhatsApp Image 2026-03-06 at 10.36.24 PM (1).jpeg",
      "WhatsApp Image 2026-03-06 at 10.36.24 PM.jpeg",
      "WhatsApp Image 2026-04-01 at 8.21.26 PM (1).jpeg",
      "WhatsApp Image 2026-04-01 at 8.21.26 PM.jpeg",
    ],
    "multi-counter": [
      "Screenshot 2026-04-18 103731.png",
      "Screenshot 2026-04-18 103747.png",
      "Screenshot 2026-04-18 103755.png",
    ],
    "car-racing": ["Screenshot 2026-04-18 104026.png", "Screenshot 2026-04-18 104035.png"],
    eduassist: [],
    "smart-tv-lru": [
      "Screenshot 2026-04-18 104426.png",
      "Screenshot 2026-04-18 104432.png",
      "Screenshot 2026-04-18 104438.png",
    ],
    "ai-smart-fan": [
      "Screenshot 2026-04-18 104501.png",
      "Screenshot 2026-04-18 104513.png",
      "Screenshot 2026-04-18 104524.png",
    ],
  };

  try {
    const response = await fetch("assets/images/projects/manifest.json", { cache: "no-store" });
    if (!response.ok) {
      imageManifest = fallback;
      return;
    }

    imageManifest = await response.json();
  } catch (error) {
    imageManifest = fallback;
  }
}

function openModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) {
    return;
  }

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.details;
  modalTech.textContent = project.tech.join(", ");

  modalComponents.innerHTML = "";
  project.components.forEach((component) => {
    const li = document.createElement("li");
    li.textContent = component;
    modalComponents.appendChild(li);
  });

  modalGallery.innerHTML = "";
  const images = Array.isArray(imageManifest[project.id]) ? imageManifest[project.id] : [];
  const shouldShowGallery = project.id !== "eduassist" && images.length > 0;

  modalGalleryBlock.hidden = !shouldShowGallery;
  modalNoGallery.hidden = shouldShowGallery;

  if (!shouldShowGallery) {
    modalNoGallery.textContent =
      project.id === "eduassist"
        ? "This project currently focuses on architecture and accessibility features, with text-first documentation for text-to-speech, captions, voice navigation, and multilingual support."
        : "Visual assets are not available for this project yet.";
    modal.showModal();
    return;
  }

  images.forEach((imageName, index) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = `assets/images/projects/${project.id}/${imageName}`;
    img.alt = `${project.title} visual ${index + 1}`;
    img.loading = "lazy";
    img.onerror = () => {
      img.style.display = "none";
    };

    figure.appendChild(img);
    modalGallery.appendChild(figure);
  });

  modal.showModal();
}

function closeModal() {
  if (modal.open) {
    modal.close();
  }
}

function updateActiveNav() {
  const sections = Array.from(document.querySelectorAll("main section"));
  const scrollMarker = window.scrollY + 120;

  for (const section of sections) {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollMarker >= top && scrollMarker < bottom) {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${section.id}`;
        link.classList.toggle("active", isActive);
      });
      break;
    }
  }
}

function handleReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const skillTags = Array.from(document.querySelectorAll(".skill-tag"));
  skillTags.forEach((tag, index) => tag.style.setProperty("--stagger", `${index * 80}ms`));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);

          if (entry.target.classList.contains("skill-card")) {
            const meter = entry.target.querySelector(".skill-meter span");
            const level = entry.target.getAttribute("data-skill");
            meter.style.width = `${level}%`;
          }
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function bindEvents() {
  projectGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const detailId = target.getAttribute("data-detail-id");
    if (detailId) {
      openModal(detailId);
    }
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const inside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!inside) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 600);
    updateActiveNav();
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  navToggle.addEventListener("click", () => {
    const isOpen = navLinksWrap.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksWrap.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

async function init() {
  await loadImageManifest();
  renderProjects();
  bindEvents();
  handleReveal();
  updateActiveNav();
  updateHeroDate();
  requestAnimationFrame(() => {
    document.body.classList.add("hero-ready");
  });
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

init();
