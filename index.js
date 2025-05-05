function showSection(sectionId, clickedBtn = null) {
  const sections = ["about", "skills", "education", "certifications"];
  const titleMap = {
    about: "Know me more",
    skills: "Technical Skills",
    certifications: "Certification",
    education: "Education",
  };
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
