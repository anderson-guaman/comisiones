import { Venta } from "src/venta/entities/venta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({length:100})
    nombre: string;
    
    @OneToMany(
        ()=>Venta,
        (venta)=>venta.usuario
    )
    venta: Venta
}
