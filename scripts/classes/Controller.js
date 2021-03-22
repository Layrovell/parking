import {ApiCalls} from "./ApiCalls.js";
import {InterfaceApp} from "./InterfaceApp.js";

export class Controller {
    constructor({baseURL, node}) {
        this.api = new ApiCalls(baseURL);
        this.InterfaceApp = new InterfaceApp(node, {
            addItem: this.addItem.bind(this),
            delete: this.deleteItem.bind(this),
            node,
            filter: this.filterItems.bind(this),
        });
    }

    // async addItem(event) {
        //    const {type, color, model, number} = e.target.formValues;
        //    const newTransport = transportCreator(type, color, model, number);
        //    if (Math.floor(carsOnParking.length + item.size) <= limit) {
        //    this.api.createItemForServer(truck)
        //    } else {
        //      body.appendChild(errorDiv) // TODO: validation
        //    }
    // }

    async addItem(type, color, model) {
        if (type && color && model) {
            await this.api.createItemForServer(type, color, model);
        } else {
            console.log('not all');
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

    async filterItems(data, options, query) {
        console.log('rtgfg');
        switch (options) {
            case options.type:
              return await data.type.filter(el => el.type.toLocaleLowerCase().includes(query));
            case options.color:
                return await data.type.filter(el => el.color.toLocaleLowerCase().includes(query));
            case options.model:
                return await data.type.filter(el => el.model.toLocaleLowerCase().includes(query));
            case options.number:
                return await data.type.filter(el => el.number.toLocaleLowerCase().includes(query));
            default:
                return data;
        }
    }

    async render() {
        const transports = await this.api.getAllDataFromServer().then(() => this.api.transports);
        console.log(transports);

        await this.InterfaceApp.createRoot();
        await this.InterfaceApp.createAddForm();
        await this.InterfaceApp.createSearchForm(transports);
        await this.InterfaceApp.createStatisticForm(transports);
        // await this.InterfaceApp.createTable(this.filterItems(transports));
        await this.InterfaceApp.createTable(transports);
    }
}

const app = new Controller({
    baseURL: 'http://localhost:8008',
    node: 'appContainer'
});
app.render();
