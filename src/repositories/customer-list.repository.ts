import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {CustomerList, CustomerListRelations} from '../models';

export class CustomerListRepository extends DefaultCrudRepository<
  CustomerList,
  typeof CustomerList.prototype.id,
  CustomerListRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(CustomerList, dataSource);
  }
}
