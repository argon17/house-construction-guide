import { guide } from "./guide-data.js";

const primaryNav = document.querySelector("#primary-nav");
const secondaryNav = document.querySelector("#secondary-nav");
const phasesRoot = document.querySelector("#phases");
const progress = document.querySelector("#progress");
const intro = {
  eyebrow: document.querySelector("#guide-eyebrow"),
  title: document.querySelector("#guide-title"),
  summary: document.querySelector("#guide-summary")
};

const splitIndex = 7;
const phaseButtons = [];
const phasePanels = [];

intro.eyebrow.textContent = guide.eyebrow;
intro.title.textContent = guide.title;
intro.summary.textContent = guide.summary;

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (typeof text === "string") {
    element.textContent = text;
  }

  return element;
}

function renderTag(tag) {
  if (!tag) {
    return null;
  }

  return createElement("span", `tag tag-${tag.tone}`, tag.text);
}

function renderItem(item) {
  const card = createElement("article", `item-card ${item.tone}`);
  const title = createElement("h3", "item-title", item.title);
  const body = createElement("p", "item-body", item.body);
  const tag = renderTag(item.tag);

  card.append(title, body);

  if (tag) {
    card.append(tag);
  }

  return card;
}

function renderDocuments(documents) {
  if (!documents) {
    return null;
  }

  const box = createElement("section", "doc-box");
  const heading = createElement("h3", "doc-title", documents.title);
  const list = createElement("ul", "doc-list");

  documents.items.forEach((item) => {
    const line = createElement("li", "", item);
    list.append(line);
  });

  box.append(heading, list);

  return box;
}

function renderPhase(phase, index) {
  const panel = createElement("article", "phase-content");
  const header = createElement("div", "phase-header");
  const phaseNum = createElement("span", "phase-num", phase.phaseLabel);
  const title = createElement("h2", "phase-title", phase.title);
  const description = createElement("p", "phase-desc", phase.description);
  const grid = createElement("div", "items-grid");
  const documents = renderDocuments(phase.documents);

  panel.id = phase.id;
  panel.dataset.index = String(index);
  panel.setAttribute("aria-labelledby", `${phase.id}-button`);

  header.append(phaseNum, title);
  phase.items.forEach((item) => grid.append(renderItem(item)));
  panel.append(header, description, grid);

  if (documents) {
    panel.append(documents);
  }

  return panel;
}

function createButton(phase, index) {
  const button = createElement("button", "phase-btn", phase.navLabel);

  button.type = "button";
  button.id = `${phase.id}-button`;
  button.dataset.index = String(index);
  button.setAttribute("aria-controls", phase.id);
  button.addEventListener("click", () => setActivePhase(index, true));

  return button;
}

function renderGuide() {
  guide.phases.forEach((phase, index) => {
    const button = createButton(phase, index);
    const panel = renderPhase(phase, index);

    if (index < splitIndex) {
      primaryNav.append(button);
    } else {
      secondaryNav.append(button);
    }

    phasesRoot.append(panel);
    phaseButtons.push(button);
    phasePanels.push(panel);
  });
}

function updateUrlForPhase(phaseId, mode = "replace") {
  const nextUrl = `#${phaseId}`;

  if (mode === "push") {
    window.history.pushState({ phaseId }, "", nextUrl);
    return;
  }

  window.history.replaceState({ phaseId }, "", nextUrl);
}

function setActivePhase(index, pushHash = false) {
  const total = guide.phases.length;
  const safeIndex = Math.min(Math.max(index, 0), total - 1);
  const activePhase = guide.phases[safeIndex];

  phasePanels.forEach((panel, panelIndex) => {
    const isActive = panelIndex === safeIndex;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  phaseButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === safeIndex;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  progress.style.width = `${Math.round(((safeIndex + 1) / total) * 100)}%`;
  document.title = `${activePhase.navLabel} | House Construction Framework`;

  if (pushHash) {
    updateUrlForPhase(activePhase.id, "push");
  }
}

function getPhaseIndexFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const index = guide.phases.findIndex((phase) => phase.id === hash);

  return index >= 0 ? index : 0;
}

renderGuide();
updateUrlForPhase(guide.phases[getPhaseIndexFromHash()].id, "replace");
setActivePhase(getPhaseIndexFromHash(), false);

window.addEventListener("hashchange", () => {
  setActivePhase(getPhaseIndexFromHash(), false);
});

window.addEventListener("popstate", () => {
  setActivePhase(getPhaseIndexFromHash(), false);
});
