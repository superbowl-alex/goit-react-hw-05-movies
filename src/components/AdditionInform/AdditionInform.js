import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const AdditionInform = ({ movie: { id } }) => {
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>{' '}
    </>
  );
};

export default AdditionInform;
