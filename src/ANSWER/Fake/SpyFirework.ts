import {Firework} from './Types'

export class SpyFirework implements Firework {

    fire_wasCalled = false

    fire() {
        this.fire_wasCalled = true
    }
}