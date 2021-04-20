import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {NicerButSlowerFilmList, NicerButSlowerFilmListRelations} from '../models';

export class NicerButSlowerFilmListRepository extends DefaultCrudRepository<
  NicerButSlowerFilmList,
  typeof NicerButSlowerFilmList.prototype.id,
  NicerButSlowerFilmListRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(NicerButSlowerFilmList, dataSource);
  }
}
