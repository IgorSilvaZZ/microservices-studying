import { randomUUID } from "node:crypto";

import { Replace } from "../../helpers/Replace";

export interface IClientProps {
  name: string;
  email: string;
  password: string;
  type: string;
  createdAt: Date;
}

export class Client {
  private props: IClientProps;
  private _id: string;

  constructor(props: Replace<IClientProps, { createdAt?: Date }>, id?: string) {
    this._id = id ? id : randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get email() {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get password() {
    return this.props.password;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get type() {
    return this.props.type;
  }

  public set type(type: string) {
    this.props.type = type;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
