export class ErrorForm {
    constructor() {
    }

    createErrorForm() {
        const root = document.getElementById('appContainer')
        const err = document.createElement('div');
        err.classList.add('error-block');
        err.innerText = 'Parking lot is full!';
        root.appendChild(err);
    }
}
