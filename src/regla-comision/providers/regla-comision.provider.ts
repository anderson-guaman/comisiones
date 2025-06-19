import { DataSource } from "typeorm";
import { ReglaComision } from "../entities/regla-comision.entity";


export const ReglaComisionProvider = [
    {
        provide: 'REGLACOMISION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ReglaComision),
        inject: ['POSTGRES_SOURCE'],
    },
];