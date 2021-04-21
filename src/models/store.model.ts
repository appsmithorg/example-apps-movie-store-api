import {Entity, model, property} from '@loopback/repository';

@model()
export class Store extends Entity {
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
  manager_staff_id: string;

  @property({
    type: 'string',
    required: true,
  })
  address_id: string;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  constructor(data?: Partial<Store>) {
    super(data);
  }
}

export interface StoreRelations {
  // describe navigational properties here
}

export type StoreWithRelations = Store & StoreRelations;
