import { CategoryBudget } from 'src/category-budgets';
import { BaseEntity } from 'src/global';
import { User } from 'src/users';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class MonthlyBudget extends BaseEntity {
	@Column({ type: 'smallint' })
	year: number;

	@Column({ type: 'smallint' })
	month: number;

	@Column()
	totalAmount: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@OneToMany(() => CategoryBudget, (categoryBudget) => categoryBudget.monthlyBudget)
	categoryBudgets: CategoryBudget[];
}
