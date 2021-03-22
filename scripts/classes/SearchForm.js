export class SearchForm {
    constructor(config) {
        this.config = config;
        this.options = {
            type: '',
            color: '',
            model: '',
            number: 0,
        }
    }

    createSearchForm(data) {
        const root = document.getElementById('appContainer');
        const formContainer = document.querySelector('.form-container');

        const SearchForm = document.createElement('form');
        SearchForm.setAttribute('class', 'search-form');

        const searchByType = this.createInput('by-type', 'input', 'text', 'search-field', 'search by type');
        this.createEventListener(searchByType, 'change', 'by-type');
        SearchForm.append(searchByType);

        const searchByColor = this.createInput('by-color', 'input', 'text', 'search-field', 'search by color');
        this.createEventListener(searchByColor, 'change', 'by-color');
        SearchForm.append(searchByColor);

        const searchByModel = this.createInput('by-model', 'input', 'text', 'search-field', 'search by model');
        this.createEventListener(searchByModel, 'change', 'by-model');
        SearchForm.append(searchByModel);

        const searchByNumber = this.createInput('by-number', 'input', 'text', 'search-field', 'search by number');
        this.createEventListener(searchByNumber, 'change', 'by-number');
        SearchForm.append(searchByNumber);

        const btnSearch = document.createElement('button');
        btnSearch.type = 'submit';
        btnSearch.setAttribute('class', 'btn btn-search');
        btnSearch.innerHTML = 'search';
        SearchForm.appendChild(btnSearch);

        SearchForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.config.filterItems(data, this.options);
            console.log('was founded');
        });

        formContainer.appendChild(SearchForm);
        root.appendChild(formContainer);
    }

    createInput(name, className, type, id, placeholder) {
        const input = document.createElement('input');
        input.setAttribute('name', `${name}`);
        input.setAttribute('class', `${className}`);
        input.type = type;
        input.id = id;
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

    createFilter() {

    }
}
