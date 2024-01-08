import axios from '@ohos/axios'
import Prompt from '@system.prompt';

const instance = axios.create({
  baseURL: 'http://121.36.250.181:3000'
})

instance.interceptors.request.use(
  config => {
    // const { url } = config;
    //   const userinfo = sessionStorage.getItem('userinfo');
    //   const { jwt } = JSON.parse(userinfo ?? "{}");
    //
    //   config.headers!.Authorization = `Bearer ${jwt}`;

    return config;
  },
);

const errorMessageMap: { [p: string]: string } = {
  429: '网关资源请求过多', //网关
  400: '服务资源请求错误',
  401: '服务资源未授权',
  403: '服务资源拒绝访问',
  404: '请求资源不存在，可刷新页面后重试',
  405: '远程方法禁止访问',
  408: '请求超时',
  500: '系统异常，详情可联系管理员',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持',
  other: '网络请求异常'
};

instance.interceptors.response.use(
  response => {
    const code = response.data?.code;

    if (code !== 0 || code !== 200) {
      const message = response.data?.message ?? errorMessageMap.other;

      Prompt.showToast({ message })

      return Promise.reject(message);
    }

    return Promise.resolve(response.data);
  },
  error => {
    const status = error.response?.status;

    // if (status === 401) {
    //   sessionStorage.clear();
    //   window.open(urls.login, '_self');
    // }

    Prompt.showToast({ message: errorMessageMap[status as string] ?? errorMessageMap.other })

    return Promise.reject(error);
  },
);

export default instance;