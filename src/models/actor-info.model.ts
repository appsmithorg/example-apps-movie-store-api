import {Entity, model, property} from '@loopback/repository';

@model()
export class ActorInfo extends Entity {
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
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
  })
  film_info?: string;


  constructor(data?: Partial<ActorInfo>) {
    super(data);
  }
}

export interface ActorInfoRelations {
  // describe navigational properties here
}

export type ActorInfoWithRelations = ActorInfo & ActorInfoRelations;
