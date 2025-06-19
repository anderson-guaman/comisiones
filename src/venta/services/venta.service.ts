import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Venta } from '../entities/venta.entity';
import { IComisionesVentas, IConsultaComisionesVentas } from '../dtos/ventas.dto';
import { Observable } from 'rxjs';

@Injectable()
export class VentaService {
  constructor(
    @Inject('VENTA_REPOSITORY')
    private ventaRepository: Repository<Venta>,
  ) { }

  async findAll(): Promise<Venta[]> {
    return this.ventaRepository.find();
  }

  async obtenerVentasEntreFechas(dto:IConsultaComisionesVentas)
    : Promise<IComisionesVentas[]>
  {
    const {fechaInicio, fechaFin } = dto;
    const result = await this.ventaRepository.query(`
      SELECT 
        VE."usuarioIdUsuario",
        US.nombre,
        SUM(VE.total) AS vendido,
        (
          SELECT RC.porcentaje
          FROM regla_comision RC
          WHERE RC.minimo <= SUM(VE.total)
          ORDER BY RC.minimo DESC
          LIMIT 1
        ) * SUM(VE.total) AS comision
      FROM venta VE
      JOIN usuario US ON VE."usuarioIdUsuario" = US."idUsuario"
      WHERE VE."fechaVenta" BETWEEN $1 AND $2
      GROUP BY VE."usuarioIdUsuario", US.nombre
    `, [fechaInicio, fechaFin]);
    return result.map((r)=>{
      return{
        nombre: r.nombre,
        vendido: r.vendido,
        comision: r.comision
      }
    })
  }
}
