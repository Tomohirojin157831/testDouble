import {Firework} from "./Types";

// Dummyの役割を果たすように書き換えてください
export class DummyFirework implements Firework {
    fire() {
        throw new Error("呼ばれちゃったよ")
    }
}
