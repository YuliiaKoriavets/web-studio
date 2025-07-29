document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter__button");
  const projectItems = document.querySelectorAll(".card-set__item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.textContent.trim();

      projectItems.forEach((item) => {
        const itemCategory = item
          .querySelector(".project__type")
          .textContent.trim();

        if (category === "All" || itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
