import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {FilmList, FilmListRelations} from '../models';

export class FilmListRepository extends DefaultCrudRepository<
  FilmList,
  typeof FilmList.prototype.id,
  FilmListRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(FilmList, dataSource);
  }
}
