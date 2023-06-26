import Dictionary from "./dictionary";

describe('Dictionary', function () {
    it.todo("should add an item to dictionary with key")
    it.todo("should throw exception if try to add new value with same key")
    it.todo("should return the size of the dictionary")
    it.todo("should get value by key")
    it.todo("should possible to delete item by key")
    it.todo("should possible to delete all item by calling removeAll")
    it.todo("should return all key registered in current dictionary")
    it.todo("should return all values in dictionary")

    const aDict = new Dictionary()
    beforeEach(() => {
        aDict.removeAll()
    })

    it('should add an item to dictionary with key', function () {
        aDict.add("name","Renji");
        expect(aDict.size()).toEqual(1);
    });

    it('should return the size of the dictionary', function () {
        aDict.add("firstName","Renji");
        aDict.add("lastName","Raj");
        expect(aDict.size()).toEqual(2);
    });

    it('should possible to delete all item by calling removeAll', function () {
        aDict.add("firstName","Renji");
        aDict.add("lastName","Raj");
        aDict.removeAll()
        expect(aDict.size()).toEqual(0);
    });

    it('should throw exception if try to add new value with same key', function () {
        aDict.add("firstName", "Renji")
        expect(() => aDict.add("firstName", "Bob")).toThrowError("UNIQUE ONLY ALLOWED")
    });

    it('should return undefined if not found for a specific key', function () {
        expect(aDict.get("lastName")).toBeUndefined()
    });

    it('should get value by key', function () {
        aDict.add("firstName", "Bob")
        expect(aDict.get("firstName")).toEqual("Bob")
    });
});