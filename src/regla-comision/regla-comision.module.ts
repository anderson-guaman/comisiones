import { Module } from '@nestjs/common';
import { ReglaComisionService } from './services/regla-comision.service';
import { ReglaComisionController } from './regla-comision.controller';
import { ReglaComisionProvider } from './providers/regla-comision.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[
    DatabaseModule
  ],
  controllers: [ReglaComisionController],
  providers: [
    ReglaComisionService,
    ...ReglaComisionProvider,
  ],
})
export class ReglaComisionModule {}
