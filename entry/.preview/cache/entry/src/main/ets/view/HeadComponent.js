/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import router from '@ohos:router';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
export class HeadComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/HeadComponent.ets(23:5)");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.onClick(() => {
                router.back();
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777227, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("view/HeadComponent.ets(24:7)");
            Image.width({ "id": 16777340, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.height({ "id": 16777339, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({
                left: { "id": 16777342, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777343, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777505, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.debugLine("view/HeadComponent.ets(31:7)");
            Text.fontSize({ "id": 16777336, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=HeadComponent.js.map