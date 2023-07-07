import axios from 'axios';
export class AxiosHttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async get({ url, data }) {
        return await axios({ baseURL: this.baseURL, method: 'get', url: url, data: data });
    }
    async put({ url, data }) {
        return await axios({ baseURL: this.baseURL, method: 'put', url: url, data: data });
    }
    async post({ url, data }) {
        return await axios({ baseURL: this.baseURL, method: 'post', url: url, data: data });
    }
    async delete({ url, data }) {
        return await axios({ baseURL: this.baseURL, method: 'delete', url: url, data: data });
    }
}
//# sourceMappingURL=http-client.js.map