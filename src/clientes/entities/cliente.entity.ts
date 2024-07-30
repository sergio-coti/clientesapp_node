import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'cliente'
})
export class ClienteEntity {

    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number;

    @Column({
        name: 'nome',
        length: 100,
        nullable: false
    })
    nome: string;

    @Column({
        name: 'email',
        length: 50,
        nullable: false
    })
    email: string;
}