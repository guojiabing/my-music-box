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
import IndexItem from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/IndexItem';
/**
 * Home page information data processing class.
 */
class IndexViewModel {
    /**
     * Data information on the home page.
     *
     * @returns IndexItem array.
     */
    getIndexItemList() {
        let IndexItemList = [];
        IndexItemList.push(new IndexItem({ "id": 16777518, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777517, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777501, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777553, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MusicList'));
        IndexItemList.push(new IndexItem({ "id": 16777513, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777508, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777500, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777241, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/Live'));
        return IndexItemList;
    }
}
export default new IndexViewModel();
//# sourceMappingURL=IndexViewModel.js.map