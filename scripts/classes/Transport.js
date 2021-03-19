export class Transport {
    constructor(type, color, model, number) {
        this.type = type;
        this.color = color;
        this.model = model;
        this.number = number;
    }
}

export class Car extends Transport {}

export class Bus extends Transport {}

export class Motorcycle extends Transport {}

export class Truck extends Transport {}
