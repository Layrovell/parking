export class ApiCalls {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.transports = [];
    }

    async getAllDataFromServer() {
        try {
            const response = await fetch(`http://localhost:8008/api/transports/get`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
            })

            if (!response.ok) {
                return Promise.reject(`${response.status} - ${response.statusText}`);
            }

            if (!response.headers.get('content-type').includes('application/json')) {
                return Promise.reject('Content-type is not supported');
            }

            // const result = await response.json();
            // return result.items;

            const result = await response.json();
            this.transports = await result.items;
        } catch (e) {}
    }

    async createItemForServer(type, color, model) {
        const data = this.transports;
        try {
            await fetch(`http://localhost:8008/api/transports/create`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({
                    type,
                    color,
                    model,
                    number: this.transports.length,
                }),
            })
            location.reload();
        } catch (e) {}
    }

    async deleteItemFromServer(id) {
        try {
            const response = await fetch(`http://localhost:8008/api/transports/delete/${id}`, {
                method: 'GET',
            })
            location.reload();
            await response.json();
        } catch (e) {}
    }
}
