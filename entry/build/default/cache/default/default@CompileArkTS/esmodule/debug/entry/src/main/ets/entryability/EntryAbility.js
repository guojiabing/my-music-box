import hilog from '@ohos:hilog';
import UIAbility from '@ohos:app.ability.UIAbility';
import { login } from '@bundle:com.huawei.multidevicemusic/entry/ets/api/login';
export default class EntryAbility extends UIAbility {
    onCreate(want, launchParam) {
        AppStorage.SetOrCreate('context', this.context);
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    }
    onDestroy() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
        const userinfo = AppStorage.Get('userinfo');
        if (!userinfo) {
            hilog.info(111, 'error', '来了');
            login()
                .then(ret => {
                hilog.info(111, 'login', JSON.stringify(ret));
                AppStorage.SetAndProp('userinfo', ret);
            });
        }
        windowStage.loadContent('pages/Index', (err, data) => {
            var _a, _b;
            if (err.code) {
                hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', (_a = JSON.stringify(err)) !== null && _a !== void 0 ? _a : '');
                return;
            }
            hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', (_b = JSON.stringify(data)) !== null && _b !== void 0 ? _b : '');
        });
    }
    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground() {
        // Ability has brought to foreground
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground() {
        // Ability has back to background
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
}
//# sourceMappingURL=EntryAbility.js.map