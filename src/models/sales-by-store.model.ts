import {Entity, model, property} from '@loopback/repository';

@model()
export class SalesByStore extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  store: string;

  @property({
    type: 'string',
    required: true,
  })
  manager: string;


  constructor(data?: Partial<SalesByStore>) {
    super(data);
  }
}

export interface SalesByStoreRelations {
  // describe navigational properties here
}

export type SalesByStoreWithRelations = SalesByStore & SalesByStoreRelations;
