import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Staff, StaffRelations} from '../models';

export class StaffRepository extends DefaultCrudRepository<
  Staff,
  typeof Staff.prototype.id,
  StaffRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Staff, dataSource);
  }
}
