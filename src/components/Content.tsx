import { MovieCard } from "./MovieCard";
import "../styles/content.scss";
import { GenreResponseProps, MovieProps } from "../App";

type propsDTO = {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
};

export function Content({ selectedGenre, movies }: propsDTO) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie: any) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
