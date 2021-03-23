class Transport {
    constructor(type, color, model) {
        this.type = type;
        this.color = color;
        this.model = model;
    }
}

class Car extends Transport {
    constructor(type, color, model) {
        super(type, color, model);
        this.size = 1;
    }
}

class Bus extends Transport {
    constructor(type, color, model) {
        super(type, color, model);
        this.size = 3;
    }
}

class Motorcycle extends Transport {
    constructor(type, color, model) {
        super(type, color, model);
        this.size = 0.5;
    }
}

class Truck extends Transport {
    constructor(type, color, model) {
        super(type, color, model);
        this.size = 4;
    }
}

export const transportCreator = (type, color, model) => {
    switch (type) {
        case 'Car':
            return new Car(type, color, model);
        case 'Motorcycle':
            return new Motorcycle(type, color, model);
        case 'Bus':
            return new Bus(type, color, model);
        case 'Truck':
            return new Truck(type, color, model);
    }
}
