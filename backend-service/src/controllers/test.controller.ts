import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  // constructor() {}

  @Get()
  getTest(): string {
    return 'Test controller!!';
  }
}
