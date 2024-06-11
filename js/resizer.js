document.querySelectorAll(".scaler").forEach((resizer) => {
  // Get the edge data attribute which indicates left, right, top, or bottom
  const edge = resizer.dataset.edge;
  const sidebar = resizer.parentElement;

  initializeResizer(resizer, sidebar, edge);
});

function initializeResizer(resizer, sidebar, edge) {
  let startX, startWidth;

  // Handler for mousedown event
  function onMouseDown(event) {
    // Prevent text selection
    event.preventDefault();

    startX = event.clientX;
    startWidth = parseInt(window.getComputedStyle(sidebar).width, 10);

    // Add event listeners for mousemove and mouseup
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  // Handler for mousemove event
  function onMouseMove(event) {
    const dx = event.clientX - startX;
    let newWidth = startWidth;

    // Calculate new width or height based on the edge
    if (edge === "left") {
      newWidth = startWidth - dx;
    } else if (edge === "right") {
      newWidth = startWidth + dx;
    }
    // Set the new width with a minimum constraint
    sidebar.style.width = `${newWidth}px`;
  }

  // Handler for mouseup event
  function onMouseUp() {
    // Remove event listeners for mousemove and mouseup
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  // Attach mousedown event listener to the resizer
  resizer.addEventListener("mousedown", onMouseDown);
}
