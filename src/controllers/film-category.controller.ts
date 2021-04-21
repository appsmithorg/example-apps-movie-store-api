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
import {FilmCategory} from '../models';
import {FilmCategoryRepository} from '../repositories';

@authenticate('jwt')
export class FilmCategoryController {
  constructor(
    @repository(FilmCategoryRepository)
    public filmCategoryRepository: FilmCategoryRepository,
  ) {}

  @post('/film-categories')
  @response(200, {
    description: 'FilmCategory model instance',
    content: {'application/json': {schema: getModelSchemaRef(FilmCategory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmCategory, {
            title: 'NewFilmCategory',
            exclude: ['id'],
          }),
        },
      },
    })
    filmCategory: Omit<FilmCategory, 'id'>,
  ): Promise<FilmCategory> {
    return this.filmCategoryRepository.create(filmCategory);
  }

  @get('/film-categories/count')
  @response(200, {
    description: 'FilmCategory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FilmCategory) where?: Where<FilmCategory>,
  ): Promise<Count> {
    return this.filmCategoryRepository.count(where);
  }

  @get('/film-categories')
  @response(200, {
    description: 'Array of FilmCategory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FilmCategory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FilmCategory) filter?: Filter<FilmCategory>,
  ): Promise<FilmCategory[]> {
    return this.filmCategoryRepository.find(filter);
  }

  @patch('/film-categories')
  @response(200, {
    description: 'FilmCategory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmCategory, {partial: true}),
        },
      },
    })
    filmCategory: FilmCategory,
    @param.where(FilmCategory) where?: Where<FilmCategory>,
  ): Promise<Count> {
    return this.filmCategoryRepository.updateAll(filmCategory, where);
  }

  @get('/film-categories/{id}')
  @response(200, {
    description: 'FilmCategory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FilmCategory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FilmCategory, {exclude: 'where'})
    filter?: FilterExcludingWhere<FilmCategory>,
  ): Promise<FilmCategory> {
    return this.filmCategoryRepository.findById(id, filter);
  }

  @patch('/film-categories/{id}')
  @response(204, {
    description: 'FilmCategory PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmCategory, {partial: true}),
        },
      },
    })
    filmCategory: FilmCategory,
  ): Promise<void> {
    await this.filmCategoryRepository.updateById(id, filmCategory);
  }

  @put('/film-categories/{id}')
  @response(204, {
    description: 'FilmCategory PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() filmCategory: FilmCategory,
  ): Promise<void> {
    await this.filmCategoryRepository.replaceById(id, filmCategory);
  }

  @del('/film-categories/{id}')
  @response(204, {
    description: 'FilmCategory DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.filmCategoryRepository.deleteById(id);
  }
}
