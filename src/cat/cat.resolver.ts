import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
// import { Cat } from './models/cat.model.tsasdf';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { CatInput } from './models/cat-input.model';

@Resolver('Cat')
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query('findOne')
  async findOne(@Args('id') id: string): Promise<CatDto> {
    const res = await this.catService.findOne(id);
    console.log('⚡⚡⚡: -------------------------------------------');
    console.log('⚡⚡⚡: CatResolver -> constructor -> res', res);
    console.log('⚡⚡⚡: -------------------------------------------');
    
    return this.catService.findOne(id);
  }

  @Query('findAll')
  findAll(): Promise<CatDto[]> {
    return this.catService.findAll();
  }

  @Mutation('create')
  create(@Args('input') input: CatInput): Promise<CatDto> {
    return this.catService.create(input);
  }

  @Mutation('update')
  update(
    @Args('id') id: string,
    @Args('input') input: CatInput,
  ): Promise<CatDto> {
    return this.catService.update(id, input);
  }

  @Mutation('remove')
  remove(@Args('id') id: string): Promise<CatDto> {
    return this.catService.delete(id);
  }
}
