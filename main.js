document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  let logo = document.getElementById("logo-nav");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    logo.setAttribute("src", "images/Logo-footer.png");
  } else {
    nav.classList.remove("scrolled");
    logo.setAttribute("src", "images/Logo-Nav.jpg");
  }
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
