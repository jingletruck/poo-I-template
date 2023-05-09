export class Account{
    constructor(
        private id: string,
        private ownerId: string,
        private balance: number,
        private createdAt: string,
    ){}

    getBalance(): number{
        return this.balance
    }

    getId(): string{
        return this.id
    }

    getOwerId(): string{
        return this.ownerId
    }
}