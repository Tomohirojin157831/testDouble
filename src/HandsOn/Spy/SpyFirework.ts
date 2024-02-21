import {Firework} from "./Types";
import {LaunchFireworkImpl} from './LaunchFirework'

// 正しくSpyの役割を果たすように書き換えてください
export class SpyFirework implements Firework {
    fire_wasCalled = false

    // このメソッドを呼んだらfire_wasCalledがtrueになればいい
    fire() {
        this.fire_wasCalled = true;
    }
}
