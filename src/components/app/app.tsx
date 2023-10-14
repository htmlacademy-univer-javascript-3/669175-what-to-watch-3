import MainPage from '../../pages/main/mainPage';

type mainFilmDescription = {
  MainFilmName: string;
  MainFilmPic: string;
  MainFilmGenre: string;
  MainFilmBack: string;
  MainFilmYear: number;
}

type AppProps = {
  mainFilm: mainFilmDescription;
}

function App({mainFilm}: AppProps) : JSX.Element{
  return (
    <MainPage mainFilm={mainFilm}/>
  );
}

export default App;
