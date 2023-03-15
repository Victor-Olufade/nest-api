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

@Controller('items')
export class ItemsController {
  @Get()
  getAll(): string {
    return 'get all items';
  }

  @Get(':id')
  getOne(@Param() param): string {
    return `${param.id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto) {
    return `${updateItemDto.name}-${id}`;
  }
}
