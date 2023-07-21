export default function init(el) {
  const section = el.closest('.section > div.icon');
  section.classList.add('icon-section');
  console.log("Element: ", el);
}
