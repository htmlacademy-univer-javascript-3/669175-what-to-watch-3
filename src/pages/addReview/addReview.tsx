import { Helmet } from 'react-helmet-async';
import { FilmInfo } from '../../types/filmsInfo';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FilmParams } from '../../types/filmParams';
import { AppRoutes } from '../../const';
import ReviewForm from '../../components/reviewForm/reviewForm';

type AddReviewPageProps = {
  films: FilmInfo[];
}

function AddReviewPage({films}: AddReviewPageProps): JSX.Element {
  const params = useParams<FilmParams>();
  const filmId = params.id ? +params.id : -1;
  const currentFilm = films.filter((film) => film.id === filmId)[0];

  if (!currentFilm) {
    return (
      <Navigate to={AppRoutes.NotFound} />
    );
  }

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Написать отзыв</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.back} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.img} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default AddReviewPage;
