//text animations
var typed = new Typed("#element", {
  strings: [
    "an Information Technology Student",
    "an Aspiring Web Developer",
    "an Aspiring Application Developer",
    "a Freelance Graphic Designer",
    "a Tech Enthusiast",
  ],
  typeSpeed: 100,
  loop: true,
});

//button functions
function showSection(sectionId, clickedBtn = null) {
  const sections = ["about", "skills", "education", "certifications"];
  const titleMap = {
    about: "Know me more",
    skills: "Technical Skills",
    certifications: "Certifications",
    education: "Education",
  };

  //button active state
  sections.forEach((id) => {
    document.getElementById(id).style.display =
      id === sectionId ? "block" : "none";
  });

  document.getElementById("section-title").innerText = titleMap[sectionId];
  if (clickedBtn) {
    document
      .querySelectorAll(".about .btn")
      .forEach((btn) => btn.classList.remove("active-btn"));
    clickedBtn.classList.add("active-btn");
  }
}
window.onload = () => {
  showSection("about", document.getElementById("about-btn"));
};

