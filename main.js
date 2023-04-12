// Элементы формы
const volumeInput = document.querySelector('#square-input');
const volumeRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const ownersSection = document.querySelector(".calc-section-owners");

// Радиокнопки
const radioType = document.querySelectorAll('input[name="fuel"]');
const radioState = document.querySelectorAll('input[name="state"]');
const radioOwners = document.querySelectorAll('input[name="owners"]');
const radioPayment = document.querySelectorAll('input[name="payment"]');

// Cелекты
const selects = document.querySelectorAll('select');
const brand = document.querySelector('#brand');
const model = document.querySelector('#model');
console.log(selects);

const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

// Связка range c тектовым полем

volumeRange.addEventListener('input', function () {
	volumeInput.value = volumeRange.value;
});

volumeInput.addEventListener('input', function () {
	volumeRange.value = volumeInput.value;
});

function calculate() {
	let totalPrice = basePrice * +volumeInput.value; 

	for (let select of selects) {
			totalPrice = totalPrice * +select.value	
	} 

	for (let radio of radioType) {
		if (radio.checked == true) {
			totalPrice = totalPrice * +radio.value
		}
	}

	if (radioState[1].checked == true) {
		ownersSection.style.display = 'block'
	} else {
		ownersSection.style.display = 'none';
		totalPrice = totalPrice * +radioState[0].value
	}

	for (let radio of radioOwners) {
		if (radio.checked == true) {
			totalPrice = totalPrice * +radio.value
		}
	}
	for (let radio of radioPayment) {
		if (radio.checked == true) {
			totalPrice = totalPrice * +radio.value
		}
	}

	totalPriceElement.textContent = totalPrice
}

calculate();

selects.forEach((selectitem) => {
	selectitem.addEventListener('change', function () {
		calculate();	
	});
})

inputs.forEach((input) => {
	input.addEventListener('input', function () {
		calculate();
	});
})