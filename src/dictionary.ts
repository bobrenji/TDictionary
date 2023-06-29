
export interface IDictionary<TValue> {
    add(key: string, value: TValue): void;
    size(): number;
    removeAll(): void;
    get(key: string): TValue;
    remove(key: string): void;
    getAllKeys(): string[];
    getAllValues(): TValue[]
}

type Container<T> = Record<string, T>; // Does it make sense to use Index signature {[key: string] : T} or Record?
export default class Dictionary<TValue> implements IDictionary<TValue>{
    private readonly containers: Container<TValue>;
    private length: number;
    constructor() {
        this.containers = {};
        this.length = 0;
    }
    add(key: string, value: TValue): void {
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
        for (const key in this.containers) {
            this.remove(key)
        }
    }

    get(key: string): TValue {
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

    getAllValues(): TValue[] {
        if (this.length === 0) return []
        let values: TValue[] = []

        for (const key in this.containers) {
            if(this.containers[key]) {
                values.push(this.containers[key])
            }
        }
        return values
    }


}