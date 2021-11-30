import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetallePosts = (props) => {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post/` + id, {
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
                      <Link class="nav-link active" to={'/Posts'}>
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

      <br></br>

      <div>
        <div>
          <img src={response?.owner.picture} />
          <h5>
            {response?.owner.firstName} {response?.owner.lastName}
          </h5>

          <br />

          <div>
            <img src={response?.image} width="500" height="500" alt="foto" />
          </div>

          <form>
            <div>
              <h2>{response?.text}</h2>
              {response?.likes} Likes
            </div>
          </form>

          <p>
            <small>Fecha: {response?.publishDate}</small>
          </p>
        </div>
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

DetallePosts.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default DetallePosts;
