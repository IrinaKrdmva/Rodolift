document.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav1");
  const logo = document.getElementById("logo-nav");
  const menu = document.querySelector(".toggler");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    logo.setAttribute("src", "images/Logo-footer.png");
    menu.setAttribute("src", "images/menu.png");
  } else {
    nav.classList.remove("scrolled");
    logo.setAttribute("src", "images/Logo-Nav.jpg");
    menu.setAttribute("src", "images/menu-black.png");
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
