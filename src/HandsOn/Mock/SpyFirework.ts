import {Firework} from './Types'

// Spyの役割を果たすように書き換えてください
// 呼ばれたことを記録する
export default class SpyFirework implements Firework {
    fire_wasCalled = false
    fire(): void {
        this.fire_wasCalled = true
    }

    disable_wasCalled = false
    disable(): void {
        this.disable_wasCalled = true
    }

}