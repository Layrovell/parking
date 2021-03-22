class Transport {
    constructor(type, color, model, number) {
        this.type = type;
        this.color = color;
        this.model = model;
        this.number = number;
    }
}

class Car extends Transport {
    constructor(type, color, model, number) {
        super(type, color, model, number);
        this.size = 1;
    }
}

class Bus extends Transport {
    constructor(type, color, model, number) {
        super(type, color, model, number);
        this.size = 3;
    }
}

class Motorcycle extends Transport {
    constructor(type, color, model, number) {
        super(type, color, model, number);
        this.size = 0.5;
    }
}

class Truck extends Transport {
    constructor(type, color, model, number) {
        super(type, color, model, number);
        this.size = 4;
    }
}

export const transportCreator = (type, color, model, number) => {
    switch (type) {
        case 'Car':
            return new Car(type, color, model, number);
        case 'Motorcycle':
            return new Motorcycle(type, color, model, number);
        case 'Bus':
            return new Bus(type, color, model, number);
        case 'Truck':
            return new Truck(type, color, model, number);
    }
}

// const car = new Car('we', 'rt', 'er', 12)
// console.log(car)