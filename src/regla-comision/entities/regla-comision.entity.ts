import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ReglaComision{
    @PrimaryGeneratedColumn()
    idReglaComision:number;

    @Column({type:'float'})
    porcentaje: number; 

    @Column()
    minimo: number
} 