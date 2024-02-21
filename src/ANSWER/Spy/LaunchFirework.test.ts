import {SpyFirework} from './SpyFirework'
import {LaunchFireworkImpl} from './LaunchFirework'

// 正しく打ち上げられるかどうかをテストするにはどうしたらよいでしょうか？
// Spy（呼ばれたか・呼ばれていないか・どのように呼ばれたかを記録するもの）を使いましょう。

describe('花火打ち上げシステム（LaunchFireworkImpl）のテスト', () => {

    it('正しいパスワードの場合、spyFirework.fire(）が呼ばれていること', () => {
        const spyFirework = new SpyFirework()
        const correctPassword = '55party'
        const launchFirework = new LaunchFireworkImpl(spyFirework, correctPassword)


        launchFirework.launch()


        expect(spyFirework.fire_wasCalled).toBeTruthy()
    })

    it('間違ったパスワードの場合、spyFirework.fire(）が呼ばれないこと', () => {
        const spyFirework = new SpyFirework()
        const invalidPassword = '88event'
        const launchFirework = new LaunchFireworkImpl(spyFirework, invalidPassword)


        launchFirework.launch()


        expect(spyFirework.fire_wasCalled).not.toBeTruthy()
    })
})
