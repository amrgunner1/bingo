const GOOGLE_CLIENT_ID = "REPLACE_WITH_YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

const DATA = {
  formula1: {
    title: "Formula 1",
    tagClass: "f1",
    slots: 5,
    items: [
      { id: "f1-japan", label: "01", name: "Japanese Grand Prix", meta: "Suzuka · 27–29 Mar 2026", status: "Next", matches: [] },
      { id: "f1-miami", label: "02", name: "Miami Grand Prix", meta: "Miami · 1–3 May 2026", status: "Soon", matches: [] },
      { id: "f1-canada", label: "03", name: "Canadian Grand Prix", meta: "Montreal · 22–24 May 2026", status: "Soon", matches: [] },
      { id: "f1-monaco", label: "04", name: "Monaco Grand Prix", meta: "Monaco · 5–7 Jun 2026", status: "Soon", matches: [] },
      { id: "f1-barcelona", label: "05", name: "Barcelona-Catalunya Grand Prix", meta: "Barcelona · 12–14 Jun 2026", status: "Soon", matches: [] },
      { id: "f1-austria", label: "06", name: "Austrian Grand Prix", meta: "Spielberg · 26–28 Jun 2026", status: "Soon", matches: [] },
      { id: "f1-britain", label: "07", name: "British Grand Prix", meta: "Silverstone · 3–5 Jul 2026", status: "Soon", matches: [] },
      { id: "f1-belgium", label: "08", name: "Belgian Grand Prix", meta: "Spa · 17–19 Jul 2026", status: "Soon", matches: [] },
      { id: "f1-hungary", label: "09", name: "Hungarian Grand Prix", meta: "Budapest · 24–26 Jul 2026", status: "Soon", matches: [] },
      { id: "f1-netherlands", label: "10", name: "Dutch Grand Prix", meta: "Zandvoort · 21–23 Aug 2026", status: "Soon", matches: [] },
      { id: "f1-italy", label: "11", name: "Italian Grand Prix", meta: "Monza · 4–6 Sep 2026", status: "Soon", matches: [] },
      { id: "f1-madrid", label: "12", name: "Spanish Grand Prix", meta: "Madrid · 11–13 Sep 2026", status: "Soon", matches: [] },
      { id: "f1-azerbaijan", label: "13", name: "Azerbaijan Grand Prix", meta: "Baku · 24–26 Sep 2026", status: "Soon", matches: [] },
      { id: "f1-singapore", label: "14", name: "Singapore Grand Prix", meta: "Singapore · 9–11 Oct 2026", status: "Soon", matches: [] },
      { id: "f1-usa", label: "15", name: "United States Grand Prix", meta: "Austin · 23–25 Oct 2026", status: "Soon", matches: [] },
      { id: "f1-mexico", label: "16", name: "Mexico City Grand Prix", meta: "Mexico City · 30 Oct–1 Nov 2026", status: "Soon", matches: [] },
      { id: "f1-brazil", label: "17", name: "São Paulo Grand Prix", meta: "São Paulo · 6–8 Nov 2026", status: "Soon", matches: [] },
      { id: "f1-vegas", label: "18", name: "Las Vegas Grand Prix", meta: "Las Vegas · 19–21 Nov 2026", status: "Soon", matches: [] },
      { id: "f1-qatar", label: "19", name: "Qatar Grand Prix", meta: "Lusail · 27–29 Nov 2026", status: "Soon", matches: [] },
      { id: "f1-abudhabi", label: "20", name: "Abu Dhabi Grand Prix", meta: "Yas Marina · 4–6 Dec 2026", status: "Soon", matches: [] }
    ]
  },

  premierleague: {
    title: "Premier League",
    tagClass: "pl",
    slots: 5,
    items: [
      { id: "gw31", label: "31", name: "Gameweek 31", meta: "20–22 Mar 2026", matches: ["Bournemouth vs Manchester United","Brighton vs Liverpool","Fulham vs Burnley","Everton vs Chelsea","Leeds United vs Brentford","Newcastle United vs Sunderland","Aston Villa vs West Ham United","Tottenham Hotspur vs Nottingham Forest"] },
      { id: "gw32", label: "32", name: "Gameweek 32", meta: "10–13 Apr 2026", matches: ["West Ham United vs Wolverhampton Wanderers","Arsenal vs Bournemouth","Brentford vs Everton","Burnley vs Brighton & Hove Albion","Crystal Palace vs Newcastle United","Nottingham Forest vs Aston Villa","Liverpool vs Fulham","Sunderland vs Tottenham Hotspur","Chelsea vs Manchester City","Manchester United vs Leeds United"] },
      { id: "gw33", label: "33", name: "Gameweek 33", meta: "18–20 Apr 2026", matches: ["Brentford vs Fulham","Aston Villa vs Sunderland","Leeds United vs Wolverhampton Wanderers","Newcastle United vs Bournemouth","Nottingham Forest vs Burnley","Tottenham Hotspur vs Brighton & Hove Albion","Chelsea vs Manchester United","Everton vs Liverpool","Manchester City vs Arsenal","Crystal Palace vs West Ham United"] },
      { id: "gw34", label: "34", name: "Gameweek 34", meta: "24–27 Apr 2026", matches: ["Sunderland vs Nottingham Forest","Fulham vs Aston Villa","Bournemouth vs Leeds United","Liverpool vs Crystal Palace","West Ham United vs Everton","Wolverhampton Wanderers vs Tottenham Hotspur","Arsenal vs Newcastle United","Burnley vs Manchester City","Brighton & Hove Albion vs Chelsea","Manchester United vs Brentford"] },
      { id: "gw35", label: "35", name: "Gameweek 35", meta: "2 May 2026", matches: ["Bournemouth vs Crystal Palace","Arsenal vs Fulham","Aston Villa vs Tottenham Hotspur","Brentford vs West Ham United","Chelsea vs Nottingham Forest","Everton vs Manchester City","Leeds United vs Burnley","Manchester United vs Liverpool","Newcastle United vs Brighton & Hove Albion","Wolverhampton Wanderers vs Sunderland"] },
      { id: "gw36", label: "36", name: "Gameweek 36", meta: "9 May 2026", matches: ["Brighton & Hove Albion vs Wolverhampton Wanderers","Burnley vs Aston Villa","Crystal Palace vs Everton","Fulham vs Bournemouth","Liverpool vs Chelsea","Manchester City vs Brentford","Nottingham Forest vs Newcastle United","Sunderland vs Manchester United","Tottenham Hotspur vs Leeds United","West Ham United vs Arsenal"] },
      { id: "gw37", label: "37", name: "Gameweek 37", meta: "17 May 2026", matches: ["Bournemouth vs Manchester City","Arsenal vs Burnley","Aston Villa vs Liverpool","Brentford vs Crystal Palace","Chelsea vs Tottenham Hotspur","Everton vs Sunderland","Leeds United vs Brighton & Hove Albion","Manchester United vs Nottingham Forest","Newcastle United vs West Ham United","Wolverhampton Wanderers vs Fulham"] },
      { id: "gw38", label: "38", name: "Gameweek 38", meta: "24 May 2026", matches: ["Brighton & Hove Albion vs Manchester United","Burnley vs Wolverhampton Wanderers","Crystal Palace vs Arsenal","Fulham vs Newcastle United","Liverpool vs Brentford","Manchester City vs Aston Villa","Nottingham Forest vs Bournemouth","Sunderland vs Chelsea","Tottenham Hotspur vs Everton","West Ham United vs Leeds United"] }
    ]
  },

  championsleague: {
    title: "Champions League",
    tagClass: "ucl",
    slots: 10,
    items: [
      { id: "ucl-whole", label: "10", name: "Whole knockout stage", meta: "Quarter-finals · Semi-finals · Final", matches: ["Sporting CP vs Arsenal","Real Madrid vs Bayern München","Barcelona vs Atlético de Madrid","Paris vs Liverpool","Atlético de Madrid vs Barcelona","Liverpool vs Paris","Arsenal vs Sporting CP","Bayern München vs Real Madrid","Semi-final path 1: Paris/Liverpool vs Real Madrid/Bayern München","Semi-final path 2: Barcelona/Atlético de Madrid vs Sporting CP/Arsenal","Final — Puskás Aréna, Budapest · 30 May 2026"] }
    ]
  }
};

const EVENT_TO_COMPETITION = {};
Object.keys(DATA).forEach((key) => {
  DATA[key].items.forEach((item) => {
    EVENT_TO_COMPETITION[item.id] = key;
  });
});

const state = {
  profile: JSON.parse(localStorage.getItem("bingo-grid-profile") || '{"name":"","email":"","signedIn":false}'),
  predictions: JSON.parse(localStorage.getItem("bingo-grid-predictions") || "{}"),
  activeItem: {
    formula1: "f1-japan",
    premierleague: "gw31",
    championsleague: "ucl-whole"
  }
};

function saveProfile() {
  localStorage.setItem("bingo-grid-profile", JSON.stringify(state.profile));
}

function savePredictions() {
  localStorage.setItem("bingo-grid-predictions", JSON.stringify(state.predictions));
}

function ensurePredictionRows(eventId) {
  const competitionKey = EVENT_TO_COMPETITION[eventId];
  const count = DATA[competitionKey]?.slots || 5;

  if (!state.predictions[eventId]) {
    state.predictions[eventId] = Array.from({ length: count }, (_, i) => ({
      id: String(i + 1),
      text: "",
      note: "",
      verified: false
    }));
  }

  return state.predictions[eventId];
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function renderCompetitionPage(pageKey) {
  const listEl = document.getElementById("competitionList");
  const detailEl = document.getElementById("competitionDetail");

  if (!listEl || !detailEl) return;

  const page = DATA[pageKey];
  const activeId = state.activeItem[pageKey];
  const active = page.items.find((item) => item.id === activeId) || page.items[0];

  listEl.innerHTML = page.items.map((item) => `
    <div class="list-card ${item.id === active.id ? "active" : ""}" data-item-id="${item.id}">
      <div class="mini">${item.label}</div>
      <h3>${item.name}</h3>
      <p>${item.meta}</p>
    </div>
  `).join("");

  const matchesHtml = active.matches && active.matches.length
    ? `
      <div class="match-list">
        ${active.matches.map((match) => `<div class="match">${match}</div>`).join("")}
      </div>
    `
    : "";

  const rows = ensurePredictionRows(active.id);

  detailEl.innerHTML = `
    <div class="detail-head">
      <div>
        <div class="eyebrow">Selected item</div>
        <h2>${active.name}</h2>
        <p>${active.meta}</p>
      </div>
      <span class="tag ${page.tagClass}">Register now</span>
    </div>

    ${matchesHtml}

    <div class="prediction-top">
      <div>
        <div class="eyebrow">Prediction entries</div>
        <p>${page.slots} bingo slots for this selection.</p>
      </div>
      <span class="tag ${page.tagClass}">${page.slots} slots</span>
    </div>

    <div class="prediction-list">
      ${rows.map((row, idx) => `
        <div class="prediction-card">
          <div class="slot">${idx + 1}</div>
          <div>
            <textarea class="textarea prediction-text" data-event="${active.id}" data-index="${idx}" placeholder="Write a prediction...">${escapeHtml(row.text)}</textarea>
            <div style="height:8px"></div>
            <input class="input prediction-note" data-event="${active.id}" data-index="${idx}" value="${escapeAttr(row.note)}" placeholder="Verification note after result" />
          </div>
          <div style="display:grid;gap:10px;align-content:start;">
            <button class="verify-btn" data-event="${active.id}" data-index="${idx}">
              ${row.verified ? "Verified" : "Mark verified"}
            </button>
            <div class="verify-note ${row.verified ? "done" : ""}">
              ${row.verified ? "Confirmed as happened." : "Still waiting for post-event check."}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  listEl.querySelectorAll(".list-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.activeItem[pageKey] = card.dataset.itemId;
      renderCompetitionPage(pageKey);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  detailEl.querySelectorAll(".prediction-text").forEach((el) => {
    el.addEventListener("input", (e) => {
      const eventId = e.target.dataset.event;
      const index = Number(e.target.dataset.index);
      ensurePredictionRows(eventId)[index].text = e.target.value;
      savePredictions();
    });
  });

  detailEl.querySelectorAll(".prediction-note").forEach((el) => {
    el.addEventListener("input", (e) => {
      const eventId = e.target.dataset.event;
      const index = Number(e.target.dataset.index);
      ensurePredictionRows(eventId)[index].note = e.target.value;
      savePredictions();
    });
  });

  detailEl.querySelectorAll(".verify-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const eventId = e.target.dataset.event;
      const index = Number(e.target.dataset.index);
      const rows = ensurePredictionRows(eventId);
      rows[index].verified = !rows[index].verified;
      savePredictions();
      renderCompetitionPage(pageKey);
    });
  });
}

function initGoogleLogin() {
  const btn = document.getElementById("googleSignInBtn");
  const status = document.getElementById("authStatus");
  if (!btn || !status) return;

  if (state.profile.signedIn) {
    status.textContent = `Signed in${state.profile.name ? ` as ${state.profile.name}` : ""}.`;
  }

  btn.addEventListener("click", () => {
    if (!window.google || GOOGLE_CLIENT_ID.startsWith("REPLACE_WITH")) {
      state.profile.signedIn = true;
      state.profile.name = state.profile.name || "Demo User";
      saveProfile();
      status.textContent = "Demo sign-in complete. Add a real Google client ID in app.js.";
      return;
    }

    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredentialResponse
    });

    google.accounts.id.prompt();
  });
}

function handleGoogleCredentialResponse(response) {
  const status = document.getElementById("authStatus");
  state.profile.signedIn = true;
  state.profile.token = response.credential;
  saveProfile();
  if (status) status.textContent = "Signed in successfully with Google.";
}

function initPage() {
  const page = document.body.dataset.page;

  if (page === "home") {
    initGoogleLogin();
    return;
  }

  if (DATA[page]) {
    renderCompetitionPage(page);
  }
}

document.addEventListener("DOMContentLoaded", initPage);