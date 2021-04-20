import {Entity, model, property} from '@loopback/repository';

@model()
export class FilmActor extends Entity {
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
  film_id: number;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  constructor(data?: Partial<FilmActor>) {
    super(data);
  }
}

export interface FilmActorRelations {
  // describe navigational properties here
}

export type FilmActorWithRelations = FilmActor & FilmActorRelations;
