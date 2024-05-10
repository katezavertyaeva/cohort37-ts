import { Link, useNavigate } from "react-router-dom"
import { Footer, Header, HeaderLogo, HeaderLogoContainer, LayoutComponent, Main, NavContainer, StyledNavLink } from "./styles"
import { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        {/* <Link to='/'> */}
        <HeaderLogoContainer onClick={() => navigate('/')}>
          <HeaderLogo />
        </HeaderLogoContainer>
        {/* </Link> */}
        <NavContainer>
          <StyledNavLink
            to='/'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Home
          </StyledNavLink>
          <StyledNavLink
            to='/about'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            About
          </StyledNavLink>
          <StyledNavLink
            to='/users'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Users
          </StyledNavLink>
          <StyledNavLink
            to='/clients'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </Footer>
    </LayoutComponent>
  )
}

export default Layout
