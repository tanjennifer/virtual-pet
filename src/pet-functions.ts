import { VirtualPet } from "./models/VirtualPet";
import Dog from "./models/Dog";
import Cat from "./models/Cat";

export const decay = (pet: VirtualPet):void => {
    //+5 to hunger
    if(pet.hunger + 5 <= 100) {
        pet.hunger += 5;
    } else {
        pet.hunger = 100; //hunger does not go above 100
    }
    //-5 from happiness
    if (pet.happiness - 5 >= 0) {
        pet.happiness -= 5;
    } else {
        pet.happiness = 0; //happiness does not go below 0
    }
 };




export const makePet = (name: string, type: string):VirtualPet => {
    if(type === "dog"){
        return new Dog(name);
    } else if (type === "cat") {
        return new Cat(name, "black");
    } else {
        return new VirtualPet(name);
    }
};