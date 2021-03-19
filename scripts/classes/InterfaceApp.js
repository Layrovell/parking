import {AddForm} from "./AddForm.js";
import {SearchForm} from "./SearchForm.js";
import {StatisticsForm} from "./StatisticsForm.js";

const countOfPlaces = 50;

export class InterfaceApp {
    constructor(root) {
        this.root = root;
        this.AddForm = new AddForm();
        this.SearchForm = new SearchForm();
        this.StatisticsForm = new StatisticsForm();
    }

    createRoot() {
        const root = document.createElement('div');
        root.setAttribute('id', this.root);
        const body = document.getElementsByTagName('body')[0];
        body.prepend(root);

        // const container = document.createElement('div');
        // container.setAttribute('class', 'container');
        //
        // root.appendChild(container);
    }

    createAddForm() {
        this.AddForm.createAddForm();
    }

    createSearchForm() {
        this.SearchForm.createSearchForm();
    }

    createStatisticForm() {
        this.StatisticsForm.createStatisticForm();
    }

    createTable() {
        // container.setAttribute('class', 'container')
        // const table = document.createElement('table');
        // table.setAttribute('class', 'table');
        // container.append(table);
        //
        // const tbody = document.createElement('tbody');
        // table.appendChild(tbody);
        //
        // // const thead = document.createElement('thead');
        // // thead.classList.add('thead');
        //
        // for (let i = 0; i < 3; i++) {
        //     const tr = document.createElement('tr');
        //     tbody.appendChild(tr);
        //
        //     for (let j = 0; j < 4; j++) {
        //         const td = document.createElement('td');
        //         tr.appendChild(td);
        //     }
        // }
        //
        // container.appendChild(table);
        // root.append(container);
        //
        // console.log(root)
    }
}
