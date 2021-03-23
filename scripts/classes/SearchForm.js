export class SearchForm {
    constructor(config) {
        this.config = config;
    }

    createSearchForm() {
        const root = document.getElementById('appContainer');
        const formContainer = document.querySelector('.form-container');

        const SearchForm = document.createElement('form');
        SearchForm.setAttribute('class', 'search-form');

        const searchField = this.createInput('byType', 'search-field', 'text', 'search...');
        searchField.setAttribute('id', 'myInput');
        searchField.addEventListener('keyup', this.config.filter);
        SearchForm.append(searchField);

        const btnSearch = document.createElement('button');
        btnSearch.type = 'submit';
        btnSearch.setAttribute('class', 'btn btn-search');
        btnSearch.innerHTML = 'search';
        SearchForm.appendChild(btnSearch);

        formContainer.appendChild(SearchForm);
        root.appendChild(formContainer);
    }

    createInput(name, className, type, placeholder) {
        const input = document.createElement('input');
        input.setAttribute('name', `${name}`);
        input.setAttribute('class', `${className}`);
        input.type = type;
        input.placeholder = placeholder;

        return input;
    }
}
