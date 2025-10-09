/* Small JS: mobile menu toggle + announcement search filter + simple results filter */
document.addEventListener('DOMContentLoaded', () => {

  // 🔁 Mobile menu toggle
  const toggleBtn = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggleBtn.classList.toggle('open');
    });
  }

  // 🔍 Announcement search filter
  const annSearch = document.getElementById('annSearch');
  if (annSearch) {
    annSearch.addEventListener('input', e => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.ann-list li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // 📊 Results filter by level
  const resultsFilter = document.getElementById('resultsFilter');
  if (resultsFilter) {
    resultsFilter.addEventListener('change', e => {
      const val = e.target.value;
      document.querySelectorAll('.table tbody tr').forEach(tr => {
        tr.style.display = (val === 'all' || tr.dataset.level === val) ? '' : 'none';
      });
    });
  }

});