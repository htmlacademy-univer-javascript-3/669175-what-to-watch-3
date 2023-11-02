import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  isAuthorize: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRouteControl({isAuthorize, children}: PrivateRouteProps): JSX.Element {
  return (
    isAuthorize === AuthorizationStatus.Auth ?
      children :
      <Navigate to={AppRoutes.SingIn} />
  );
}

export default PrivateRouteControl;
