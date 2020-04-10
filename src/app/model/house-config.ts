export interface HouseConfig {
    markup: number;
    numberOfBricks: number;
}

export class HouseConfig {
    constructor() {
        return {
            markup: 0,
            numberOfBricks: 1
        };
    }
}
