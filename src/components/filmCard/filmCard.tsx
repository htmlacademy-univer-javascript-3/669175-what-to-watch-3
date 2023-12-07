import { Link } from 'react-router-dom';
import { FilmInfo } from '../../types/filmsInfo';

type FilmCardInfo = {
  key: number;
  film: FilmInfo;
};

function FilmCard({key, film}: FilmCardInfo) : JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" key={key}>
      <div className="small-film-card__image">
        <img src={film.img} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
