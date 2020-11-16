const selectStates = document.querySelector('#state-option');
const submitButton = document.getElementById('submit');

const statesOptions = {
	AC: 'Acre',
	AL: 'Alagoas',
	AP: 'Amapá',
	AM: 'Amazonas',
	BA: 'Bahia',
	CE: 'Ceará',
	DF: 'Distrito Federal',
	ES: 'Espírito Santo',
	GO: 'Goiás',
	MA: 'Maranhão',
	MT: 'Mato Grosso',
	MS: 'Mato Grosso do Sul',
	MG: 'Minas Gerais',
	PA: 'Pará',
	PB: 'Paraíba',
	PR: 'Paraná',
	PE: 'Pernambuco',
	PI: 'Piauí',
	RJ: 'Rio de Janeiro',
	RN: 'Rio Grande do Norte',
	RS: 'Rio Grande do Sul',
	RO: 'Rondônia',
	RR: 'Roraima',
	SC: 'Santa Catarina',
	SP: 'São Paulo',
	SE: 'Sergipe',
	TO: 'Tocantins',
};

function setStateOption() {
	for (key in statesOptions) {
		let value = statesOptions[key];
		const createOption = document.createElement('option');
		createOption.value = [key];
		createOption.innerText = value;
		selectStates.appendChild(createOption);
	}
}
setStateOption();

function dateValidation() {
	let inputDate = document.querySelector('#date-input').value;
	let dateArray = inputDate.split('/');
	let day = parseInt(dateArray[0]);
	let month = parseInt(dateArray[1]);
	let year = parseInt(dateArray[2]);
	const dayCondition = day > 0 && day <= 31;
	const monthCondition = month > 0 && month <= 12;
	const yearCondition = year > 0;
	if (!(dayCondition && monthCondition && yearCondition)) {
		return 'Erro no formato da data!';
	}
	return;
}

submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	let error;
	let errors = '';
	error = dateValidation();
	if (error != '') {
		errors += `${error}\n`;
	}
	dateValidation();
	let inputText = document.querySelectorAll('input[type=text], textarea');
	for (let index = 0; index < inputText.length; index += 1) {
		let input = inputText[index];
		if (input.required) {
			if (input.value === '') {
				input.className = 'error';
				errors += `O campo ${input.name} é obrigatório!\n`;
			}
			if (input.minlength && input.value.length < input.minlength) {
				input.className = 'error';
				errors += `O campo ${input.name} deve possuir no mínimo ${input.minlength} caracteres!\n`;
			}
		}
	}
	if (errors !== '') {
		alert(errors);
	} else {
		let form = document.querySelector('form');
		form.reset();
		for (let index = 0; index < inputText.length; index += 1) {
			inputText[index].className = '';
		}
	}
});
