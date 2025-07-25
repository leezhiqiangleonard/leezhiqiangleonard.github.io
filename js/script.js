const experienceListItems = document.querySelectorAll("li.experience");

experienceListItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // Add "selected" class from all items
    experienceListItems.forEach((li) => li.classList.add("de-selected"));
    // Remove "selected" class to the hovered item
    item.classList.remove("de-selected");
  });

  item.addEventListener("mouseout", () => {
    experienceListItems.forEach((li) => li.classList.remove("de-selected")); // Remove highlight class
  });
});

const educationListItems = document.querySelectorAll("li.education");

educationListItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // Add "selected" class from all items
    educationListItems.forEach((li) => li.classList.add("de-selected"));
    // Remove "selected" class to the hovered item
    item.classList.remove("de-selected");
  });

  item.addEventListener("mouseout", () => {
    educationListItems.forEach((li) => li.classList.remove("de-selected")); // Remove highlight class
  });
});

const projectListItems = document.querySelectorAll("li.projects");

projectListItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // Add "selected" class from all items
    projectListItems.forEach((li) => li.classList.add("de-selected"));
    // Remove "selected" class to the hovered item
    item.classList.remove("de-selected");
  });

  item.addEventListener("mouseout", () => {
    projectListItems.forEach((li) => li.classList.remove("de-selected")); // Remove highlight class
  });
});
