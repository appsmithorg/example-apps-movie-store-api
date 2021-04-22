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
import {Rental} from '../models';
import {RentalRepository} from '../repositories';

@authenticate('jwt')
export class RentalController {
  constructor(
    @repository(RentalRepository)
    public rentalRepository: RentalRepository,
  ) {}

  @post('/rentals')
  @response(200, {
    description: 'Rental model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rental)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {
            title: 'NewRental',
            exclude: ['id'],
          }),
        },
      },
    })
    rental: Omit<Rental, 'id'>,
  ): Promise<Rental> {
    return this.rentalRepository.create(rental);
  }

  @get('/rentals/count')
  @response(200, {
    description: 'Rental model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Rental) where?: Where<Rental>): Promise<Count> {
    return this.rentalRepository.count(where);
  }

  @get('/rentals')
  @response(200, {
    description: 'Array of Rental model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rental, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Rental) filter?: Filter<Rental>): Promise<Rental[]> {
    return this.rentalRepository.find(filter);
  }

  @patch('/rentals')
  @response(200, {
    description: 'Rental PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {partial: true}),
        },
      },
    })
    rental: Rental,
    @param.where(Rental) where?: Where<Rental>,
  ): Promise<Count> {
    return this.rentalRepository.updateAll(rental, where);
  }

  @get('/rentals/{id}')
  @response(200, {
    description: 'Rental model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rental, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rental, {exclude: 'where'})
    filter?: FilterExcludingWhere<Rental>,
  ): Promise<Rental> {
    return this.rentalRepository.findById(id, filter);
  }

  @patch('/rentals/{id}')
  @response(204, {
    description: 'Rental PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {partial: true}),
        },
      },
    })
    rental: Rental,
  ): Promise<void> {
    await this.rentalRepository.updateById(id, rental);
  }

  @put('/rentals/{id}')
  @response(204, {
    description: 'Rental PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rental: Rental,
  ): Promise<void> {
    await this.rentalRepository.replaceById(id, rental);
  }

  @del('/rentals/{id}')
  @response(204, {
    description: 'Rental DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rentalRepository.deleteById(id);
  }
}
