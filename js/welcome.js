const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const link = document.querySelector('[data-link-log]');
const buttonTemplateVords = document.querySelector('[button-template]');
const buttonUniqeVords = document.querySelector('[button-uniqe]');
const containerUniqe = document.querySelector('[data-uniqe-vords]');
const containerTemplate = document.querySelector('[data-template-vords]');
buttonTemplateVords.addEventListener('click', function() {
    this.classList.add('active-choice');
    buttonUniqeVords.classList.remove('active-choice');
    containerTemplate.classList.remove('hidden');
    containerUniqe.classList.add('hidden');
})
buttonUniqeVords.addEventListener('click', function() {
    this.classList.add('active-choice');
    buttonTemplateVords.classList.remove('active-choice');
    containerUniqe.classList.remove('hidden');
    containerTemplate.classList.add('hidden');
})
const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};
buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
});
link.addEventListener('click', () => window.location.href = './login.html');