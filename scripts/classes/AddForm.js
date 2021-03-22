export class AddForm {
    constructor(config) {
        this.newTransport = [];
        this.type = '';
        this.color = '';
        this.model = '';
        this.config = config;
    }

    createAddForm() {
        const root = document.getElementById('appContainer');
        const formContainer = document.createElement('section');
        formContainer.setAttribute('class', 'form-container');

        const addForm = document.createElement('form');
        addForm.setAttribute('class', 'add-form');

        const inputType = document.createElement('input');
        inputType.type = 'text';
        inputType.setAttribute('class', 'add-field');
        addForm.append(inputType);
        inputType.placeholder = 'add a type...';

        inputType.addEventListener('change', (e) => {
            if (e.target.value) {
                this.type = e.target.value;
            }
        });

        const inputColor = document.createElement('input');
        inputColor.type = 'text';
        inputColor.setAttribute('class', 'add-field');
        addForm.append(inputColor);
        inputColor.placeholder = 'add a color...';

        inputColor.addEventListener('change', (e) => {
            if (e.target.value) {
                this.color = e.target.value;
            }
        });

        const inputModel = document.createElement('input');
        inputModel.type = 'text';
        inputModel.setAttribute('class', 'add-field');
        addForm.append(inputModel);
        inputModel.placeholder = 'add a model...';

        inputModel.addEventListener('change', (e) => {
            if (e.target.value) {
                this.model = e.target.value;
            }
        });

        const btnAdd = document.createElement('button');
        btnAdd.setAttribute('class', 'btn btn-add');
        btnAdd.innerHTML = 'add';
        btnAdd.type = 'submit';
        addForm.appendChild(btnAdd);

        addForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.config.add(this.type, this.color, this.model);
            console.log('was added')
        });

        root.appendChild(formContainer);
        formContainer.appendChild(addForm);
    }
}
