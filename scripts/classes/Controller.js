import {ApiCalls} from "./ApiCalls.js";
import {InterfaceApp} from "./InterfaceApp.js";

export class Controller {
    constructor({baseURL, node}) {
        this.api = new ApiCalls(baseURL);
        this.InterfaceApp = new InterfaceApp(node);
    }

    async addItem() {

    }

    async deleteItem() {

    }

    async render() {
        const transports = await this.api.getAllDataFromServer().then(() => this.api.transports);
        console.log(transports);

        this.InterfaceApp.createRoot();
        this.InterfaceApp.createAddForm();
        this.InterfaceApp.createTable();
        this.InterfaceApp.createSearchForm();
        this.InterfaceApp.createStatisticForm();
    }
}

const app = new Controller({
    baseURL: 'http://localhost:8008',
    node: 'appContainer'
});
app.render();