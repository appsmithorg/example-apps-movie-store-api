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
import {SalesByStore} from '../models';
import {SalesByStoreRepository} from '../repositories';

@authenticate('jwt')
export class SalesByStoreController {
  constructor(
    @repository(SalesByStoreRepository)
    public salesByStoreRepository: SalesByStoreRepository,
  ) {}

  @post('/sales-by-stores')
  @response(200, {
    description: 'SalesByStore model instance',
    content: {'application/json': {schema: getModelSchemaRef(SalesByStore)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SalesByStore, {
            title: 'NewSalesByStore',
          }),
        },
      },
    })
    salesByStore: SalesByStore,
  ): Promise<SalesByStore> {
    return this.salesByStoreRepository.create(salesByStore);
  }

  @get('/sales-by-stores/count')
  @response(200, {
    description: 'SalesByStore model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SalesByStore) where?: Where<SalesByStore>,
  ): Promise<Count> {
    return this.salesByStoreRepository.count(where);
  }

  @get('/sales-by-stores')
  @response(200, {
    description: 'Array of SalesByStore model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SalesByStore, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SalesByStore) filter?: Filter<SalesByStore>,
  ): Promise<SalesByStore[]> {
    return this.salesByStoreRepository.find(filter);
  }

  @patch('/sales-by-stores')
  @response(200, {
    description: 'SalesByStore PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SalesByStore, {partial: true}),
        },
      },
    })
    salesByStore: SalesByStore,
    @param.where(SalesByStore) where?: Where<SalesByStore>,
  ): Promise<Count> {
    return this.salesByStoreRepository.updateAll(salesByStore, where);
  }

  @get('/sales-by-stores/{id}')
  @response(200, {
    description: 'SalesByStore model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SalesByStore, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SalesByStore, {exclude: 'where'})
    filter?: FilterExcludingWhere<SalesByStore>,
  ): Promise<SalesByStore> {
    return this.salesByStoreRepository.findById(id, filter);
  }

  @patch('/sales-by-stores/{id}')
  @response(204, {
    description: 'SalesByStore PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SalesByStore, {partial: true}),
        },
      },
    })
    salesByStore: SalesByStore,
  ): Promise<void> {
    await this.salesByStoreRepository.updateById(id, salesByStore);
  }

  @put('/sales-by-stores/{id}')
  @response(204, {
    description: 'SalesByStore PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() salesByStore: SalesByStore,
  ): Promise<void> {
    await this.salesByStoreRepository.replaceById(id, salesByStore);
  }

  @del('/sales-by-stores/{id}')
  @response(204, {
    description: 'SalesByStore DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.salesByStoreRepository.deleteById(id);
  }
}
