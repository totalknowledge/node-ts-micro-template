import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Ticket)
    private collectionRepository: Repository<Ticket>,
  ) { }

  async findAll(): Promise<Ticket[]> {
    return await this.collectionRepository.find();
  }

  async findOne(id: number): Promise<Ticket> {
    return await this.collectionRepository.findOne({ where: { id: id } });
  }

  async create(record: Ticket): Promise<Ticket> {
    return await this.collectionRepository.save(record);
  }

  async update(id: number, partialRecord: Partial<Ticket>): Promise<Ticket> {
    const record = await this.findOne(id);
    Object.assign(record, partialRecord);
    return await this.collectionRepository.save(record);
  }

  async delete(id: number): Promise<void> {
    await this.collectionRepository.delete(id);
  }
}