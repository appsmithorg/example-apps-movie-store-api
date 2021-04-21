import {Entity, model, property} from '@loopback/repository';

@model()
export class StaffList extends Entity {
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
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country?: string;

  @property({
    type: 'string',
  })
  sid?: string;

  constructor(data?: Partial<StaffList>) {
    super(data);
  }
}

export interface StaffListRelations {
  // describe navigational properties here
}

export type StaffListWithRelations = StaffList & StaffListRelations;
