import { Link } from 'react-router-dom';
import styles from './notFoundPage.module.css';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>404. Страница не найдена</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFoundPage;
