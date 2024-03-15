import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getRoads(): Promise<any> {
    try {
      const response = await this.httpService.get('https://its62.ru/static-cache/roads.json').toPromise();
      return response.data;
    } catch (error) {
      throw new Error(`Ошибка запроса к API: ${error.message}`);
    }
  }

  async getMarkers(): Promise<any> {
    try {
      const response = await this.httpService.get('https://its62.ru/static-cache/inform_devices.json').toPromise();
      return response.data;
    } catch (error) {
      throw new Error(`Ошибка запроса к API: ${error.message}`);
    }
  }
}
