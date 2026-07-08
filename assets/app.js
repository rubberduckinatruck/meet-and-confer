const db = window.MC_DB;
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function unique(values) {
  return [...new Set(values)].filter(Boolean).sort();
}

function contains(record, query) {
  if (!query) return true;
  return JSON.stringify(record).toLowerCase().includes(query.toLowerCase());
}

function fillSelect(selector, values, allLabel) {
  const select = document.querySelector(selector);
  select.innerHTML = `<option value="all">${allLabel}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join('');
}

function renderStatus() {
  document.querySelector('#cycleTitle').textContent = `${db.meta.cycle} Status`;
  const rows = [
    ['Phase', db.meta.phase],
    ['Board action', db.meta.boardAction],
    ['Focus areas', db.meta.focusAreas.join(', ')],
    ['Last updated', db.meta.lastUpdated],
    ['Contact', `<a href="mailto:${db.meta.contact}">${db.meta.contact}</a>`]
  ];
  document.querySelector('#statusDetails').innerHTML = rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
}

function renderBudgetCards() {
  document.querySelector('#budgetCards').innerHTML = db.budget.map(item => `
    <article class="metric-card">
      <span>${item.note}</span>
      <strong>${money.format(item.value)}</strong>
      <p>${item.label}</p>
      <small>${item.type}</small>
    </article>
  `).join('');
}

function renderPriorities() {
  const q = document.querySelector('#trackerSearch').value;
  const category = document.querySelector('#categoryFilter').value;
  const status = document.querySelector('#statusFilter').value;
  const rows = db.priorities
    .filter(item => category === 'all' || item.category === category)
    .filter(item => status === 'all' || item.status === status)
    .filter(item => contains(item, q))
    .map(item => `<tr>
      <td><strong>${item.topic}</strong><br><small>${item.outcome}</small></td>
      <td>${item.priority}</td>
      <td>${item.category}</td>
      <td>${item.year}</td>
      <td><span class="pill ${slug(item.status)}">${item.status}</span></td>
      <td>${item.fiscalType}</td>
      <td>${item.notes}</td>
    </tr>`).join('');
  document.querySelector('#priorityRows').innerHTML = rows || '<tr><td colspan="7">No matching priorities found.</td></tr>';
}

function renderAffordability() {
  document.querySelector('#affordCards').innerHTML = db.affordability.map(item => `
    <article class="card afford-card">
      <h3>${item.title}</h3>
      <p><strong>${item.status}</strong></p>
      <p>${item.detail}</p>
    </article>
  `).join('');
}

function renderTimeline() {
  const q = document.querySelector('#historySearch').value;
  const yearFilter = document.querySelector('#yearFilter').value;
  const filtered = db.historicalYears
    .filter(year => yearFilter === 'all' || year.year === yearFilter)
    .filter(year => contains(year, q));
  document.querySelector('#timeline').innerHTML = filtered.map(year => `
    <article class="timeline-item">
      <div class="timeline-year">${year.year}</div>
      <div class="timeline-body">
        <div class="timeline-title-row"><h3>${year.title}</h3><span class="pill ${slug(year.outcomeStatus)}">${year.outcomeStatus}</span></div>
        <p>${year.summary}</p>
        <ul>${year.priorities.map(i => `<li>${i}</li>`).join('')}</ul>
        <small>Source records: ${year.documents.join(', ')}</small>
      </div>
    </article>
  `).join('') || '<p>No matching historical records found.</p>';
}

function renderSearch() {
  const q = document.querySelector('#globalSearch').value.trim();
  const records = [
    ...db.priorities.map(x => ({ type: 'Priority', title: x.topic, body: `${x.priority} ${x.notes} ${x.category} ${x.status}` })),
    ...db.historicalYears.map(x => ({ type: 'Historical Year', title: x.year, body: `${x.title} ${x.summary} ${x.priorities.join(' ')}` })),
    ...db.documents.map(x => ({ type: 'Document', title: x.title, body: `${x.category} ${x.use} ${x.url}` })),
    ...db.financeTerms.map(x => ({ type: 'Finance Term', title: x.term, body: `${x.category} ${x.definition}` })),
    ...db.law.map(x => ({ type: 'Law & Policy', title: x.title, body: `${x.category} ${x.text}` })),
    ...db.benefits.map(x => ({ type: 'Benefits', title: x.name, body: `${x.provider} ${x.detail}` }))
  ];
  const matches = q ? records.filter(r => contains(r, q)).slice(0, 12) : records.slice(0, 6);
  document.querySelector('#searchResults').innerHTML = matches.map(r => `
    <article class="card search-card">
      <span class="eyebrow">${r.type}</span>
      <h3>${r.title}</h3>
      <p>${r.body}</p>
    </article>
  `).join('') || '<p>No matching records found.</p>';
}

function renderDocuments() {
  const q = document.querySelector('#docSearch').value;
  const category = document.querySelector('#docCategory').value;
  const rows = db.documents
    .filter(doc => category === 'all' || doc.category === category)
    .filter(doc => contains(doc, q))
    .map(doc => `<tr><td><strong>${doc.title}</strong></td><td>${doc.category}</td><td>${doc.use}</td><td><a href="${doc.url}">Original page</a></td></tr>`).join('');
  document.querySelector('#sourceRows').innerHTML = rows || '<tr><td colspan="4">No matching documents found.</td></tr>';
}

function renderListsAndDatabase() {
  document.querySelector('#neighborList').innerHTML = db.comparisons.neighbors.map(x => `<li>${x}</li>`).join('');
  document.querySelector('#peerList').innerHTML = db.comparisons.peers.map(x => `<li>${x}</li>`).join('');
  document.querySelector('#databaseCards').innerHTML = db.databaseCollections.map(item => `
    <article class="card">
      <h3>${item.name}</h3>
      <p>${item.purpose}</p>
      <small><strong>Update cadence:</strong> ${item.updateCadence}</small>
    </article>
  `).join('');
}

function countBy(records, key) {
  return records.reduce((acc, item) => {
    const value = item[key] || 'Uncategorized';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function drawChart(id, type, labels, values, label) {
  const ctx = document.getElementById(id);
  return new Chart(ctx, {
    type,
    data: { labels, datasets: [{ label, data: values }] },
    options: {
      responsive: true,
      plugins: { legend: { display: type !== 'bar' }, tooltip: { callbacks: { label: c => id === 'budgetChart' ? money.format(c.raw) : `${c.raw}` } } },
      scales: type === 'bar' ? { y: { ticks: { callback: value => id === 'budgetChart' ? '$' + (value / 1000000) + 'M' : value } } } : undefined
    }
  });
}

function renderCharts() {
  drawChart('budgetChart', 'bar', db.budget.map(x => x.label), db.budget.map(x => x.value), 'FY2025 Amount');
  const categoryCounts = countBy(db.priorities, 'category');
  drawChart('categoryChart', 'doughnut', Object.keys(categoryCounts), Object.values(categoryCounts), 'Priorities');
  const statusCounts = countBy(db.priorities, 'status');
  drawChart('statusChart', 'doughnut', Object.keys(statusCounts), Object.values(statusCounts), 'Statuses');
  drawChart('historyChart', 'bar', db.historicalYears.map(x => x.year), db.historicalYears.map(x => x.priorities.length), 'Priority Count');
}

function wireEvents() {
  fillSelect('#categoryFilter', unique(db.priorities.map(x => x.category)), 'All categories');
  fillSelect('#statusFilter', unique(db.priorities.map(x => x.status)), 'All statuses');
  fillSelect('#yearFilter', db.historicalYears.map(x => x.year), 'All years');
  fillSelect('#docCategory', unique(db.documents.map(x => x.category)), 'All categories');

  ['#trackerSearch', '#categoryFilter', '#statusFilter'].forEach(sel => document.querySelector(sel).addEventListener('input', renderPriorities));
  ['#historySearch', '#yearFilter'].forEach(sel => document.querySelector(sel).addEventListener('input', renderTimeline));
  ['#docSearch', '#docCategory'].forEach(sel => document.querySelector(sel).addEventListener('input', renderDocuments));
  document.querySelector('#globalSearch').addEventListener('input', renderSearch);
}

document.addEventListener('DOMContentLoaded', () => {
  wireEvents();
  renderStatus();
  renderBudgetCards();
  renderPriorities();
  renderAffordability();
  renderTimeline();
  renderSearch();
  renderDocuments();
  renderListsAndDatabase();
  renderCharts();
});
