import MainPage from '../../pages/main/mainPage';
import SignInPage from '../../pages/singIn/signInPage';
import MyListPage from '../../pages/myList/myList';
import FilmPage from '../../pages/film/film';
import AddReviewPage from '../../pages/addReview/addReview';
import PlayerPage from '../../pages/player/player';
import NotFoundPage from '../../pages/notFoundPage/notFoundPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import PrivateRouteControl from '../privateRoute/privateRoute';
import { HelmetProvider } from 'react-helmet-async';
import { FilmInfo } from '../../types/filmsInfo';


type AppProps = {
  mainFilmId: number;
  filmList: FilmInfo[];
}

function App({mainFilmId, filmList}: AppProps) : JSX.Element{
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainPage mainFilmId={mainFilmId} filmList={filmList}/>} />
          <Route path={AppRoutes.SingIn} element={<SignInPage />}/>
          <Route path={AppRoutes.MyList} element={
            <PrivateRouteControl isAuthorize={AuthorizationStatus.NoAuth}>
              <MyListPage />
            </PrivateRouteControl>
          }
          />
          <Route path={AppRoutes.Film} element={<FilmPage />}/>
          <Route path={AppRoutes.AddReview} element={<AddReviewPage />} />
          <Route path={AppRoutes.Player} element={<PlayerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
