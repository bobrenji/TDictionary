
export interface IDictionary<T> {
    add(key: string, value: T): void;
    size(): number;
    removeAll(): void;
    get(key: string): T;
    remove(key: string): void;
    getAllKeys(): string[];
    getAllValues(): T[]
}

type Container<T> = Record<string, T>; // Does it make sense to use Index signature {[key: string] : T} or Record?
export default class Dictionary<T> implements IDictionary<T>{
    private containers: Container<T>;
    private length: number;
    constructor() {
        this.containers = {};
        this.length = 0;
    }
    add(key: string, value: T): void {
        if(this.containers[key]) {
            throw new Error("UNIQUE ONLY ALLOWED")
        }
        this.containers[key] = value
        this.length +=1
    }

    size(): number {
        return this.length
    }

    removeAll(): void {
        this.containers = {}
        this.length = 0;
    }

    get(key: string): T {
        return this.containers[key];
    }

    remove(key: string): void {
        if(this.containers[key]) {
            delete this.containers[key];
            this.length -= 1
        }
    }

    getAllKeys(): string[] {
        if(this.length === 0) return [];
        let keys: string[] = []

        for (const containersKey in this.containers) {
            keys.push(containersKey)
        }
        return keys
    }

    getAllValues(): T[] {
        if (this.length === 0) return []
        let values: T[] = []

        for (const key in this.containers) {
            if(this.containers[key]) {
                values.push(this.containers[key])
            }
        }
        return values
    }


}