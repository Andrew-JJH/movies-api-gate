import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { MovieDto } from './dto/movie.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOkResponse({ type: MovieDto, isArray: true })
  async getMovies(): Promise<Movie[]> {
    return this.moviesService.listMovies();
  }
}
