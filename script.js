let currentOpenMenu = document.getElementById("home"); // Home menu is always open initially

function toggleMenu(menuId) {
  const menuContent = document.getElementById(menuId);

  if (currentOpenMenu && currentOpenMenu !== menuContent) {
    currentOpenMenu.classList.remove("expanded");
  }

  if (menuContent.classList.contains("expanded")) {
    // If the clicked menu is already expanded, do nothing
    return;
  } else {
    menuContent.classList.add("expanded");
  }

  currentOpenMenu = menuContent;
}
