import { Injectable } from '@nestjs/common';
import { Item, updateItem } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  async getAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async getOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id);
  }

  async create(item: Item): Promise<Item> {
    const createdItem = await this.itemModel.create(item);
    return createdItem;
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(item: updateItem, id: string): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
