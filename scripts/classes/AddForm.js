export class AddForm {
    constructor(config) {
        // this.newTransport = [];
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

        const inputType = this.createInput('type', 'add-field', 'text', 'add a type');
        this.createEventListener(inputType, 'change', 'type');
        addForm.append(inputType);

        const inputColor = this.createInput('color', 'add-field', 'text', 'add a color');
        this.createEventListener(inputColor, 'change', 'color');
        addForm.append(inputColor);

        const inputModel = this.createInput('model', 'add-field', 'text', 'add a model');
        this.createEventListener(inputModel, 'change', 'model');
        addForm.append(inputModel);

        const btnAdd = document.createElement('button');
        btnAdd.setAttribute('class', 'btn btn-add');
        btnAdd.innerHTML = 'add';
        btnAdd.type = 'submit';
        addForm.appendChild(btnAdd);

        addForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            // await this.config.add(this.type, this.color, this.model);
            await this.config.add(this.type, this.color, this.model);
            console.log('was added')
        });

        root.appendChild(formContainer);
        formContainer.appendChild(addForm);
    }

    createInput(name, className, type, placeholder) {
        const input = document.createElement('input');
        input.setAttribute('name', `${name}`);
        input.setAttribute('class', `${className}`);
        input.type = type;
        input.placeholder = placeholder;

        return input;
    }

    createEventListener(input, typeEvent, name) {
        return input.addEventListener(typeEvent, (e) => {
            if (e.target.value) {
                this[name] = e.target.value;
            }
        });
    }
}
