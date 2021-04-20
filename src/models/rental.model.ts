import {Entity, model, property} from '@loopback/repository';

@model()
export class Rental extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'date',
    required: true,
  })
  rental_date: string;

  @property({
    type: 'number',
    required: true,
  })
  inventory_id: number;

  @property({
    type: 'number',
    required: true,
  })
  customer_id: number;

  @property({
    type: 'date',
    required: true,
  })
  return_date: string;

  @property({
    type: 'number',
    required: true,
  })
  staff_id: number;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  constructor(data?: Partial<Rental>) {
    super(data);
  }
}

export interface RentalRelations {
  // describe navigational properties here
}

export type RentalWithRelations = Rental & RentalRelations;
