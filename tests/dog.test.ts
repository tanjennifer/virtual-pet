import Dog from "../src/models/Dog";

describe("Dog class", () => {
  test(`Dog has name set from the constructor parameter and hunger and happiness are set to 50`, () => {
    const doggy: Dog = new Dog("Bowie");
    expect(doggy.name).toBe("Bowie");
    expect(doggy.hunger).toBe(50);
    expect(doggy.happiness).toBe(50);
  });
  test("play() incr happiness by 15", () => {
    const doggy: Dog = new Dog("Bowie");
    //calling play() -- inc happiness by 15
    doggy.play();
    expect(doggy.happiness).toBe(65); // 50 + 15
  });
  test("play() does not incr happiness past 100", () => {
    const doggy2: Dog = new Dog("Cola");
    doggy2.happiness = 90;
    //calling play() -- as many times, happiness will still be 100
    doggy2.play();
    doggy2.play();
    doggy2.play();
    expect(doggy2.happiness).toBe(100);
  });
});
