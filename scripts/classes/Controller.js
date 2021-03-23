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
    this.carsOnParking = await this.api.getAllDataFromServer().then(() => this.api.transports);
    // const {type, color, model, number} = event;
    const newTransport = transportCreator(type, color, model);
    if (Math.floor(this.carsOnParking.length + newTransport.size) <= 30) {
      await this.api.createItemForServer(newTransport.type, newTransport.color, newTransport.model)
    } else {
      // const root = document.getElementById('appContainer')
      // const err = document.createElement('div');
      // err.innerHTML = 'error';
      // root.appendChild(err) // TODO: validation
      console.log('fully');
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
    const transports = await this.api.getAllDataFromServer().then(() => this.api.transports);
    console.log(transports);

    await this.InterfaceApp.createRoot();
    await this.InterfaceApp.createAddForm();
    await this.InterfaceApp.createSearchForm(transports);
    await this.InterfaceApp.createStatisticForm(transports);
    await this.InterfaceApp.createTable(transports);
  }
}

const app = new Controller({
  baseURL: 'http://localhost:8008',
  node: 'appContainer'
});
app.render();
