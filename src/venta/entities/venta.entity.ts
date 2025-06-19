import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Venta{
    @PrimaryGeneratedColumn()
    idVenta: number;

    @Column({type:'date'})
    fechaVenta: Date;

    @Column()
    total: number;

    @ManyToOne(
        ()=> Usuario,
        (usuario)=> usuario.venta
    )
    usuario: Usuario
} 