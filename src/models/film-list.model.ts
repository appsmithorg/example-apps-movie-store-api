import {Entity, model, property} from '@loopback/repository';

@model()
export class FilmList extends Entity {
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
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  length: number;

  @property({
    type: 'string',
    required: true,
  })
  rating: string;

  @property({
    type: 'string',
    required: true,
  })
  actors: string;


  constructor(data?: Partial<FilmList>) {
    super(data);
  }
}

export interface FilmListRelations {
  // describe navigational properties here
}

export type FilmListWithRelations = FilmList & FilmListRelations;
