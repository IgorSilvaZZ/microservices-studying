import { getRepository, Repository } from "typeorm";
import { ICreatePurchaseDTO } from "../../../dtos/ICreatePurchaseDTO";
import { IPurchasesRepository } from "../../../repositories/IPurchasesRepository";
import { Purchase } from "../entities/Purchase";


export class PurchasesRepository implements IPurchasesRepository {

    private repository: Repository<Purchase>;

    constructor() {
        this.repository = getRepository(Purchase);
    }

    async create(data: ICreatePurchaseDTO): Promise<void> {
        const purchase = this.repository.create(data);

        await this.repository.save(purchase);
    }

}