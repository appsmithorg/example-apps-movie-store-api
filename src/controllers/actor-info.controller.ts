import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {ActorInfo} from '../models';
import {ActorInfoRepository} from '../repositories';

@authenticate('jwt')
export class ActorInfoController {
  constructor(
    @repository(ActorInfoRepository)
    public actorInfoRepository: ActorInfoRepository,
  ) {}

  @post('/actor-infos')
  @response(200, {
    description: 'ActorInfo model instance',
    content: {'application/json': {schema: getModelSchemaRef(ActorInfo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActorInfo, {
            title: 'NewActorInfo',
            exclude: ['id'],
          }),
        },
      },
    })
    actorInfo: Omit<ActorInfo, 'id'>,
  ): Promise<ActorInfo> {
    return this.actorInfoRepository.create(actorInfo);
  }

  @get('/actor-infos/count')
  @response(200, {
    description: 'ActorInfo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ActorInfo) where?: Where<ActorInfo>,
  ): Promise<Count> {
    return this.actorInfoRepository.count(where);
  }

  @get('/actor-infos')
  @response(200, {
    description: 'Array of ActorInfo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ActorInfo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ActorInfo) filter?: Filter<ActorInfo>,
  ): Promise<ActorInfo[]> {
    return this.actorInfoRepository.find(filter);
  }

  @patch('/actor-infos')
  @response(200, {
    description: 'ActorInfo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActorInfo, {partial: true}),
        },
      },
    })
    actorInfo: ActorInfo,
    @param.where(ActorInfo) where?: Where<ActorInfo>,
  ): Promise<Count> {
    return this.actorInfoRepository.updateAll(actorInfo, where);
  }

  @get('/actor-infos/{id}')
  @response(200, {
    description: 'ActorInfo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ActorInfo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ActorInfo, {exclude: 'where'})
    filter?: FilterExcludingWhere<ActorInfo>,
  ): Promise<ActorInfo> {
    return this.actorInfoRepository.findById(id, filter);
  }

  @patch('/actor-infos/{id}')
  @response(204, {
    description: 'ActorInfo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActorInfo, {partial: true}),
        },
      },
    })
    actorInfo: ActorInfo,
  ): Promise<void> {
    await this.actorInfoRepository.updateById(id, actorInfo);
  }

  @put('/actor-infos/{id}')
  @response(204, {
    description: 'ActorInfo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() actorInfo: ActorInfo,
  ): Promise<void> {
    await this.actorInfoRepository.replaceById(id, actorInfo);
  }

  @del('/actor-infos/{id}')
  @response(204, {
    description: 'ActorInfo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.actorInfoRepository.deleteById(id);
  }
}
