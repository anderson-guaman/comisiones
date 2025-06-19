import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReglaComision } from '../entities/regla-comision.entity';

@Injectable()
export class ReglaComisionService {
    constructor(
        @Inject('REGLACOMISION_REPOSITORY')
        private reglaComisionRepository: Repository<ReglaComision>,
    ) { }

  async findAll(): Promise<ReglaComision[]> {
    return this.reglaComisionRepository.find();
  }
}
