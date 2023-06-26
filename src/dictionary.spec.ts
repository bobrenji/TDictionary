import Dictionary from "./dictionary";

describe('Dictionary', function () {
    const aDict: Dictionary = new Dictionary()
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

    it('should possible to delete item by key', function () {
        aDict.add("firstName", "Bob")
        aDict.add("lastName", "Jack")
        expect(aDict.size()).toEqual(2)
        aDict.remove("lastName")
        expect(aDict.size()).toEqual(1)
    });

    it('should be the same size if ask to delete an unknown key', function () {
        aDict.add("firstName", "Bob")
        expect(aDict.size()).toEqual(1)
        aDict.remove("lastName")
        expect(aDict.size()).toEqual(1)
    });

    it('should return all keys in current dictionary', function () {
        aDict.add("firstName", "Bob")
        aDict.add("lastName", "Jack")
        aDict.add("middleName", "Dani")
        const keys: string[] = aDict.getAllKeys();
        expect(keys.length).toEqual(3);
    });

    it('should return all values in dictionary', function () {
        aDict.add("firstName", "Bob")
        aDict.add("lastName", "Jack")
        aDict.add("middleName", "Dani")

        const values = aDict.getAllValues();
        expect(values.length).toEqual(3)
    });
});