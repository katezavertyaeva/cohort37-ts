import styled from '@emotion/styled';
import { Logo } from 'assets';
import { NavLink } from 'react-router-dom';

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #06006F;
  color: white;
`
export const HeaderLogoContainer = styled.div`
  width: 100px;
  height: 100px;
`
export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`
HeaderLogo.defaultProps = { src: Logo }

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`
export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: white;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #06006F;
  color: white;
`
