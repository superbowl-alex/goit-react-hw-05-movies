import { Routes, Route } from 'react-router-dom';
import GlobalStyles from 'GlobalStyles';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
      <GlobalStyles />
      React homework template
    </div>
  );
};
