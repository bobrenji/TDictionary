export default class Dictionary {
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