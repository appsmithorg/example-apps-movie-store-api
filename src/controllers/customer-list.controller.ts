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
import {CustomerList} from '../models';
import {CustomerListRepository} from '../repositories';

@authenticate('jwt')
export class CustomerListController {
  constructor(
    @repository(CustomerListRepository)
    public customerListRepository: CustomerListRepository,
  ) {}

  @post('/customer-lists')
  @response(200, {
    description: 'CustomerList model instance',
    content: {'application/json': {schema: getModelSchemaRef(CustomerList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerList, {
            title: 'NewCustomerList',
            exclude: ['id'],
          }),
        },
      },
    })
    customerList: Omit<CustomerList, 'id'>,
  ): Promise<CustomerList> {
    return this.customerListRepository.create(customerList);
  }

  @get('/customer-lists/count')
  @response(200, {
    description: 'CustomerList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CustomerList) where?: Where<CustomerList>,
  ): Promise<Count> {
    return this.customerListRepository.count(where);
  }

  @get('/customer-lists')
  @response(200, {
    description: 'Array of CustomerList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CustomerList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CustomerList) filter?: Filter<CustomerList>,
  ): Promise<CustomerList[]> {
    return this.customerListRepository.find(filter);
  }

  @patch('/customer-lists')
  @response(200, {
    description: 'CustomerList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerList, {partial: true}),
        },
      },
    })
    customerList: CustomerList,
    @param.where(CustomerList) where?: Where<CustomerList>,
  ): Promise<Count> {
    return this.customerListRepository.updateAll(customerList, where);
  }

  @get('/customer-lists/{id}')
  @response(200, {
    description: 'CustomerList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CustomerList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CustomerList, {exclude: 'where'})
    filter?: FilterExcludingWhere<CustomerList>,
  ): Promise<CustomerList> {
    return this.customerListRepository.findById(id, filter);
  }

  @patch('/customer-lists/{id}')
  @response(204, {
    description: 'CustomerList PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerList, {partial: true}),
        },
      },
    })
    customerList: CustomerList,
  ): Promise<void> {
    await this.customerListRepository.updateById(id, customerList);
  }

  @put('/customer-lists/{id}')
  @response(204, {
    description: 'CustomerList PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() customerList: CustomerList,
  ): Promise<void> {
    await this.customerListRepository.replaceById(id, customerList);
  }

  @del('/customer-lists/{id}')
  @response(204, {
    description: 'CustomerList DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.customerListRepository.deleteById(id);
  }
}
