import { useState } from 'react';
import { FilmInfo } from '../../types/filmsInfo';
import FilmCard from '../filmCard/filmCard';

type FilmListProps = {
  films: FilmInfo[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [hoverFilm, setHoverFilm] = useState(0);

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => <FilmCard key={film.id} film={film}/>)
      }
    </div>
  );
}

export default FilmList;
