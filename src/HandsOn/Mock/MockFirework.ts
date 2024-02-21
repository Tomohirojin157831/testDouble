import {Firework} from "./Types";

// Mockの役割を果たすように書き換えてください
export class MockFirework implements Firework {
    private fire_wasCalled = false
    fire(): void {
    }

    private disable_wasCalled = false
    disable(): void {
    }

    verifyFire() {
    }

    verifyDisable() {
    }
}