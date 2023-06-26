class Dictionary {
    private container: Record<string, string> = {};
    private length: number = 0;
    add(key: string, value: string) {
        this.container[key] = value;
        this.length +=1;
    }

    size(): number {
        return this.length
    }
}

describe('Dictionary', function () {
    it.todo("should add an item to dictionary with key")
    it.todo("should throw exception if try to add new value with same key")
    it.todo("should return the size of the dictionary")
    it.todo("should get value by key")
    it.todo("should possible to delete item by key")
    it.todo("should possible to delete all item by calling removeAll")
    it.todo("should return all key registered in current dictionary")
    it.todo("should return all values in dictionary")

    it('should add an item to dictionary with key', function () {
        const aDict = new Dictionary()
        aDict.add("name","Renji");
        expect(aDict.size()).toEqual(1);
    });

    it('should return the size of the dictionary', function () {
        const aDict = new Dictionary()
        aDict.add("firstName","Renji");
        aDict.add("lastName","Raj");
        expect(aDict.size()).toEqual(2);
    });

});