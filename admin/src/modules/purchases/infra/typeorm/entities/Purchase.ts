import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("purchases")
export class Purchase {
  @PrimaryColumn()
  id: string;

  @Column()
  total: number;

  @Column()
  clientId: string;

  @Column()
  approved: Boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
