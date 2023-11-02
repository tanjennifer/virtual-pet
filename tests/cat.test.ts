import Cat from "../src/models/Cat"

describe("Cat class", ()=>{
    test("Cat has name and color set from the constructor parameters and hunger and happiness are set to 50.", () => {
        const cat: Cat = new Cat("Oscar", "black");
        expect(cat.name).toBe("Oscar");
        expect(cat.color).toBe("black");
        expect(cat.hunger).toBe(50);
        expect(cat.happiness).toBe(50);
      });
      test('getAttitude returns "inquisitive" for positive satisfaction', () => {
        const cat: Cat = new Cat("Billy", "white");
        // pos satisfaction; happiness - hunger = above zero
        cat.hunger = 20;
        cat.happiness = 50;
        expect(cat.getAttitude()).toBe("inquisitive");
      });
      test('getAttitude returns "grumpy" for negative satisfaction', () => {
        const cat: Cat = new Cat("JinHe", "orange");
        // neg satisfaction; happiness - hunger = below 0
        cat.hunger = 40;
        cat.happiness = 30;
        expect(cat.getAttitude()).toBe("grumpy");
      });
      test('getAttitude returns "grumpy" for zero satisfaction', () => {
        const cat = new Cat("Gerard", "grey");
        // set hunger and happiness to = zero satisfaction
        cat.hunger = 50;
        cat.happiness = 50;
        expect(cat.getAttitude()).toBe("grumpy");
      });
      test(`describe returns a string with name, hunger, happiness, color, and attitude`, ()=> {
        const cat: Cat = new Cat("Billy", "white");
        cat.hunger = 20;
        cat.happiness = 50;
        expect(cat.describe()).toBe("Name: Billy, Hunger: 20, Happiness: 50, Color: white, Attitude: inquisitive");
      });
});