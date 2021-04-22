import {Entity, model, property} from '@loopback/repository';

@model()
export class Rental extends Entity {
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
  status: string;

  @property({
    type: 'date',
    required: true,
  })
  rental_date: string;

  @property({
    type: 'string',
    required: true,
  })
  film_title: string;

  @property({
    type: 'string',
    required: true,
  })
  customer_email: string;

  @property({
    type: 'date',
    required: true,
  })
  return_date: string;

  @property({
    type: 'string',
  })
  staff_id?: string;

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
