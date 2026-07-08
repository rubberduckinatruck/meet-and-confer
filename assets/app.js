const data = window.PORTAL_DATA;
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function renderBudgetCards() {
  const target = document.querySelector('#budgetCards');
  target.innerHTML = data.budget.map(item => `
    <article class="metric-card">
      <span>${item.note}</span>
      <strong>${money.format(item.value)}</strong>
      <p>${item.label}</p>
    </article>
  `).join('');
}

function renderPriorities(filter = 'all') {
  const rows = data.priorities
    .filter(item => filter === 'all' || item.status === filter)
    .map(item => `<tr>
      <td><strong>${item.topic}</strong></td>
      <td>${item.priority}</td>
      <td>${item.year}</td>
      <td><span class="pill ${item.status.toLowerCase().replaceAll(' ', '-')}">${item.status}</span></td>
      <td>${item.notes}</td>
    </tr>`).join('');
  document.querySelector('#priorityRows').innerHTML = rows;
}

function renderLists() {
  document.querySelector('#neighborList').innerHTML = data.neighbors.map(x => `<li>${x}</li>`).join('');
  document.querySelector('#peerList').innerHTML = data.peers.map(x => `<li>${x}</li>`).join('');
  document.querySelector('#benefitCards').innerHTML = data.benefits.map(b => `<article class="card"><h3>${b.name}</h3><p><strong>${b.provider}</strong></p><p>${b.detail}</p></article>`).join('');
  document.querySelector('#lawCards').innerHTML = data.law.map(l => `<article class="card"><h3>${l.title}</h3><p>${l.text}</p></article>`).join('');
  document.querySelector('#sourceRows').innerHTML = data.sources.map(s => `<tr><td><strong>${s.page}</strong></td><td>${s.use}</td><td><a href="${s.url}">Original page</a></td></tr>`).join('');
}

function renderTimeline() {
  document.querySelector('#timeline').innerHTML = data.timeline.map(year => `
    <article class="timeline-item">
      <div class="timeline-year">${year.year}</div>
      <div class="timeline-body">
        <h3>${year.title}</h3>
        <ul>${year.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    </article>
  `).join('');
}

function renderChart() {
  const ctx = document.getElementById('budgetChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.budget.map(x => x.label),
      datasets: [{ label: 'FY2025 Amount', data: data.budget.map(x => x.value) }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => money.format(c.raw) } } },
      scales: { y: { ticks: { callback: value => '$' + (value / 1000000) + 'M' } } }
    }
  });
}

function updateRaise() {
  const salary = Number(document.querySelector('#salaryInput').value || 0);
  const pct = Number(document.querySelector('#raiseInput').value || 0);
  const stipend = Number(document.querySelector('#stipendInput').value || 0);
  const recurring = salary * pct / 100;
  const total = salary + recurring + stipend;
  document.querySelector('#raiseOutput').innerHTML = `Estimated recurring increase: <strong>${money.format(recurring)}</strong>. Estimated new total with one-time stipend: <strong>${money.format(total)}</strong>.`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderBudgetCards();
  renderPriorities();
  renderLists();
  renderTimeline();
  renderChart();
  updateRaise();
  document.querySelector('#statusFilter').addEventListener('change', e => renderPriorities(e.target.value));
  ['#salaryInput', '#raiseInput', '#stipendInput'].forEach(sel => document.querySelector(sel).addEventListener('input', updateRaise));
});
