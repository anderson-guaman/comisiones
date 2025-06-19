import { Module } from '@nestjs/common';
import { VentaService } from './services/venta.service';
import { VentaController } from './venta.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VentaProvider } from './providers/venta.provider';

@Module({
  imports:[
    DatabaseModule,
  ],
  controllers: [VentaController],
  providers: [
    VentaService,
    ...VentaProvider
  ],
})
export class VentaModule {}
