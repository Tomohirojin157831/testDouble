import {Firework} from './Types'

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