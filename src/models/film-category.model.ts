import {Entity, model, property} from '@loopback/repository';

@model()
export class FilmCategory extends Entity {
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
  category_id: number;

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
