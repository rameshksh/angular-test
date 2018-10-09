import { Company } from "./company";
import { Address } from "cluster";

export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public phone: string;
    public website: string;
    public photoUrl: string;

    public company: Company;
    public address: Address;
}