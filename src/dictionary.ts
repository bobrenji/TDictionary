
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
}