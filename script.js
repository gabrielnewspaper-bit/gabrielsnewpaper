const now = new Date();
document.getElementById('year').textContent = now.getFullYear();
document.getElementById('today-date').textContent = now.toLocaleDateString('en-NG', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
}).toUpperCase();
