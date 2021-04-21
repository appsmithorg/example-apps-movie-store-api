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
import {SalesByFilmCategory} from '../models';
import {SalesByFilmCategoryRepository} from '../repositories';

@authenticate('jwt')
export class SalesByFilmCategoryController {
  constructor(
    @repository(SalesByFilmCategoryRepository)
    public salesByFilmCategoryRepository: SalesByFilmCategoryRepository,
  ) {}

  @post('/sales-by-film-categories')
  @response(200, {
    description: 'SalesByFilmCategory model instance',
    content: {
      'application/json': {schema: getModelSchemaRef(SalesByFilmCategory)},
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SalesByFilmCategory, {
            title: 'NewSalesByFilmCategory',
          }),
        },
      },
    })
    salesByFilmCategory: SalesByFilmCategory,
  ): Promise<SalesByFilmCategory> {
    return this.salesByFilmCategoryRepository.create(salesByFilmCategory);
  }

  @get('/sales-by-film-categories/count')
  @response(200, {
    description: 'SalesByFilmCategory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SalesByFilmCategory) where?: Where<SalesByFilmCategory>,
  ): Promise<Count> {
    return this.salesByFilmCategoryRepository.count(where);
  }

  @get('/sales-by-film-categories')
  @response(200, {
    description: 'Array of SalesByFilmCategory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SalesByFilmCategory, {
            includeRelations: true,
          }),
        },
      },
    },
  })
  async find(
    @param.filter(SalesByFilmCategory) filter?: Filter<SalesByFilmCategory>,
  ): Promise<SalesByFilmCategory[]> {
    return this.salesByFilmCategoryRepository.find(filter);
  }

  @patch('/sales-by-film-categories')
  @response(200, {
    description: 'SalesByFilmCategory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SalesByFilmCategory, {partial: true}),
        },
      },
    })
    salesByFilmCategory: SalesByFilmCategory,
    @param.where(SalesByFilmCategory) where?: Where<SalesByFilmCategory>,
  ): Promise<Count> {
    return this.salesByFilmCategoryRepository.updateAll(
      salesByFilmCategory,
      where,
    );
  }

  @get('/sales-by-film-categories/{id}')
  @response(200, {
    description: 'SalesByFilmCategory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SalesByFilmCategory, {
          includeRelations: true,
        }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SalesByFilmCategory, {exclude: 'where'})
    filter?: FilterExcludingWhere<SalesByFilmCategory>,
  ): Promise<SalesByFilmCategory> {
    return this.salesByFilmCategoryRepository.findById(id, filter);
  }

  @patch('/sales-by-film-categories/{id}')
  @response(204, {
    description: 'SalesByFilmCategory PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SalesByFilmCategory, {partial: true}),
        },
      },
    })
    salesByFilmCategory: SalesByFilmCategory,
  ): Promise<void> {
    await this.salesByFilmCategoryRepository.updateById(
      id,
      salesByFilmCategory,
    );
  }

  @put('/sales-by-film-categories/{id}')
  @response(204, {
    description: 'SalesByFilmCategory PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() salesByFilmCategory: SalesByFilmCategory,
  ): Promise<void> {
    await this.salesByFilmCategoryRepository.replaceById(
      id,
      salesByFilmCategory,
    );
  }

  @del('/sales-by-film-categories/{id}')
  @response(204, {
    description: 'SalesByFilmCategory DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.salesByFilmCategoryRepository.deleteById(id);
  }
}
