import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  store_id: number;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  address_id: number;

  @property({
    type: 'boolean',
    required: true,
  })
  activebool: boolean;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  create_date?: string;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  @property({
    type: 'number',
    required: true,
  })
  active: number;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
