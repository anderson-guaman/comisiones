
import { DataSource } from "typeorm";
import { Venta } from "../entities/venta.entity";


export const VentaProvider = [
    {
        provide:'VENTA_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Venta),
        inject: ['POSTGRES_SOURCE'],
    },
];