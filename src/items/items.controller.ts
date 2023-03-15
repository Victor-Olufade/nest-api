import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { updateItem } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  getAll(): Promise<Item[]> {
    return this.itemsService.getAll();
  }

  @Get(':id')
  getOne(@Param() param): Promise<Item> {
    return this.itemsService.getOne(param.id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: updateItem) {
    return this.itemsService.update(updateItemDto, id);
  }
}
