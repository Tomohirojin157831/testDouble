import {Firework} from "./Types";

export class MockFirework implements Firework {
    // ここにコードを記述して下さい
    private fire_wasCalled = false
    fire(): void {
        this.fire_wasCalled = true
    }

    private disable_wasCalled = false
    disable(): void {
        this.disable_wasCalled = true
    }

    verifyFire() {
        // ここにコードを記述して下さい
        expect(this.fire_wasCalled).toBeTruthy()
        expect(this.disable_wasCalled).not.toBeTruthy()
    }

    verifyDisable() {
        // ここにコードを記述して下さい
        expect(this.fire_wasCalled).not.toBeTruthy()
        expect(this.disable_wasCalled).toBeTruthy()
    }
}