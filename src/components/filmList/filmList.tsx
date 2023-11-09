import { FilmInfo } from '../../types/filmsInfo';
import FilmCard from '../filmCard/filmCard';

type FilmListProps = {
  films: FilmInfo[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => <FilmCard key={film.id} name={film.name} img={film.img}/>)
      }
    </div>
  );
}

export default FilmList;
