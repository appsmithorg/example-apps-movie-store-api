import {Entity, model, property} from '@loopback/repository';

@model()
export class CustomerList extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
    required: true,
  })
  zip_code: number;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  notes: string;

  @property({
    type: 'string',
    default: 1,
  })
  sid?: string;

  constructor(data?: Partial<CustomerList>) {
    super(data);
  }
}

export interface CustomerListRelations {
  // describe navigational properties here
}

export type CustomerListWithRelations = CustomerList & CustomerListRelations;
