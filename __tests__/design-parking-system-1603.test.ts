import ParkingSystem from '@src/design-parking-system-1603';

describe('ParkingSystem', () => {
    test('1 big 1 medium 0 small, add big true, add medium true, add small false, add big false', () => {
        const parkingSystem = new ParkingSystem(1, 1, 0);
        expect(parkingSystem.addCar(1)).toBe(true);
        expect(parkingSystem.addCar(2)).toBe(true);
        expect(parkingSystem.addCar(3)).toBe(false);
        expect(parkingSystem.addCar(1)).toBe(false);
    });

    test('1 big 1 medium 1 small, add big true, add medium true, add small true, add big false, add medium false, add small false', () => {
        const parkingSystem = new ParkingSystem(1, 1, 1);
        expect(parkingSystem.addCar(1)).toBe(true);
        expect(parkingSystem.addCar(2)).toBe(true);
        expect(parkingSystem.addCar(3)).toBe(true);
        expect(parkingSystem.addCar(1)).toBe(false);
        expect(parkingSystem.addCar(2)).toBe(false);
        expect(parkingSystem.addCar(3)).toBe(false);
    });
});
