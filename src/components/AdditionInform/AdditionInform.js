import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import {
  SubTitleAdditional,
  ListAdditional,
  LinkAdditional,
} from './AdditionInform.styled';

const AdditionInform = ({ movie: { id } }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <SubTitleAdditional>Additional information</SubTitleAdditional>
      <ListAdditional>
        <li>
          <LinkAdditional to="cast" state={{ from: backLinkHref }}>
            Cast
          </LinkAdditional>
        </li>
        <li>
          <LinkAdditional to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </LinkAdditional>
        </li>
      </ListAdditional>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

AdditionInform.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default AdditionInform;
