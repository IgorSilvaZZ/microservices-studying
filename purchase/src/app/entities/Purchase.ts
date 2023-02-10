import { randomUUID } from "node:crypto";

import { Replace } from "../../helpers/Replace";

export interface IPurchaseProps {
    total: number;
    clientId: string;
    createdAt: Date;
}

export class Purchase {
    private props: IPurchaseProps;
    private _id: string;

    constructor(props: Replace<IPurchaseProps, { createdAt?: Date }>, id?: string) {
        this._id = id ? id : randomUUID();
        this.props = {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        };
    }

    get id () {
        return this._id;
    }

    public get total() {
        return this.props.total;
    }

    public set total(total: number) {
        this.props.total = total;
    }

    public get clientId() {
        return this.props.clientId;
    }

    public set clientId(clientId: string) {
        this.props.clientId = clientId;
    }

    public get createdAt() {
        return this.props.createdAt;
    }

}