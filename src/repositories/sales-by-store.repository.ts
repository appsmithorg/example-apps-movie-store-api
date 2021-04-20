import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {SalesByStore, SalesByStoreRelations} from '../models';

export class SalesByStoreRepository extends DefaultCrudRepository<
  SalesByStore,
  typeof SalesByStore.prototype.store,
  SalesByStoreRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(SalesByStore, dataSource);
  }
}
