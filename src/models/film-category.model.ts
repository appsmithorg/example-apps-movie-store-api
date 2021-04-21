import {Entity, model, property} from '@loopback/repository';

@model()
export class FilmCategory extends Entity {
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
  category_id: string;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  constructor(data?: Partial<FilmCategory>) {
    super(data);
  }
}

export interface FilmCategoryRelations {
  // describe navigational properties here
}

export type FilmCategoryWithRelations = FilmCategory & FilmCategoryRelations;
