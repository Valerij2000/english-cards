const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const link = document.querySelector('[data-link-admin]');
const buttonTemplateVords = document.querySelector('[button-template]');
const buttonUniqeVords = document.querySelector('[button-uniqe]');
const buttonPhrases = document.querySelector('[button-phrases]');
const containerUniqe = document.querySelector('[data-uniqe-vords]');
const containerTemplate = document.querySelector('[data-template-vords]');
const containerPhrases = document.querySelector('[data-phrases-vords]');
const captionCounterAdminList = document.querySelectorAll('[data-uniqe-vords] .card-item-title');
const adminButtonLinks = document.querySelectorAll('.card-admin-link');
buttonTemplateVords.addEventListener('click', function () {
	this.classList.add('active-choice');
	buttonUniqeVords.classList.remove('active-choice');
	buttonPhrases.classList.remove('active-choice');
	containerTemplate.classList.remove('hidden');
	containerUniqe.classList.add('hidden');
	containerPhrases.classList.add('hidden');
})
buttonUniqeVords.addEventListener('click', function () {
	this.classList.add('active-choice');
	buttonTemplateVords.classList.remove('active-choice');
	buttonPhrases.classList.remove('active-choice');
	containerUniqe.classList.remove('hidden');
	containerTemplate.classList.add('hidden');
	containerPhrases.classList.add('hidden');
})
buttonPhrases.addEventListener('click', function () {
	this.classList.add('active-choice');
	buttonUniqeVords.classList.remove('active-choice');
	buttonTemplateVords.classList.remove('active-choice');
	containerPhrases.classList.remove('hidden');
	containerTemplate.classList.add('hidden');
	containerUniqe.classList.add('hidden');
})
const handleButtonClick = (e) => {
	const targetSection = e.target.getAttribute("data-section");
	const section = document.querySelector(targetSection);
	targetSection !== "#about" ?
		card.classList.add("is-active") :
		card.classList.remove("is-active");
	card.setAttribute("data-state", targetSection);
	sections.forEach((s) => s.classList.remove("is-active"));
	buttons.forEach((b) => b.classList.remove("is-active"));
	e.target.classList.add("is-active");
	section.classList.add("is-active");
};
buttons.forEach((btn) => {
	btn.addEventListener("click", handleButtonClick);
});
link.addEventListener('click', () => window.location.href = './public/index.html');
captionCounterAdminList.forEach((el, index) => {
	let counter = index + 1;
	if (counter < 10) {
		el.innerHTML = `Part 0${counter}`;
	} else {
		el.innerHTML = `Part ${counter}`;
	}

})
adminButtonLinks.forEach((el, index) => {
	if (index === 0) {
		el.href = `./admin/vords.html`;
	} else {
		el.href = `./admin/vords0${index}.html`;
	}
})