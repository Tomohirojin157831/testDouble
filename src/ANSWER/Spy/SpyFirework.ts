import {Firework} from "./Types";

export class SpyFirework implements Firework {
    // ここにコードを記述して下さい
    fire_wasCalled = false
    fire() {
        this.fire_wasCalled = true
    }
}