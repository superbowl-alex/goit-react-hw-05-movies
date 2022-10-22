import ScrollToTop from 'react-scroll-to-top';
import { TiArrowUpThick } from 'react-icons/ti';
import { ScrollUpWrap } from './ScrollUp.styled';

const ScrollUp = () => {
  return (
    <ScrollUpWrap>
      <ScrollToTop smooth component={<TiArrowUpThick />} />;
    </ScrollUpWrap>
  );
};

export default ScrollUp;
