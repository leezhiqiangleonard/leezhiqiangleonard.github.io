const listItems = document.querySelectorAll("li.card");

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // Add "selected" class from all items
    listItems.forEach((li) => li.classList.add("de-selected"));
    // Remove "selected" class to the hovered item
    item.classList.remove("de-selected");
  });

  item.addEventListener("mouseout", () => {
    listItems.forEach((li) => li.classList.remove("de-selected")); // Remove highlight class
  });
});
