class Car {
    private engineModelNo: string = '454casvsavef4785674ca'
    seater: number;

    constructor(seater: number) {
        this.seater = seater;
    }

    print(): void {
        console.log("Engine : " + this.engineModelNo + "    Seater : " + this.seater);
    }
}

var fourSeater = new Car(4);
fourSeater.print();

var fiveSeater = new Car(5);
fiveSeater.print()