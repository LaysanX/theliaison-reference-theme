(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('[data-dynamic-form]').forEach(function (form) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      const status = form.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Submitting...';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form)
        });

        if (!response.ok) {
          throw new Error('Submit failed');
        }

        form.reset();
        if (status) {
          status.textContent = 'Submitted successfully.';
        }
      } catch {
        if (status) {
          status.textContent = 'Failed, Please try again later.';
        }
      }
    });
  });
})();
