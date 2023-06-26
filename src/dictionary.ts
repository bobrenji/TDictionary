export default class Dictionary {
    private containers: Record<string, string> = {};
    private length: number = 0;
    add(key: string, value: string) {
        if(this.containers[key]) {
            throw new Error("UNIQUE ONLY ALLOWED")
        }
        // if(this.containers.hasOwnProperty(key)) {
        //
        // }
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
}