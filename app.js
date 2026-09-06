(function () {
  "use strict";

  const data = window.SEMINAR_DATA;
  if (!data) return;

  const byId = (id) => document.getElementById(id);

  function setText(id, value) {
    const node = byId(id);
    if (node && value) node.textContent = value;
  }

  function parseDate(dateString) {
    return new Date(dateString + "T12:00:00");
  }

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatDate(dateString, short) {
    return new Intl.DateTimeFormat("en-CA", {
      weekday: short ? "short" : "long",
      month: short ? "short" : "long",
      day: "numeric",
      year: "numeric",
    }).format(parseDate(dateString));
  }

  function buildSchedule() {
    const slots = [];
    const start = parseDate(data.schedule.firstDate);
    const end = parseDate(data.schedule.lastDate);
    const omitted = new Set(data.schedule.omittedDates || []);
    const talks = new Map((data.schedule.talks || []).map((talk) => [talk.date, talk]));

    for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 7)) {
      const key = dateKey(cursor);
      if (!omitted.has(key)) {
        slots.push({ date: key, ...(talks.get(key) || {}) });
      }
    }
    return slots;
  }

  function makeCell(text, className) {
    const cell = document.createElement("td");
    if (className) cell.className = className;
    cell.textContent = text;
    return cell;
  }

  function renderSchedule(slots) {
    const body = byId("schedule-body");
    body.replaceChildren();

    slots.forEach((slot) => {
      const booked = Boolean(slot.speaker);
      const row = document.createElement("tr");
      row.className = booked ? "is-booked" : "is-open";

      row.appendChild(makeCell(formatDate(slot.date, true), "date-cell"));

      const speakerCell = document.createElement("td");
      if (booked) {
        const name = document.createElement("span");
        name.className = "speaker-name";
        name.textContent = slot.speaker;
        speakerCell.appendChild(name);
        if (slot.affiliation) {
          const affiliation = document.createElement("span");
          affiliation.className = "speaker-affiliation";
          affiliation.textContent = slot.affiliation;
          speakerCell.appendChild(affiliation);
        }
      } else {
        speakerCell.className = "muted-cell";
        speakerCell.textContent = "Available";
      }
      row.appendChild(speakerCell);

      const talkCell = document.createElement("td");
      if (booked) {
        const talkTitle = document.createElement("span");
        talkTitle.className = slot.title ? "talk-title" : "muted-cell";
        talkTitle.textContent = slot.title || "Title to be announced";
        talkCell.appendChild(talkTitle);

        if (slot.abstract) {
          const details = document.createElement("details");
          details.className = "abstract-details";

          const summary = document.createElement("summary");
          summary.textContent = "Read abstract";

          const abstract = document.createElement("p");
          abstract.textContent = slot.abstract;

          details.append(summary, abstract);
          talkCell.appendChild(details);
        }
      } else {
        talkCell.className = "muted-cell";
        talkCell.textContent = "Choose this date to speak";
      }
      row.appendChild(talkCell);

      const statusCell = document.createElement("td");
      statusCell.className = "status-cell";
      const status = document.createElement("span");
      status.className = `status-pill ${booked ? "status-booked" : "status-open"}`;
      status.textContent = booked ? "Booked" : "Open";
      statusCell.appendChild(status);
      row.appendChild(statusCell);

      body.appendChild(row);
    });
  }

  function renderFeatured(slots) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextBooked = slots.find(
      (slot) => slot.speaker && parseDate(slot.date) >= today
    );
    const nextOpen = slots.find((slot) => parseDate(slot.date) >= today);
    const featured = nextBooked || nextOpen || slots[0];
    const card = byId("featured-talk");
    card.replaceChildren();

    if (!featured) {
      const message = document.createElement("p");
      message.textContent = "The next seminar schedule will be announced here.";
      card.appendChild(message);
      return;
    }

    const date = document.createElement("p");
    date.className = "featured-date";
    date.textContent = formatDate(featured.date, false);
    card.appendChild(date);

    const title = document.createElement("h3");
    title.className = "featured-title";
    title.textContent = featured.speaker
      ? featured.title || "Title to be announced"
      : "This speaking slot is available";
    card.appendChild(title);

    const speaker = document.createElement("p");
    speaker.className = "featured-speaker";
    speaker.textContent = featured.speaker
      ? [featured.speaker, featured.affiliation].filter(Boolean).join(" · ")
      : "Sign up to share recent work, a developing idea, or a completed result.";
    card.appendChild(speaker);

    if (featured.abstract) {
      const abstract = document.createElement("p");
      abstract.className = "featured-abstract";
      abstract.textContent = featured.abstract;
      card.appendChild(abstract);
    }

    const signupTarget = data.signupUrl ||
      (data.organizer.email
        ? `mailto:${data.organizer.email}?subject=${encodeURIComponent("Probability Seminar talk signup")}`
        : "");

    if (!featured.speaker && signupTarget) {
      const link = document.createElement("a");
      link.className = "text-link featured-link";
      link.href = signupTarget;
      if (data.signupUrl) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.textContent = data.signupUrl ? "Claim this date" : "Ask to claim this date";
      card.appendChild(link);
    }
  }

  function renderSignup() {
    const link = byId("signup-link");
    if (data.signupUrl) {
      link.href = data.signupUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.textContent = "Open the signup sheet";
      return;
    }

    if (data.organizer.email) {
      link.href = `mailto:${data.organizer.email}?subject=${encodeURIComponent("Probability Seminar talk signup")}`;
      link.removeAttribute("aria-disabled");
      link.textContent = "Email the organizer";
    }
  }

  function renderOrganizer() {
    setText("organizer-name", data.organizer.name);
    const emailLink = byId("organizer-email");
    const note = byId("organizer-note");
    if (!data.organizer.email) return;
    emailLink.href = `mailto:${data.organizer.email}`;
    emailLink.textContent = data.organizer.email;
    emailLink.removeAttribute("hidden");
    note.hidden = true;
  }

  function renderPage() {
    document.title = data.name;
    setText("season-label", data.season);
    setText("seminar-description", data.description);
    setText("meeting-frequency", data.meeting.frequency);
    setText("meeting-time", data.meeting.time);
    setText("meeting-location", data.meeting.location);
    setText("announcement-text", data.announcement);
    setText("footer-title", data.name);

    const slots = buildSchedule();
    renderSchedule(slots);
    renderFeatured(slots);
    renderSignup();
    renderOrganizer();
  }

  renderPage();
})();
