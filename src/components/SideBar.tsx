import { Button } from "./Button";
import "../styles/sidebar.scss";
import { GenreResponseProps } from "../App";

type propsDTO = {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: Number;
};

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId,
}: propsDTO) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
