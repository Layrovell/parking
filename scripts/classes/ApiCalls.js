export class ApiCalls {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async filteredItemsFromServer(query) {
        const response = await fetch(`${this.baseURL}/api/transports/get`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                $or: [{color: query}, {model: query}, {number: query}, {type: query}]
            }),
        })
        const result = await response.json();
        return result.items;
    }

    async createItemForServer(transport, number) {
        await fetch(`${this.baseURL}/api/transports/create`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                ...transport,
                number,
            }),
        })
        location.reload();
    }

    async deleteItemFromServer(id) {
        try {
            const response = await fetch(`${this.baseURL}/api/transports/delete/${id}`, {
                method: 'GET',
            })

            if (!response.ok) {
                return Promise.reject(`${response.status} - ${response.statusText}`);
            }

            location.reload();
            await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}
