import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyledHeader, StyledNav, StyledLeftContent, StyledHeaderTitle } from './Header.styles';
import { PAGES } from '@routes/constants';


const Header = () => {
 
  return (
    <StyledHeader>
      <StyledNav className="navbar navbar-expand-lg">
        <StyledLeftContent>
          <Link to={`${PAGES.HOME}`}>
            <StyledHeaderTitle>Podcaster</StyledHeaderTitle>
          </Link>
        </StyledLeftContent>
      </StyledNav>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);