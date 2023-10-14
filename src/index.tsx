import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const AppProps = {
  MainFilmName: 'The Grand Budapest Hotel',
  MainFilmPic: 'img/the-grand-budapest-hotel-poster.jpg',
  MainFilmGenre: 'Drama',
  MainFilmBack: 'img/bg-the-grand-budapest-hotel.jpg',
  MainFilmYear: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mainFilm={AppProps} />
  </React.StrictMode>
);
