import { VirtualPet } from "./VirtualPet";

class Cat extends VirtualPet {
    color: string;

    constructor(someName: string, someColor: string) {
        super(someName); // Call the constructor of the superclass
        this.color = someColor;
      };
    
    getAttitude(): string {
        const satisfaction = this.getSatisfaction();
        if (satisfaction > 0) {
            return "inquisitive";
        } else {
            return "grumpy";
        };
    };

    describe(): string {
        const attitude = this.getAttitude();
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, Color: ${this.color}, Attitude: ${attitude}`;
      }
    
}

export default Cat;