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
        const combinedSize = this.carsOnParking.reduce((acc, curr) => acc + curr.size, 0);
        if (Math.floor(combinedSize + newTransport.size) <= limit) {
            await this.api.createItemForServer(newTransport, String(this.carsOnParking.length))
            this.carsOnParking = await this.api.filteredItemsFromServer();
            console.log(this.carsOnParking)
        } else {
            await this.InterfaceApp.createErrorForm(true);
        }
    }

    async deleteItem(id) {
        if (id) {
            await this.api.deleteItemFromServer(id)
        } else {
            console.log('Id is not provided!');
        }
    }

    async filterItem(query) {
        if (query) {
            this.carsOnParking = await this.api.filteredItemsFromServer(query);
            await this.InterfaceApp.createTable(this.carsOnParking);
        } else {
            this.carsOnParking = await this.api.filteredItemsFromServer();
            await this.InterfaceApp.createTable(this.carsOnParking);
            console.log('not: ', this.carsOnParking);
        }
    }

    async render() {
        this.carsOnParking = await this.api.filteredItemsFromServer();

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
