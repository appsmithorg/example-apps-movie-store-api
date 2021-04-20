import {Entity, model, property} from '@loopback/repository';

@model()
export class SalesByFilmCategory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  category: string;

  @property({
    type: 'number',
    required: true,
  })
  total_sales: number;


  constructor(data?: Partial<SalesByFilmCategory>) {
    super(data);
  }
}

export interface SalesByFilmCategoryRelations {
  // describe navigational properties here
}

export type SalesByFilmCategoryWithRelations = SalesByFilmCategory & SalesByFilmCategoryRelations;
