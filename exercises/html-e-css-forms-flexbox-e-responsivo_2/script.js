const selectStates = document.querySelector('#state-option');
document.getElementById('date-input').DatePickerX.init({
	format: 'dd/mm/yyyy',
});

new window.JustValidate('.js-form', {
	rules: {
		cpf: {
			required: true,
		},
		address: {
			required: true,
		},
		city: {
			required: true,
		},
		resume: {
			required: true,
		},
		position: {
			required: true,
		},
		position_description: {
			required: true,
		},
		initial_date: {
			required: true,
		},
		state: {
			required: true,
		}
	},
});

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
