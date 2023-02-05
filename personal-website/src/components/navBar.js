/* Code based on https://www.npmjs.com/package/react-responsive-navbar, used under license 
MIT © Stephanie Tassone 
Using the package directly led to a lot of dependencies with vulnerabilities, hence copying the code over...
*/

import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const SmallMenu = styled.div`
  display: none;
  text-align: center;
  @media (max-width: ${(props) => props.size}) {
    display: block;
  }
`;

const LargeMenu = styled.div`
  display: block;
  text-align: center;
  @media (max-width: ${(props) => props.size}) {
    display: none;
  }
`;

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const {
      menu,
      largeMenuClassName,
      smallMenuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton,
    } = this.props;
    return (
      <div>
        <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
          {menu}
        </LargeMenu>
        <SmallMenu className={smallMenuClassName} size={changeMenuOn}>
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}
          {this.state.showMenu ? <div>{menu}</div> : null}
        </SmallMenu>
      </div>
    );
  }
}
ResponsiveMenu.propTypes = {
  menu: PropTypes.node.isRequired,
  largeMenuClassName: PropTypes.string,
  smallMenuClassName: PropTypes.string,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired,
};

ResponsiveMenu.defaultProps = {
  largeMenuClassName: "",
  smallMenuClassName: "",
};

const Menu = styled.div`
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    font-size: 1.5em;
    text-underline-offset: 4px;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #128743;
    }
    &:focus {
      margin: 0px;
      border: 0px;
      box-shadow: none;
    }
  }
  @media (max-width: 640px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const NavBar = () => {
  return (
    <ResponsiveMenu
      menuOpenButton={<FontAwesomeIcon icon={faBars} size="2x" />}
      menuCloseButton={<FontAwesomeIcon icon={faXmark} size="2x" />}
      changeMenuOn="640px"
      largeMenuClassName="large-menu"
      smallMenuClassName="small-menu"
      menu={
        <Menu>
          <nav>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/experience">Work Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
          </nav>
        </Menu>
      }
    />
  );
};

export default NavBar;
