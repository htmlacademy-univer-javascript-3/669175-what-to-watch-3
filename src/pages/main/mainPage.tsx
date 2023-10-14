import FilmCard from '../../components/filmCard/filmCard';

type mainFilmDescription = {
  MainFilmName: string;
  MainFilmPic: string;
  MainFilmGenre: string;
  MainFilmBack: string;
  MainFilmYear: number;
}

type MainPageProps = {
  mainFilm: mainFilmDescription;
}

function MainPage({mainFilm}: MainPageProps) : JSX.Element {
  const {MainFilmPic, MainFilmBack, MainFilmName, MainFilmGenre, MainFilmYear} = mainFilm;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={MainFilmBack} alt={MainFilmName} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={MainFilmPic} alt={MainFilmName} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{MainFilmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{MainFilmGenre}</span>
                <span className="film-card__year">{MainFilmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlink:href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlink:href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard img="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" name="Fantastic Beasts: The Crimes of Grindelwald" />
            <FilmCard img="img/bohemian-rhapsody.jpg" name="Bohemian Rhapsody" />
            <FilmCard img="img/macbeth.jpg" name="Macbeth" />
            <FilmCard img="img/aviator.jpg" name="Aviator" />
            <FilmCard img="img/we-need-to-talk-about-kevin.jpg" name="We need to talk about Kevin" />
            <FilmCard img="img/what-we-do-in-the-shadows.jpg" name="What We Do in the Shadows" />
            <FilmCard img="img/revenant.jpg" name="Revenant" />
            <FilmCard img="img/johnny-english.jpg" name="Johnny English" />
            <FilmCard img="img/shutter-island.jpg" name="Shutter Island" />
            <FilmCard img="img/pulp-fiction.jpg" name="Pulp Fiction" />
            <FilmCard img="img/no-country-for-old-men.jpg" name="No Country for Old Men" />
            <FilmCard img="img/snatch.jpg" name="Snatch" />
            <FilmCard img="img/moonrise-kingdom.jpg" name="Moonrise Kingdom" />
            <FilmCard img="img/seven-years-in-tibet.jpg" name="Seven Years in Tibet" />
            <FilmCard img="img/midnight-special.jpg" name="Midnight Special" />
            <FilmCard img="img/war-of-the-worlds.jpg" name="War of the Worlds" />
            <FilmCard img="img/dardjeeling-limited.jpg" name="Dardjeeling Limited" />
            <FilmCard img="img/orlando.jpg" name="Orlando" />
            <FilmCard img="img/mindhunter.jpg" name="Mindhunter" />
            <FilmCard img="img/midnight-special.jpg" name="Midnight Special" />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
