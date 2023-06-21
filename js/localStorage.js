export function getNotesLS() {
  const items = localStorage.getItem('notes');

  return JSON.parse(items);
}

export function setNotesLS(state) {
  localStorage.setItem('notes', JSON.stringify(state));
}
