import {DummyFirework} from './DummyFirework'
import {LaunchFireworkImpl} from './LaunchFirework'

// スタブのテストでは、説明の簡略化のためにlaunchが文字列を返す仕様にしていました。
// ですが、本来はLaunchFireworkImplが何かしらFireworkというオブジェクトに対して、操作を与えた結果花火が打ち上げられるべきです。
// そこで、花火を打つ時は、Fireworkオブジェクトとパスワードを渡し、正しければFireworkのfireメソッドを呼ぶようにします。
// 本物のFireworkオブジェクトのfireメソッドを呼んでしまうと、本物の花火が打ち上げされてしまいます。
// また、LaunchFireworkImplのlaunchメソッドには返り値がありません。
// Dummy（使うとエラーを出力するもの）を使用して、間違ったパスワードを渡した場合に、打ち上げがされていないことを確認しましょう。


describe('LaunchFireworkImpl（花火打ち上げ装置）のテスト', () => {
    it('間違ったパスワードが返った場合、fireは実行されない', () => {
        // 使うとエラーを出力する花火
        const invalidPassword = '88event'
        const dummyFirework = new DummyFirework()
        const launchFirework = new LaunchFireworkImpl(dummyFirework, invalidPassword)

        // 花火が打ち上げられていなければエラーが出ず、テストが通るはず
        launchFirework.launch()
    })
})
