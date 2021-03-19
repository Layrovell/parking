export class SearchForm {
    constructor() {
    }

    createSearchForm() {
        const root = document.getElementById('appContainer');
        const SearchFormContainer = document.createElement('section');
        SearchFormContainer.setAttribute('class', 'SearchFormContainer');

        const input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('class', 'search-field');
        SearchFormContainer.append(input);

        const btnSearch = document.createElement('button');
        btnSearch.setAttribute('class', 'btn btn-search');
        btnSearch.innerHTML = 'search';
        SearchFormContainer.appendChild(btnSearch);

        root.appendChild(SearchFormContainer);
    }
}
