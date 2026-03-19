import { HashMap } from "../src/hashmap.js";

describe("HashMap with 12 entries", () => {
    let map;

    beforeEach(() => {
        map = new HashMap();
        map.set("apple", "red");
        map.set("banana", "yellow");
        map.set("carrot", "orange");
        map.set("dog", "brown");
        map.set("elephant", "gray");
        map.set("frog", "green");
        map.set("grape", "purple");
        map.set("hat", "black");
        map.set("ice cream", "white");
        map.set("jacket", "blue");
        map.set("kite", "pink");
        map.set("lion", "golden");
    });

    test("retrieves all 12 values correctly", () => {
        expect(map.get("apple")).toBe("red");
        expect(map.get("banana")).toBe("yellow");
        expect(map.get("carrot")).toBe("orange");
        expect(map.get("dog")).toBe("brown");
        expect(map.get("elephant")).toBe("gray");
        expect(map.get("frog")).toBe("green");
        expect(map.get("grape")).toBe("purple");
        expect(map.get("hat")).toBe("black");
        expect(map.get("ice cream")).toBe("white");
        expect(map.get("jacket")).toBe("blue");
        expect(map.get("kite")).toBe("pink");
        expect(map.get("lion")).toBe("golden");
    });
});

describe("HashMap behavior with multiple sets", () => {
    test("adding 13 entries still works", () => {
        const map = new HashMap();

        map.set("apple", "red");
        map.set("banana", "yellow");
        map.set("carrot", "orange");
        map.set("dog", "brown");
        map.set("elephant", "gray");
        map.set("frog", "green");
        map.set("grape", "purple");
        map.set("hat", "black");
        map.set("ice cream", "white");
        map.set("jacket", "blue");
        map.set("kite", "pink");
        map.set("lion", "golden");

        // Add a 13th entry
        map.set("monkey", "brown");

        // Assertions
        expect(map.get("apple")).toBe("red");
        expect(map.get("lion")).toBe("golden");
        expect(map.get("monkey")).toBe("brown");  // new entry should be retrievable
    });
});

describe("HashMap without resize", () => {
    test("adding entries beyond capacity", () => {
        const map = new HashMap();

        // Fill with 12 entries
        map.set("apple", "red");
        map.set("banana", "yellow");
        map.set("carrot", "orange");
        map.set("dog", "brown");
        map.set("elephant", "gray");
        map.set("frog", "green");
        map.set("grape", "purple");
        map.set("hat", "black");
        map.set("ice cream", "white");
        map.set("jacket", "blue");
        map.set("kite", "pink");
        map.set("lion", "golden");

        // Add more entries
        map.set("moon", "silver");   // 13
        map.set("nest", "brown");    // 14
        map.set("owl", "white");     // 15
        map.set("pear", "green");    // 16
        map.set("queen", "purple");  // 17

        // Check values
        expect(map.get("moon")).toBe("silver");
        expect(map.get("queen")).toBe("purple");

        // Capacity stays fixed at 16
        expect(map.capacity).toBe(16);

        // Length helper (if you added it earlier)
        console.log("Length:", map.length());   // should print 17
        console.log("Capacity:", map.capacity); // should print 16
    });
});

describe("HashMap without resize", () => {
    test("overwriting and adding beyond load factor", () => {
        const map = new HashMap();

        // Fill with 12 entries
        map.set("apple", "red");
        map.set("banana", "yellow");
        map.set("carrot", "orange");
        map.set("dog", "brown");
        map.set("elephant", "gray");
        map.set("frog", "green");
        map.set("grape", "purple");
        map.set("hat", "black");
        map.set("ice cream", "white");
        map.set("jacket", "blue");
        map.set("kite", "pink");
        map.set("lion", "golden");

        // Overwrite a few
        map.set("apple", "green");
        map.set("banana", "brown");

        // Length should still be 12
        expect(map.length()).toBe(12);
        expect(map.capacity).toBe(16);

        // Add "moon" → 13th entry
        map.set("moon", "silver");

        // Now length is 13, capacity still 16
        expect(map.length()).toBe(13);
        expect(map.capacity).toBe(16);

        // Add more entries beyond 16
        map.set("nest", "brown");
        map.set("owl", "white");
        map.set("pear", "green");
        map.set("queen", "purple");

        // Length keeps increasing, capacity stays fixed
        expect(map.length()).toBe(17);
        expect(map.capacity).toBe(16);
    });
});
