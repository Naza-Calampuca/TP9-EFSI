import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Posts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListadoPosts = (props) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post?limit=10`, {
        headers: { 'app-id': '6166bf8cae58e83f57bbc977' },
      })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      });
  });

  return (
    <>
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
      <div>
        {response?.data.map((item) => {
          return <Post item={item} />;
        })}
      </div>
    </>
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

ListadoPosts.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default ListadoPosts;
