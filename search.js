async function saveId(input) {
  localStorage.setItem('id', input);
  console.log(input);
  window.location.href = `${window.location.origin}/search.html`
}
