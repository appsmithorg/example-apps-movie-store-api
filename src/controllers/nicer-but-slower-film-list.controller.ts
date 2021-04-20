import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {NicerButSlowerFilmList} from '../models';
import {NicerButSlowerFilmListRepository} from '../repositories';

export class NicerButSlowerFilmListController {
  constructor(
    @repository(NicerButSlowerFilmListRepository)
    public nicerButSlowerFilmListRepository : NicerButSlowerFilmListRepository,
  ) {}

  @post('/nicer-but-slower-film-lists')
  @response(200, {
    description: 'NicerButSlowerFilmList model instance',
    content: {'application/json': {schema: getModelSchemaRef(NicerButSlowerFilmList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NicerButSlowerFilmList, {
            title: 'NewNicerButSlowerFilmList',
            exclude: ['id'],
          }),
        },
      },
    })
    nicerButSlowerFilmList: Omit<NicerButSlowerFilmList, 'id'>,
  ): Promise<NicerButSlowerFilmList> {
    return this.nicerButSlowerFilmListRepository.create(nicerButSlowerFilmList);
  }

  @get('/nicer-but-slower-film-lists/count')
  @response(200, {
    description: 'NicerButSlowerFilmList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(NicerButSlowerFilmList) where?: Where<NicerButSlowerFilmList>,
  ): Promise<Count> {
    return this.nicerButSlowerFilmListRepository.count(where);
  }

  @get('/nicer-but-slower-film-lists')
  @response(200, {
    description: 'Array of NicerButSlowerFilmList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(NicerButSlowerFilmList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(NicerButSlowerFilmList) filter?: Filter<NicerButSlowerFilmList>,
  ): Promise<NicerButSlowerFilmList[]> {
    return this.nicerButSlowerFilmListRepository.find(filter);
  }

  @patch('/nicer-but-slower-film-lists')
  @response(200, {
    description: 'NicerButSlowerFilmList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NicerButSlowerFilmList, {partial: true}),
        },
      },
    })
    nicerButSlowerFilmList: NicerButSlowerFilmList,
    @param.where(NicerButSlowerFilmList) where?: Where<NicerButSlowerFilmList>,
  ): Promise<Count> {
    return this.nicerButSlowerFilmListRepository.updateAll(nicerButSlowerFilmList, where);
  }

  @get('/nicer-but-slower-film-lists/{id}')
  @response(200, {
    description: 'NicerButSlowerFilmList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(NicerButSlowerFilmList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(NicerButSlowerFilmList, {exclude: 'where'}) filter?: FilterExcludingWhere<NicerButSlowerFilmList>
  ): Promise<NicerButSlowerFilmList> {
    return this.nicerButSlowerFilmListRepository.findById(id, filter);
  }

  @patch('/nicer-but-slower-film-lists/{id}')
  @response(204, {
    description: 'NicerButSlowerFilmList PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NicerButSlowerFilmList, {partial: true}),
        },
      },
    })
    nicerButSlowerFilmList: NicerButSlowerFilmList,
  ): Promise<void> {
    await this.nicerButSlowerFilmListRepository.updateById(id, nicerButSlowerFilmList);
  }

  @put('/nicer-but-slower-film-lists/{id}')
  @response(204, {
    description: 'NicerButSlowerFilmList PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nicerButSlowerFilmList: NicerButSlowerFilmList,
  ): Promise<void> {
    await this.nicerButSlowerFilmListRepository.replaceById(id, nicerButSlowerFilmList);
  }

  @del('/nicer-but-slower-film-lists/{id}')
  @response(204, {
    description: 'NicerButSlowerFilmList DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nicerButSlowerFilmListRepository.deleteById(id);
  }
}
