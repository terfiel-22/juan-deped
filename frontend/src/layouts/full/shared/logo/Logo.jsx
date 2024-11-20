import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as JuanDepedLogoDark } from 'src/assets/images/logos/juan-deped-logo-dark.svg';
import { ReactComponent as JuanDepedLogoLight } from 'src/assets/images/logos/juan-deped-logo-light.svg';
import { styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '150px',
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
      {customizer.activeMode === 'dark' ? (
        <JuanDepedLogoLight />
      ) : (
        <JuanDepedLogoDark />
      )}
    </LinkStyled>
  );
};

export default Logo;
