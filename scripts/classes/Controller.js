import {ApiCalls} from './ApiCalls.js';
import {InterfaceApp} from './InterfaceApp.js';
import {transportCreator} from './Transport.js';

const limit = 10;

export class Controller {
    constructor({baseURL, node}) {
        this.api = new ApiCalls(baseURL);
        this.InterfaceApp = new InterfaceApp(node, {
            addItem: this.addItem.bind(this),
            delete: this.deleteItem.bind(this),
            node,
            filter: this.filterItem.bind(this),
        });
        this.carsOnParking = [];
    }

    async addItem(type, color, model) {
        const newTransport = transportCreator(type, color, model);
        console.log(newTransport);
        const combinedSize = this.carsOnParking.reduce((acc, curr) => acc + curr.size, 0)
        if (Math.floor(combinedSize + newTransport.size) <= limit) {
            await this.api.createItemForServer(newTransport, this.carsOnParking.length)
            this.carsOnParking = await this.api.getAllDataFromServer();
        } else {
            await this.InterfaceApp.createErrorForm(true);
        }
    }

    async deleteItem(id) {
        if (id) {
            await this.api.deleteItemFromServer(id)
            console.log(`item delete: ${id}`);
        } else {
            console.log('Id is not provided!');
        }
    }

    async filterItem() {
        const input = document.getElementById('myInput');
        const query = input.value.toLowerCase();
        const table = document.getElementById('myTable');
        const tr = table.getElementsByTagName('tr');

        for (let i = 0; i < tr.length; i++) {
            let tds = tr[i].getElementsByTagName('td');
            let flag = false;

            for (let j = 0; j < tds.length; j++) {
                let td = tds[j];
                if (td.innerHTML.toLowerCase().indexOf(query) > -1) {
                    flag = true;
                }
            }
            if (flag) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }

    async render() {
        this.carsOnParking = await this.api.getAllDataFromServer();
        console.log(this.carsOnParking);

        await this.InterfaceApp.createRoot();
        await this.InterfaceApp.createAddForm();
        await this.InterfaceApp.createSearchForm(this.carsOnParking);
        await this.InterfaceApp.createStatisticForm(this.carsOnParking);
        await this.InterfaceApp.createTable(this.carsOnParking);
        await this.InterfaceApp.createErrorForm();
    }
}

const app = new Controller({
    baseURL: 'http://localhost:8008',
    node: 'appContainer'
});
app.render();
