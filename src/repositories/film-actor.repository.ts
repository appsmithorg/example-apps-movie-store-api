import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {FilmActor, FilmActorRelations} from '../models';

export class FilmActorRepository extends DefaultCrudRepository<
  FilmActor,
  typeof FilmActor.prototype.id,
  FilmActorRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(FilmActor, dataSource);
  }
}
