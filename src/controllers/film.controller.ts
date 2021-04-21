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
import {Film} from '../models';
import {FilmRepository} from '../repositories';

export class FilmController {
  constructor(
    @repository(FilmRepository)
    public filmRepository : FilmRepository,
  ) {}

  @post('/films')
  @response(200, {
    description: 'Film model instance',
    content: {'application/json': {schema: getModelSchemaRef(Film)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Film, {
            title: 'NewFilm',
            exclude: ['id'],
          }),
        },
      },
    })
    film: Omit<Film, 'id'>,
  ): Promise<Film> {
    return this.filmRepository.create(film);
  }

  @get('/films/count')
  @response(200, {
    description: 'Film model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Film) where?: Where<Film>,
  ): Promise<Count> {
    return this.filmRepository.count(where);
  }

  @get('/films')
  @response(200, {
    description: 'Array of Film model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Film, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Film) filter?: Filter<Film>,
  ): Promise<Film[]> {
    return this.filmRepository.find(filter);
  }

  @patch('/films')
  @response(200, {
    description: 'Film PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Film, {partial: true}),
        },
      },
    })
    film: Film,
    @param.where(Film) where?: Where<Film>,
  ): Promise<Count> {
    return this.filmRepository.updateAll(film, where);
  }

  @get('/films/{id}')
  @response(200, {
    description: 'Film model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Film, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Film, {exclude: 'where'}) filter?: FilterExcludingWhere<Film>
  ): Promise<Film> {
    return this.filmRepository.findById(id, filter);
  }

  @patch('/films/{id}')
  @response(204, {
    description: 'Film PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Film, {partial: true}),
        },
      },
    })
    film: Film,
  ): Promise<void> {
    await this.filmRepository.updateById(id, film);
  }

  @put('/films/{id}')
  @response(204, {
    description: 'Film PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() film: Film,
  ): Promise<void> {
    await this.filmRepository.replaceById(id, film);
  }

  @del('/films/{id}')
  @response(204, {
    description: 'Film DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.filmRepository.deleteById(id);
  }
}
