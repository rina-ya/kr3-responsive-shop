// В КР №1 JavaScript используется только для открытия нативного диалога.
// Кнопка закрытия и Escape работают средствами HTML <dialog>.
document.querySelectorAll('[data-open-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.openModal);
    if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
  });
});
