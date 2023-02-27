import { AppService } from './app.service';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Ticket } from './ticket.entity';

@Controller('ticket')
export class AppController {
  constructor(
    private collectionRepository: AppService,
  ) { }

  /**
  * findAll returns all of the collection.
  * http://<url>/ticket
  * @returns {Array<Ticket>} Returns an array with all records.
  */
  @Get()
  async findAll(): Promise<Ticket[]> {
    return await this.collectionRepository.findAll();
  }

  /**
  * findOne returns one record from the collection.
  * http://<url>/ticket/:id
  * @param {number} id to match record.
  * @returns {Array<Ticket>} Returns singular record with id=id.
  */
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ticket> {
    return await this.collectionRepository.findOne(id);
  }

  @Post()
  async create(@Body() collection: Ticket): Promise<Ticket> {
    return await this.collectionRepository.create(collection);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() collection: Ticket): Promise<void> {
    await this.collectionRepository.update(id, collection);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.collectionRepository.delete(id);
  }
}