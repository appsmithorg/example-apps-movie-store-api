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
import {Language} from '../models';
import {LanguageRepository} from '../repositories';

export class LanguageController {
  constructor(
    @repository(LanguageRepository)
    public languageRepository : LanguageRepository,
  ) {}

  @post('/languages')
  @response(200, {
    description: 'Language model instance',
    content: {'application/json': {schema: getModelSchemaRef(Language)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Language, {
            title: 'NewLanguage',
            exclude: ['id'],
          }),
        },
      },
    })
    language: Omit<Language, 'id'>,
  ): Promise<Language> {
    return this.languageRepository.create(language);
  }

  @get('/languages/count')
  @response(200, {
    description: 'Language model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Language) where?: Where<Language>,
  ): Promise<Count> {
    return this.languageRepository.count(where);
  }

  @get('/languages')
  @response(200, {
    description: 'Array of Language model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Language, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Language) filter?: Filter<Language>,
  ): Promise<Language[]> {
    return this.languageRepository.find(filter);
  }

  @patch('/languages')
  @response(200, {
    description: 'Language PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Language, {partial: true}),
        },
      },
    })
    language: Language,
    @param.where(Language) where?: Where<Language>,
  ): Promise<Count> {
    return this.languageRepository.updateAll(language, where);
  }

  @get('/languages/{id}')
  @response(200, {
    description: 'Language model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Language, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Language, {exclude: 'where'}) filter?: FilterExcludingWhere<Language>
  ): Promise<Language> {
    return this.languageRepository.findById(id, filter);
  }

  @patch('/languages/{id}')
  @response(204, {
    description: 'Language PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Language, {partial: true}),
        },
      },
    })
    language: Language,
  ): Promise<void> {
    await this.languageRepository.updateById(id, language);
  }

  @put('/languages/{id}')
  @response(204, {
    description: 'Language PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() language: Language,
  ): Promise<void> {
    await this.languageRepository.replaceById(id, language);
  }

  @del('/languages/{id}')
  @response(204, {
    description: 'Language DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.languageRepository.deleteById(id);
  }
}
