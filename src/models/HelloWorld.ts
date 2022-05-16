import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('produtos_gabiq')
class HelloWorld extends BaseEntity {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default HelloWorld;
