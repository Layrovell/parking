export class StatisticsForm {
    constructor() {
        this.type = '';
        this.color = '';
        this.model = '';
        this.number = 0;
    }

    createStatisticForm() {
        const root = document.getElementById('appContainer');
        const statisticFormContainer = document.createElement('section');
        statisticFormContainer.setAttribute('class', 'statisticFormContainer');

        const table = document.createElement('table');
        table.classList.add('table');
        statisticFormContainer.appendChild(table);

        const thead = document.createElement('thead');
        thead.classList.add('thead');

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        const tr = document.createElement('tr');

        ['free', 'cars', 'buses', 'motos', 'trucks', 'all'].forEach(el => {
            const th = document.createElement('th');
            th.innerHTML = `${el}`;
            th.classList.add(`th-${el}`);

            table.appendChild(th);
            thead.appendChild(th);
            table.prepend(thead);

            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = this.getAvailablePlaces();

            tbody.appendChild(tr)
        })

        root.appendChild(statisticFormContainer);
    }

    getAvailablePlaces() {
        return 103;
    }

    getCars() {
        return 103;
    }

    getBusses() {
        return 103;
    }

    getMotorcycles() {
        return 103;
    }

    getTrucks() {
        return 103;
    }

    getAllTransport() {
        return 103;
    }
}
