import {Firework} from "./Types";

export class DummyFirework implements Firework {
    fire() {
        throw new Error("これはダミー花火です")
    }
}
