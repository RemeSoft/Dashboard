const sidebars = document.querySelectorAll("aside");
const sidebarSwitches = document.querySelectorAll(".sidebar-switch");

function closeSidebar(side) {
  sidebars.forEach((sidebar) => {
    const sidebarSide = sidebar.dataset.side;
    if (sidebarSide === side) {
      sidebar.classList.toggle("w-0");
    }
  });
}

sidebarSwitches.forEach((button) => {
  const side = button.dataset.side;
  button.addEventListener("click", () => closeSidebar(side));
});
