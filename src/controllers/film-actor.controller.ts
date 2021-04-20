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
import {FilmActor} from '../models';
import {FilmActorRepository} from '../repositories';

export class FilmActorController {
  constructor(
    @repository(FilmActorRepository)
    public filmActorRepository : FilmActorRepository,
  ) {}

  @post('/film-actors')
  @response(200, {
    description: 'FilmActor model instance',
    content: {'application/json': {schema: getModelSchemaRef(FilmActor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmActor, {
            title: 'NewFilmActor',
            exclude: ['id'],
          }),
        },
      },
    })
    filmActor: Omit<FilmActor, 'id'>,
  ): Promise<FilmActor> {
    return this.filmActorRepository.create(filmActor);
  }

  @get('/film-actors/count')
  @response(200, {
    description: 'FilmActor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FilmActor) where?: Where<FilmActor>,
  ): Promise<Count> {
    return this.filmActorRepository.count(where);
  }

  @get('/film-actors')
  @response(200, {
    description: 'Array of FilmActor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FilmActor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FilmActor) filter?: Filter<FilmActor>,
  ): Promise<FilmActor[]> {
    return this.filmActorRepository.find(filter);
  }

  @patch('/film-actors')
  @response(200, {
    description: 'FilmActor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmActor, {partial: true}),
        },
      },
    })
    filmActor: FilmActor,
    @param.where(FilmActor) where?: Where<FilmActor>,
  ): Promise<Count> {
    return this.filmActorRepository.updateAll(filmActor, where);
  }

  @get('/film-actors/{id}')
  @response(200, {
    description: 'FilmActor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FilmActor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FilmActor, {exclude: 'where'}) filter?: FilterExcludingWhere<FilmActor>
  ): Promise<FilmActor> {
    return this.filmActorRepository.findById(id, filter);
  }

  @patch('/film-actors/{id}')
  @response(204, {
    description: 'FilmActor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmActor, {partial: true}),
        },
      },
    })
    filmActor: FilmActor,
  ): Promise<void> {
    await this.filmActorRepository.updateById(id, filmActor);
  }

  @put('/film-actors/{id}')
  @response(204, {
    description: 'FilmActor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() filmActor: FilmActor,
  ): Promise<void> {
    await this.filmActorRepository.replaceById(id, filmActor);
  }

  @del('/film-actors/{id}')
  @response(204, {
    description: 'FilmActor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.filmActorRepository.deleteById(id);
  }
}
