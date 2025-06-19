
import { ReglaComision } from 'src/regla-comision/entities/regla-comision.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Venta } from 'src/venta/entities/venta.entity';
import { DataSource } from 'typeorm';

export const PostgresProvider = [
  {
    provide: 'POSTGRES_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        ssl: process.env.STAGE === 'prod',
        extra: {
          ssl: process.env.STAGE === 'prod'
            ? { rejectUnauthorized: false }
            : null,
        },
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT!,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
          Usuario,
          Venta,
          ReglaComision,
        ],
        synchronize: process.env.STAGE == 'dev',
      });

      return dataSource.initialize();
    },
  },
];
