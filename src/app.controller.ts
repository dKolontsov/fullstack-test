import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/markers')
  getMarkers(): any {
    return this.appService.getMarkers();
  }

  @Get('/roads')
  getRoads(): any {
    return this.appService.getRoads()
  }
}
