import { NavLink, Outlet } from 'react-router-dom';

const AdditionInform = ({ movie: { id } }) => {
  return (
    <>
      <h3>Additional snformation</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default AdditionInform;
