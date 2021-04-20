import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {FilmCategory, FilmCategoryRelations} from '../models';

export class FilmCategoryRepository extends DefaultCrudRepository<
  FilmCategory,
  typeof FilmCategory.prototype.id,
  FilmCategoryRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(FilmCategory, dataSource);
  }
}
