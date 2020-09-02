import { Controller } from '@nestjs/common';

// @ symbols inside of Typescript files are decorators
// Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).
@Controller('items')
export class ItemsController {}
