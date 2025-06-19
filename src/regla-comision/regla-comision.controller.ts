import { Controller, Get } from '@nestjs/common';
import { ReglaComisionService } from './services/regla-comision.service';

@Controller('ReglaComisionController')
export class ReglaComisionController {
  constructor(private readonly reglaComisionService: ReglaComisionService) {}

  @Get()
  findAll() {
    return this.reglaComisionService.findAll();
  }
}
