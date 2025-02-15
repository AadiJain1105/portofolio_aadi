document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to Aadi Jain's Portfolio!");

  // Smooth scrolling for sidebar navigation
  document.querySelectorAll(".sidebar ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 10,
          behavior: "smooth",
        });
      }
    });
  });
});
