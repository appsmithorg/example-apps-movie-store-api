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
import {FilmList} from '../models';
import {FilmListRepository} from '../repositories';

export class FilmListController {
  constructor(
    @repository(FilmListRepository)
    public filmListRepository : FilmListRepository,
  ) {}

  @post('/film-lists')
  @response(200, {
    description: 'FilmList model instance',
    content: {'application/json': {schema: getModelSchemaRef(FilmList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmList, {
            title: 'NewFilmList',
            exclude: ['id'],
          }),
        },
      },
    })
    filmList: Omit<FilmList, 'id'>,
  ): Promise<FilmList> {
    return this.filmListRepository.create(filmList);
  }

  @get('/film-lists/count')
  @response(200, {
    description: 'FilmList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FilmList) where?: Where<FilmList>,
  ): Promise<Count> {
    return this.filmListRepository.count(where);
  }

  @get('/film-lists')
  @response(200, {
    description: 'Array of FilmList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FilmList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FilmList) filter?: Filter<FilmList>,
  ): Promise<FilmList[]> {
    return this.filmListRepository.find(filter);
  }

  @patch('/film-lists')
  @response(200, {
    description: 'FilmList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmList, {partial: true}),
        },
      },
    })
    filmList: FilmList,
    @param.where(FilmList) where?: Where<FilmList>,
  ): Promise<Count> {
    return this.filmListRepository.updateAll(filmList, where);
  }

  @get('/film-lists/{id}')
  @response(200, {
    description: 'FilmList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FilmList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FilmList, {exclude: 'where'}) filter?: FilterExcludingWhere<FilmList>
  ): Promise<FilmList> {
    return this.filmListRepository.findById(id, filter);
  }

  @patch('/film-lists/{id}')
  @response(204, {
    description: 'FilmList PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmList, {partial: true}),
        },
      },
    })
    filmList: FilmList,
  ): Promise<void> {
    await this.filmListRepository.updateById(id, filmList);
  }

  @put('/film-lists/{id}')
  @response(204, {
    description: 'FilmList PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() filmList: FilmList,
  ): Promise<void> {
    await this.filmListRepository.replaceById(id, filmList);
  }

  @del('/film-lists/{id}')
  @response(204, {
    description: 'FilmList DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.filmListRepository.deleteById(id);
  }
}
