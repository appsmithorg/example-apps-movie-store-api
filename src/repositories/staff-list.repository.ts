import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {StaffList, StaffListRelations} from '../models';

export class StaffListRepository extends DefaultCrudRepository<
  StaffList,
  typeof StaffList.prototype.id,
  StaffListRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(StaffList, dataSource);
  }
}
