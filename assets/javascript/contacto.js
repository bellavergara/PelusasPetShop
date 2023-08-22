document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      modal.show();
    });
  });