import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {SalesByFilmCategory, SalesByFilmCategoryRelations} from '../models';

export class SalesByFilmCategoryRepository extends DefaultCrudRepository<
  SalesByFilmCategory,
  typeof SalesByFilmCategory.prototype.category,
  SalesByFilmCategoryRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(SalesByFilmCategory, dataSource);
  }
}
