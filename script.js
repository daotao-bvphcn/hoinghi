function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = `<p class="text-danger">Không thể tải: ${file}</p>`;
      }
    } catch (err) {
      el.innerHTML = `<p class="text-danger">Lỗi tải: ${file}</p>`;
    }
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);
