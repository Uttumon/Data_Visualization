document.addEventListener("DOMContentLoaded", function() {
    // Select all rectangle elements for the bar chart
    const rects = document.querySelectorAll("rect");
    rects.forEach((rect, index) => {
      rect.addEventListener("mouseover", function() {
        rect.setAttribute("fill", "orange");
      });
      rect.addEventListener("mouseout", function() {
        // Restore original colors based on index
        rect.setAttribute("fill", index % 2 === 0 ? "blue" : "green");
      });
    });
  
    // Add interactivity to the pie chart circle
    const circle = document.querySelector("circle");
    circle && circle.addEventListener("click", function() {
      circle.setAttribute("fill", "pink");
    });
  });
  