import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Rental, RentalRelations} from '../models';

export class RentalRepository extends DefaultCrudRepository<
  Rental,
  typeof Rental.prototype.id,
  RentalRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Rental, dataSource);
  }
}
