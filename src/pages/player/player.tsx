import { Helmet } from 'react-helmet-async';
import { FilmInfo } from '../../types/filmsInfo';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FilmParams } from '../../types/filmParams';

type PlayerPageProps = {
  films: FilmInfo[];
}

function PlayerPage({films}: PlayerPageProps): JSX.Element {
  const params = useParams<FilmParams>();
  const filmId = params.id ? +params.id : -1;
  const currentFilm = films.filter((film) => film.id === filmId)[0];

  if (!currentFilm) {
    return (
      <Navigate to={AppRoutes.NotFound} />
    );
  }

  return (
    <div className="player">
      <Helmet>
        <title>Смотрим фильм</title>
      </Helmet>
      <video src="#" className="player__video" poster={currentFilm.playerPoster}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{'left' : 'left: 30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{currentFilm.time}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
