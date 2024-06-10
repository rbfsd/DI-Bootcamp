document.getElementById("theme-toggle").addEventListener("click", () => {
  const bodyClass = document.body.classList;
  bodyClass.toggle("light-theme");
  bodyClass.toggle("dark-theme");
});
