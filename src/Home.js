import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <StyledMensaje>
      <div className={`caja caja-${props.size}`}>
        {props.children}
        <div className={'container'}>
          <h1>TP9</h1>
          <h3>Nazareno Calampuca</h3>
          <br></br>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <Link class="navbar-brand" to={'/'}>
                Home
              </Link>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link active" to={'/posts'}>
                      {' '}
                      Listado de Posts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <left></left>
        </div>
      </div>
    </StyledMensaje>
  );
};

const StyledMensaje = styled.div`
.caja{
  background-color: pink;
  height: 190px;
}

.caja-chica{
  width: 35%;
}

.caja-grande{
  width: 70%;
}
`;

Home.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Home;
