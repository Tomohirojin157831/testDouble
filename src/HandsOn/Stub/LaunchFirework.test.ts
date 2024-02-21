import {Weather} from './Types'
import {LaunchFireworkImpl} from './LaunchFirework'
import {StubWeatherRepository} from './StubWeatherRepository'
import {SpyWeatherRepository} from './SpyWeatherRepository'

// LaunchFireworkは天気APIに依存しており、返り値によって挙動が変わります。
// このままでは本物のAPIを叩いてしまうので、時間がかかる＋テストができません。
// そこでWeatherRepositoryのスタブ（返り値を固定するもの）を使って、テストできるようにしましょう

describe('LaunchFireworkImpl（花火打ち上げ装置）のテスト', () => {
    it('天気が晴れの場合、返り値が 花火を打ち上げました になること', async () => {
        const stubWeatherRepository = new StubWeatherRepository()
        stubWeatherRepository.getByCity_returnValue = Promise.resolve(Weather.SUNNY)
        const launchFirework = new LaunchFireworkImpl(stubWeatherRepository)


        const result = await launchFirework.launch('')


        expect(result).toBe('花火を打ち上げました')
    })

    it('天気が晴れの以外の場合、返り値が 中止しました になること', async () => {
        const stubWeatherRepository = new StubWeatherRepository()
        stubWeatherRepository.getByCity_returnValue = Promise.resolve(Weather.RAINY) // <- 雨がセットされました
        const launchFirework = new LaunchFireworkImpl(stubWeatherRepository) // <- LaunchFireworkImplのコンストラクターに渡してる


        const result = await launchFirework.launch('')


        // red(想定通りテストが落ちることを確認する) -> green(テストが通る最小限の実装をする) -> refactor
        expect(result).toBe('中止しました')
    })

    // Spy: テスト対象が依存しているコンポーネントにアクセスしたのかを記録するもの
    // ⇨ 何のメソッドが呼ばれたか、どんな引数を渡されたか、何回呼ばれたか・もしくは呼ばれていないのか
    it('花火打ち上げ場所の都市名を渡していること', async () => {
        const spyWeatherRepository = new SpyWeatherRepository()
        const launchFirework = new LaunchFireworkImpl(spyWeatherRepository)


        await launchFirework.launch('Toyota')


        // アサーションで見ているのは、なんですか？ → 「spyWeatherRepositoryのgetByCityメソッドに渡された引数」は「Toyota」であること
        expect(spyWeatherRepository.getByCity_arg).toEqual('Toyota')
    })
})
