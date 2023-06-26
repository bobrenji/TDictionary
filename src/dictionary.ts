
export default class Dictionary {
    private containers: Record<string, string>;
    private length: number;
    constructor() {
        this.containers = {};
        this.length = 0;
    }
    add(key: string, value: string): void {
        if(this.containers[key]) {
            throw new Error("UNIQUE ONLY ALLOWED")
        }
        this.containers[key] = value;
        this.length +=1;
    }

    size(): number {
        return this.length
    }

    removeAll(): void {
        this.containers = {}
        this.length = 0;
    }

    get(key: string): string | undefined {
        return this.containers[key] ? this.containers[key] : undefined;
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

    getAllValues(): string[] {
        if (this.length === 0) return []
        let values: string[] = []

        for (const key in this.containers) {
            if(this.containers[key]) {
                values.push(this.containers[key])
            }
        }
        return values
    }
}