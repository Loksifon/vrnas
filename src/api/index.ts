import type { AxiosInstance } from 'axios';
import axios from "axios";


interface ApiConstructorParams {
  baseURL: string;
}

export class API {
  public baseURL: string;
	public request: AxiosInstance;
  constructor(options: ApiConstructorParams) {
    this.baseURL = options.baseURL;

    this.request = axios.create({
      baseURL: "https://some-domain.com/api/",
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
  }
}


export const mokkyApi = new API({baseURL: 'https://37022352afe9c260.mokky.dev'})
