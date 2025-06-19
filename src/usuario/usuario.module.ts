import { Module } from '@nestjs/common';

import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsuarioProvider } from './providers/usuario.provider';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    ...UsuarioProvider 
  ],
})
export class UsuarioModule {}
