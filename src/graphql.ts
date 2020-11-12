
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CatInput {
    id?: string;
    name: string;
    age: number;
    description?: string;
}

export abstract class IQuery {
    abstract findOne(id: string): Cat | Promise<Cat>;

    abstract findAll(): Cat[] | Promise<Cat[]>;
}

export class Cat {
    id?: string;
    name: string;
    age: number;
    description?: string;
}

export abstract class IMutation {
    abstract create(input: CatInput): Cat | Promise<Cat>;

    abstract update(input: CatInput, id: string): Cat | Promise<Cat>;

    abstract remove(id: string): Cat | Promise<Cat>;
}
