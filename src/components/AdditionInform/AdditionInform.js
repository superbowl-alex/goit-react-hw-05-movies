import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';

const AdditionInform = ({ movie: { id } }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>{' '}
    </>
  );
};

AdditionInform.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default AdditionInform;
