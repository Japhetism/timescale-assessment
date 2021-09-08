import styled from 'styled-components';
import logo from "../images/logo.svg";

const Nav = styled.div`
  background-color: #fff;
`;
 
const NavHeader = styled.div`
  max-width: 1240px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  background: url(${logo}) no-repeat;
  background-size: 200px 100px;
`;
 
const NavLeft = styled.div`
  width:80.333%;
  text-align: left;
`;
 
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
 
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
 
const MenuLink = styled.a``;

const Header = (props) => {
  
  const handleSearch = (query) => {
    props.searchMovies(query);
  }

  return <Nav>
    <NavHeader>
      <NavLeft />
      <NavRight>
        <MenuLink href="#">
        <Input type="text" placeholder="Search for a movie" onChange={event => handleSearch(event.target.value)} />
        </MenuLink>
        </NavRight>
    </NavHeader>
  </Nav>
}

export default Header;
