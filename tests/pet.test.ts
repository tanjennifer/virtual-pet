import { VirtualPet } from "../src/models/VirtualPet"
import { decay, makePet } from "../src/pet-functions";
import Dog from "../src/models/Dog";
import Cat from "../src/models/Cat";




describe ("VirtualPet class", ()=>{
    test("all three properties are initialized to the correct values", ()=>{
        const pet: VirtualPet = new VirtualPet("Oscar");
        expect(pet.name).toBe("Oscar");
        expect(pet.hunger).toBe(50);
        expect(pet.happiness).toBe(50);

    });
    test("describe() the pet", ()=>{
        const pet: VirtualPet = new VirtualPet("Oscar");
        expect(pet.describe()).toBe("Name: Oscar, Hunger: 50, Happiness: 50");

    });
    test("describe() pet with diff property values", ()=>{
        const pet2: VirtualPet = new VirtualPet("Billy");
        pet2.hunger = 80;
        pet2.happiness = 100;
        expect(pet2.describe()).toBe("Name: Billy, Hunger: 80, Happiness: 100");
        
    });

    //class ones
    test(`getSatisfaction returns the correct number`, () => {
        const newPet: VirtualPet = new VirtualPet("Bear");
        const bearsSatisfaction: number = newPet.getSatisfaction();
        expect(bearsSatisfaction).toBe(0);
      });



      test("property name is set from constructor", () => {
        const newPet: VirtualPet = new VirtualPet("Larry");
        expect(newPet.name).toBe("Larry");
      });
      test("properties hunger & happiness is set to 50", () => {
        const newPet: VirtualPet = new VirtualPet("Larry");
        expect(newPet.hunger).toBe(50);
        expect(newPet.happiness).toBe(50);
      });
    
    test(`describe method returns correct string`, () => {
        const newPet: VirtualPet = new VirtualPet("Bear");
        const howIsBearDoing: string = newPet.describe();
        expect(howIsBearDoing).toBe("Name: Bear, Hunger: 50, Happiness: 50");
      });
    
    test(`calling feed once dec hunger from 50 to 40`, () => {
        const cat: VirtualPet = new VirtualPet("Sushi");
        cat.feed();
        expect(cat.hunger).toBe(40);
      });
    
    test(`calling feed once dec hunger from 50 to 0`, () => {
        const cat: VirtualPet = new VirtualPet("Sushi");
        cat.feed();
    cat.feed();
    cat.feed();
    cat.feed();
    cat.feed();
        expect(cat.hunger).toBe(0);
      });
    
    test(`describe method returns correct string after calling play 2x and feed 1x`, () => {
        const newPet: VirtualPet = new VirtualPet("Kevin");
        newPet.play();
        newPet.play();
        newPet.feed();
        expect(newPet.describe()).toBe("Name: Kevin, Hunger: 40, Happiness: 70");
      });

});


// decay

describe("decay fn", () => {
  test("hunger and happiness are adjusted accordingly", ()=>{
    const pet: VirtualPet = new VirtualPet("Kyle");
    decay(pet);
    expect(pet.hunger).toBe(55); // 50 + 5
    expect(pet.happiness).toBe(45); // 50 - 5
  });
  test("hunger does not go above 100", ()=>{
    const pet: VirtualPet = new VirtualPet("Token");
    pet.hunger = 90;
    decay(pet); // +5
    decay(pet); // +5
    decay(pet); // +5
    expect(pet.hunger).toBe(100); //should no go above 100
  });
  test("happiness does not go below 0", ()=>{
    const pet: VirtualPet = new VirtualPet("Butters");
    pet.happiness = 8;
    decay(pet); // -5
    // expect(pet.happiness).toBe(3);
    decay(pet); // -5
    expect(pet.happiness).toBe(0); //should not go below 0
  });
})


describe(`makePet`, ()=>{
  test(`returning a Dog. Verify the name.`, ()=>{
    const pet: Dog = makePet("Kenny", "dog");
    expect(pet instanceof Dog).toBeTruthy()
    expect(pet.name).toBe("Kenny");
  });
  test(`returning a Cat. Verify the name.`, ()=>{
    const pet = makePet("Cartman", "cat");
    expect(pet instanceof Cat).toBeTruthy()
    expect(pet.name).toBe("Cartman");



  });
  test(`returning a VirtualPet. Verify the name.`, ()=>{
    const pet: VirtualPet = makePet("Stan", "bird")
    expect(pet instanceof VirtualPet).toBeTruthy()
    expect(pet.name).toBe("Stan");
  });
});