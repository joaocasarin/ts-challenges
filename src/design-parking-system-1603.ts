export default class ParkingSystem {
    private parkingSlots: Record<number, number> = {};

    constructor(big: number, medium: number, small: number) {
        this.parkingSlots[1] = big;
        this.parkingSlots[2] = medium;
        this.parkingSlots[3] = small;
    }

    addCar(carType: number): boolean {
        if (this.parkingSlots[carType] > 0) {
            this.parkingSlots[carType] -= 1;
            return true;
        }

        return false;
    }
}
