export class StatisticsForm {
    constructor() {
    }

    async createStatisticForm(transports) {
        const root = document.getElementById('appContainer');
        const statisticFormContainer = document.createElement('section');
        statisticFormContainer.setAttribute('class', 'statistic-container');

        const available = await this.getAvailablePlaces(transports);
        const cars = await this.getCars(transports);
        const buses = await this.getBusses(transports);
        const motorcycles = await this.getMotorcycles(transports);
        const trucks = await this.getTrucks(transports);
        const all = await this.getAllTransport(transports);

        const table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-statistics');
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

            thead.appendChild(th);
            table.prepend(thead);
            tbody.appendChild(tr)
        });

        [available, cars, buses, motorcycles, trucks, all].forEach(el => {
            const td = document.createElement('td');
            td.innerHTML = `${el}`;
            tr.appendChild(td);
        });

        root.appendChild(statisticFormContainer);
    }

    async getAvailablePlaces(data) {
        return String(40 - data.length);
    }

    async getCars(data) {
        return data.filter(el => el.type === 'Car').length;
    }

    async getBusses(data) {
        return data.filter(el => el.type === 'Bus').length;
    }

    async getMotorcycles(data) {
        return data.filter(el => el.type === 'Motorcycle').length;
    }

    async getTrucks(data) {
        return data.filter(el => el.type === 'Truck').length;
    }

    async getAllTransport(data) {
        return data.length + 1;
    }
}
