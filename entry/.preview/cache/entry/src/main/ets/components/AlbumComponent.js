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
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { BreakpointConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/BreakpointConstants';
import { GridConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/GridConstants';
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { optionList } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/SongListData';
import { ContentConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/ContentConstants';
export class AlbumComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__imgHeight = new ObservedPropertySimplePU(0, this, "imgHeight");
        this.__currentBreakpoint = new SynchedPropertySimpleTwoWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.imgHeight !== undefined) {
            this.imgHeight = params.imgHeight;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__imgHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__imgHeight.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get imgHeight() {
        return this.__imgHeight.get();
    }
    set imgHeight(newValue) {
        this.__imgHeight.set(newValue);
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    CoverImage(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.BottomStart });
            Stack.debugLine("components/AlbumComponent.ets(31:5)");
            Stack.width(StyleConstants.FULL_WIDTH);
            Stack.height(StyleConstants.FULL_HEIGHT);
            Stack.aspectRatio(ContentConstants.ASPECT_RATIO_ALBUM_COVER);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777230, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/AlbumComponent.ets(32:7)");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.aspectRatio(ContentConstants.ASPECT_RATIO_ALBUM_COVER);
            Image.borderRadius({ "id": 16777281, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.onAreaChange((oldArea, newArea) => {
                this.imgHeight = newArea.height;
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777503, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.debugLine("components/AlbumComponent.ets(39:7)");
            Text.letterSpacing(ContentConstants.LETTER_SPACING);
            Text.fontColor(Color.White);
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777298, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777297, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777296, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.translate({
                x: StyleConstants.TRANSLATE_X,
                y: StyleConstants.TRANSLATE_Y
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Stack.pop();
    }
    CoverIntroduction(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("components/AlbumComponent.ets(59:5)");
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                this.imgHeight : { "id": 16777363, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Center);
            Column.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : 0
            });
            Column.margin({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : { "id": 16777365, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                    0 : { "id": 16777364, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777507, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.debugLine("components/AlbumComponent.ets(60:7)");
            Text.opacity({ "id": 16777283, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(ContentConstants.ALBUM_FONT_WEIGHT);
            Text.fontColor({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777381, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777380, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777379, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.margin({ bottom: { "id": 16777282, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777523, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.debugLine("components/AlbumComponent.ets(71:7)");
            Text.opacity({ "id": 16777366, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.width(StyleConstants.FULL_WIDTH);
            Text.fontWeight(ContentConstants.INTRODUCTION_FONT_WEIGHT);
            Text.fontColor({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777362, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777361, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777360, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    CoverOptions(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("components/AlbumComponent.ets(99:5)");
            Row.height({ "id": 16777424, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.width(StyleConstants.FULL_WIDTH);
            Row.padding({
                left: { "id": 16777430, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777430, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create({ space: ContentConstants.COVER_OPTION_SPACE });
                    Column.debugLine("components/AlbumComponent.ets(101:9)");
                    Column.onClick(item.action ? item.action : () => { });
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item.image);
                    Image.debugLine("components/AlbumComponent.ets(102:11)");
                    Image.height({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Image.width({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.text);
                    Text.debugLine("components/AlbumComponent.ets(105:11)");
                    Text.fontColor({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Text.fontSize(new BreakpointType({
                        sm: { "id": 16777427, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                        md: { "id": 16777426, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                        lg: { "id": 16777425, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                    }).getValue(this.currentBreakpoint));
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, optionList, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("components/AlbumComponent.ets(126:5)");
            Column.margin({
                left: new BreakpointType({
                    sm: { "id": 16777414, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777413, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777412, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint),
                right: new BreakpointType({
                    sm: { "id": 16777414, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777413, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777412, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint)
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridRow.create();
            GridRow.debugLine("components/AlbumComponent.ets(127:7)");
            GridRow.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777312, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777311, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                left: new BreakpointType({
                    sm: { "id": 16777286, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777285, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777284, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint),
                right: new BreakpointType({
                    sm: { "id": 16777286, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777285, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777284, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint)
            });
            if (!isInitialRender) {
                GridRow.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_FOUR,
                    md: GridConstants.SPAN_TWELVE,
                    lg: GridConstants.SPAN_TWELVE
                }
            });
            GridCol.debugLine("components/AlbumComponent.ets(128:9)");
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.CoverImage.bind(this)();
        GridCol.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_EIGHT,
                    md: GridConstants.SPAN_TWELVE,
                    lg: GridConstants.SPAN_TWELVE
                }
            });
            GridCol.debugLine("components/AlbumComponent.ets(138:9)");
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.CoverIntroduction.bind(this)();
        GridCol.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_TWELVE,
                    md: GridConstants.SPAN_TWELVE,
                    lg: GridConstants.SPAN_TWELVE
                }
            });
            GridCol.debugLine("components/AlbumComponent.ets(148:9)");
            GridCol.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : 0,
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : 0
            });
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.CoverOptions.bind(this)();
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=AlbumComponent.js.map