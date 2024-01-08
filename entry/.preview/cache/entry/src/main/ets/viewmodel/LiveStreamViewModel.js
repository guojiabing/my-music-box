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
import { LiveStream } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/LiveStream';
export class LiveStreamViewModel {
    getLiveStreamList() {
        let LiveStreamList = [];
        LiveStreamList.push(new LiveStream({ "id": 16777509, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777510, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777545, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        LiveStreamList.push(new LiveStream({ "id": 16777514, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777515, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777537, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        LiveStreamList.push(new LiveStream({ "id": 16777511, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777512, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777534, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        return LiveStreamList;
    }
}
//# sourceMappingURL=LiveStreamViewModel.js.map