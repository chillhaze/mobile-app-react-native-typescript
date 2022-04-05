import axios, { Axios } from 'axios';
import BASE_URL from '../consts/base-url';
import AuthStorage from './storage';

interface IConfig {
  url?: string;
  id?: string;
  data?: {
    title?: string;
    description?: string;
    year?: number;
    public?: boolean;
    completed?: boolean;
  };
  headers?: any;
  token?: any;
  filter?: {
    filterByTitle: string;
    filterByPublic: string;
    filterByCompleted: string;
  };
}

interface IConfigUser {
  url?: string;
  id?: string;
  data?: {
    name: string;
    email: string;
  };
  headers?: any;
  token?: any;
}

class HttpService {
  baseUrl: string | undefined;
  apiVersion: string;
  fetchingService: Axios;

  constructor({
    baseUrl = BASE_URL,
    apiVersion = 'api',
    fetchingService = axios,
  } = {}) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService;
  }

  private getFullApiUrl(url: string, id: string | undefined) {
    if (id) {
      return `${this.baseUrl}/${this.apiVersion}/${url}/${id}`;
    } else {
      return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }
  }

  private async populateTokenToHeaderConfig() {
    return {
      Authorization: await AuthStorage.getItem(),
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }) {
    console.log(data, url);

    return configWithoutDataAndUrl;
  }

  async get(config: IConfig | IConfigUser, withAuth = true) {
    if (withAuth) {
      const token = await this.populateTokenToHeaderConfig();

      config.headers = {
        ...config.headers,
        ...token,
      };
    }

    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config),
    );
  }

  async post(config: IConfig | IConfigUser, withAuth = true) {
    if (withAuth) {
      const token = await this.populateTokenToHeaderConfig();

      config.headers = {
        ...config.headers,
        ...token,
      };
    }
    const urlData = this.extractUrlAndDataFromConfig(config);

    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      urlData,
    );
  }

  async put(config: IConfig | IConfigUser, withAuth = true) {
    if (withAuth) {
      const token = await this.populateTokenToHeaderConfig();
      config.headers = {
        ...config.headers,
        ...token,
      };
    }
    const urlData = this.extractUrlAndDataFromConfig(config);

    return this.fetchingService.put(
      this.getFullApiUrl(config.url, config.id),
      config.data,
      urlData,
    );
  }

  async delete(config, withAuth = true) {
    if (withAuth) {
      const token = await this.populateTokenToHeaderConfig();

      config.headers = {
        ...config.headers,
        ...token,
      };
    }

    return await this.fetchingService.delete(
      this.getFullApiUrl(config.url, config.id),
      this.extractUrlAndDataFromConfig(config),
    );
  }
}

export default HttpService;
