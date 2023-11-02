export class VirtualPet {
    name: string;
    hunger: number = 50;
    happiness: number = 50; 

    constructor(name: string){
        this.name = name;
        // this.hunger = 50;
        // this.happiness = 50;

    }

    describe():string{
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`;
    }

    getSatisfaction():number{
        return this.happiness - this.hunger;
    }
    //sound is a parameter not property so it doesnt get "this." attached
    makeSound(sound:string): string {
        return `${this.name} says ${sound}`
    }
    feed():void{
    this.hunger -= 10;
    if(this.hunger <= 0){
        this.hunger = 0
    }
    }
    play():void {
        this.happiness += 10;
        if (this.happiness > 100) {
            this.happiness = 100;
        }
    }

}