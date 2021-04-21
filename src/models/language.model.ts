import {Entity, model, property} from '@loopback/repository';

@model()
export class Language extends Entity {
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
    type: 'date',
    defaultFn: 'now',
  })
  last_update?: string;

  constructor(data?: Partial<Language>) {
    super(data);
  }
}

export interface LanguageRelations {
  // describe navigational properties here
}

export type LanguageWithRelations = Language & LanguageRelations;
