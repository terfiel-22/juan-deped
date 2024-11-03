import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as JuanDepedLogo } from 'src/assets/images/logos/juan-deped-logo.svg';
import { styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  return (
    <LinkStyled
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <JuanDepedLogo />
    </LinkStyled>
  );
};

export default Logo;
