import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { VentaModule } from './venta/venta.module';
import { ReglaComisionModule } from './regla-comision/regla-comision.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsuarioModule, 
    VentaModule, 
    ReglaComisionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
