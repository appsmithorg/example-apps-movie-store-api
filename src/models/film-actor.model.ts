import {Entity, model, property} from '@loopback/repository';

@model()
export class FilmActor extends Entity {
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
  film_id: string;

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
