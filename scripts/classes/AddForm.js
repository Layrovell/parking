export class AddForm {
    constructor() {
    }

    createAddForm() {
        const root = document.getElementById('appContainer');
        const addFormContainer = document.createElement('section');
        addFormContainer.setAttribute('class', 'addFormContainer');

        const input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('class', 'search-field');
        addFormContainer.append(input);

        const btnAdd = document.createElement('button');
        btnAdd.setAttribute('class', 'btn btn-add');
        btnAdd.innerHTML = 'add';
        addFormContainer.appendChild(btnAdd);

        root.appendChild(addFormContainer);
    }
}
