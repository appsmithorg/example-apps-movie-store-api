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
import {StaffList} from '../models';
import {StaffListRepository} from '../repositories';

@authenticate('jwt')
export class StaffListController {
  constructor(
    @repository(StaffListRepository)
    public staffListRepository: StaffListRepository,
  ) {}

  @post('/staff-lists')
  @response(200, {
    description: 'StaffList model instance',
    content: {'application/json': {schema: getModelSchemaRef(StaffList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StaffList, {
            title: 'NewStaffList',
            exclude: ['id'],
          }),
        },
      },
    })
    staffList: Omit<StaffList, 'id'>,
  ): Promise<StaffList> {
    return this.staffListRepository.create(staffList);
  }

  @get('/staff-lists/count')
  @response(200, {
    description: 'StaffList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(StaffList) where?: Where<StaffList>,
  ): Promise<Count> {
    return this.staffListRepository.count(where);
  }

  @get('/staff-lists')
  @response(200, {
    description: 'Array of StaffList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(StaffList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(StaffList) filter?: Filter<StaffList>,
  ): Promise<StaffList[]> {
    return this.staffListRepository.find(filter);
  }

  @patch('/staff-lists')
  @response(200, {
    description: 'StaffList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StaffList, {partial: true}),
        },
      },
    })
    staffList: StaffList,
    @param.where(StaffList) where?: Where<StaffList>,
  ): Promise<Count> {
    return this.staffListRepository.updateAll(staffList, where);
  }

  @get('/staff-lists/{id}')
  @response(200, {
    description: 'StaffList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(StaffList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(StaffList, {exclude: 'where'})
    filter?: FilterExcludingWhere<StaffList>,
  ): Promise<StaffList> {
    return this.staffListRepository.findById(id, filter);
  }

  @patch('/staff-lists/{id}')
  @response(204, {
    description: 'StaffList PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StaffList, {partial: true}),
        },
      },
    })
    staffList: StaffList,
  ): Promise<void> {
    await this.staffListRepository.updateById(id, staffList);
  }

  @put('/staff-lists/{id}')
  @response(204, {
    description: 'StaffList PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() staffList: StaffList,
  ): Promise<void> {
    await this.staffListRepository.replaceById(id, staffList);
  }

  @del('/staff-lists/{id}')
  @response(204, {
    description: 'StaffList DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.staffListRepository.deleteById(id);
  }
}
