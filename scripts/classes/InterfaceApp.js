import {AddForm} from "./AddForm.js";
import {SearchForm} from "./SearchForm.js";
import {StatisticsForm} from "./StatisticsForm.js";
import {ErrorForm} from "./ErrorForm.js";

export class InterfaceApp {
    constructor(root, config) {
        this.root = root;
        this.AddForm = new AddForm({ add: config.addItem });
        this.SearchForm = new SearchForm({ filter: config.filter });
        this.StatisticsForm = new StatisticsForm();
        this.ErrorForm = new ErrorForm();
        this.config = config;
        this.info = {
            type: '',
        }
    }

    async createRoot() {
        const root = document.createElement('div');
        root.setAttribute('id', this.root);
        const body = document.getElementsByTagName('body')[0];
        body.prepend(root);
    }

    async createAddForm() {
        this.AddForm.createAddForm();
    }

    async createSearchForm(transport) {
        this.SearchForm.createSearchForm(transport);
    }

    async createStatisticForm(transport) {
        await this.StatisticsForm.createStatisticForm(transport);
        await this.StatisticsForm.getAvailablePlaces(transport);
        await this.StatisticsForm.getCars(transport);
        await this.StatisticsForm.getBusses(transport);
        await this.StatisticsForm.getMotorcycles(transport);
        await this.StatisticsForm.getTrucks(transport);
        await this.StatisticsForm.getAllTransport(transport);
    }

    async createTable(transport) {
        const root = document.getElementById('appContainer');
        const container = document.createElement('div');
        container.setAttribute('class', 'container');

        const table = document.createElement('table');
        table.setAttribute('class', 'table table-places');
        table.setAttribute('id', 'myTable');

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        for (let el of transport) {
            const row = document.createElement('tr');
            tbody.appendChild(row);

            this.info.id = el._id;

            const tdNumber = document.createElement('td');
            tdNumber.classList.add('td-number');
            tdNumber.innerHTML = el.number;
            row.appendChild(tdNumber);

            const tdType = document.createElement('td');
            tdType.classList.add('td-type');
            tdType.innerHTML = el.type;
            row.appendChild(tdType);

            const tdModel = document.createElement('td');
            tdModel.classList.add('td-model');
            tdModel.innerHTML = el.model;
            row.appendChild(tdModel);

            const tdColor = document.createElement('td');
            tdColor.classList.add('td-color');
            tdColor.innerHTML = el.color;
            row.appendChild(tdColor);

            const deleteButton = this.createTableButton(
                'Delete',
                this.info.id,
                'btn btn-delete',
                this.config.delete,
            );

            const deleteButtonCell = document.createElement('td');
            deleteButtonCell.setAttribute('class', 'td-delete');
            deleteButtonCell.append(deleteButton);
            row.appendChild(deleteButtonCell);
        }
        root.appendChild(table);
    }

    createTableButton(label, data, className, action) {
        const button = document.createElement('button');
        button.setAttribute('class', className);
        button.innerText = label;

        button.addEventListener('click', async () => {
            await action(data);
        });

        return button;
    }

    createErrorForm(bool) {
        if (bool) {
            this.ErrorForm.createErrorForm();
        }
    }
}
