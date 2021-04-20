import {Entity, model, property} from '@loopback/repository';

@model()
export class Film extends Entity {
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
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  release_year: number;

  @property({
    type: 'number',
    required: true,
  })
  language_id: number;

  @property({
    type: 'number',
    required: true,
  })
  rental_duration: number;

  @property({
    type: 'number',
    required: true,
  })
  rental_rate: number;

  @property({
    type: 'number',
    required: true,
  })
  length: number;

  @property({
    type: 'number',
    required: true,
  })
  replacement_cost: number;

  @property({
    type: 'string',
    required: true,
  })
  rating: string;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  special_features?: string[];

  @property({
    type: 'object',
  })
  fulltext?: object;

  constructor(data?: Partial<Film>) {
    super(data);
  }
}

export interface FilmRelations {
  // describe navigational properties here
}

export type FilmWithRelations = Film & FilmRelations;
