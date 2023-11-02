import { VirtualPet } from "./VirtualPet";

class Dog extends VirtualPet {
    play() {
        // Increase happiness by 15, but limit it to a maximum of 100
        this.happiness += 15;
        if (this.happiness > 100) {
          this.happiness = 100;
        }
      }
    }

export default Dog;
//like gearedbike override play method, add 15 happiness