import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {ActorInfo, ActorInfoRelations} from '../models';

export class ActorInfoRepository extends DefaultCrudRepository<
  ActorInfo,
  typeof ActorInfo.prototype.id,
  ActorInfoRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ActorInfo, dataSource);
  }
}
