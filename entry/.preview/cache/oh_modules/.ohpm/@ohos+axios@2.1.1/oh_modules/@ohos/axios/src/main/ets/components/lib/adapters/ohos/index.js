/*
 * The MIT License (MIT)
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 */
import http from '@package:pkg_modules/.ohpm/@ohos+axios@2.1.1/pkg_modules/@ohos/axios/src/main/ets/components/lib/adapters/ohos/http';
import download from '@package:pkg_modules/.ohpm/@ohos+axios@2.1.1/pkg_modules/@ohos/axios/src/main/ets/components/lib/adapters/ohos/download';
import upload from '@package:pkg_modules/.ohpm/@ohos+axios@2.1.1/pkg_modules/@ohos/axios/src/main/ets/components/lib/adapters/ohos/upload';
import fs from '@ohos:file.fs';
import FormData from '@package:pkg_modules/.ohpm/@ohos+axios@2.1.1/pkg_modules/@ohos/axios/src/main/ets/components/lib/env/classes/FormData';
const isXHRAdapterSupported = true;
export default isXHRAdapterSupported && function (config) {
  return new Promise(function (resolve, reject) {
    if (config.data && config.context && config.data instanceof FormData && config.method.toUpperCase() === 'POST') {
      // 上传
      upload(config, resolve, reject);
    } else if (config.filePath && config.method.toUpperCase() === 'GET') {
      // 下载。如果文件已存在，则直接返回错误。
      try {
        fs.accessSync(config.filePath);
        reject(new AxiosError('The file already exist, please delete the file first!', null, null, null, null));
      } catch (err) {
        download(config, resolve, reject);
      }
    } else {
      // 发送请求
      http(config, resolve, reject);
    }
  });
};