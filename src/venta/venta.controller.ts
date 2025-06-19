import { Body, Controller, Get, Post } from '@nestjs/common';
import { VentaService } from './services/venta.service';
import { IConsultaComisionesVentas } from './dtos/ventas.dto';

@Controller('VentaController')
export class VentaController {
  constructor(
    private readonly ventaService: VentaService
  ) { }

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }

  @Post()
  obtenerComisionesPorVenta(@Body() dto: IConsultaComisionesVentas){
    return this.ventaService.obtenerVentasEntreFechas(dto);
  }
}
