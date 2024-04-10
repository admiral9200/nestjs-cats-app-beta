import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    breed: string

    @ManyToMany(() => User, user => user.favorites, { cascade: true })
    users: User[]

    @ManyToMany(() => User, (cat) => cat.favorites, {cascade: true})
    @JoinTable()
    favorites: User[]
}