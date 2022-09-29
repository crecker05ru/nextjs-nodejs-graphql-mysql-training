import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne,JoinColumn} from "typeorm"
import {Users} from './Users';

@Entity()
export class Token extends BaseEntity{

    @OneToOne(() => Users)
    @JoinColumn()
    user!: string;

    @Column()
    refreshToken!: string;

    @Column()
    isActive!:boolean;
    default!: false;
}