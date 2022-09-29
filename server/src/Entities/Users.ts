import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Token } from './Token';


@Entity()
export class Users extends BaseEntity {
        @PrimaryGeneratedColumn()
        id!: number;

        @Column()
        name!: string;

        @Column()
        username!: string;

        @Column()
        password!: string;

    }

