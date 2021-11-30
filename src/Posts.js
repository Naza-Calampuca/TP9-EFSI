import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Posts = ({ item }) => {
  return (
    <>
      <Link to={'/posts/' + item.id}>
        <div>
          <div>
            <div>
              <img src={item.image} width="500" height="500" alt="..." />
            </div>
            <div>
              <h2> {item.text}</h2>
            </div>
            <div>
              <img src={item.owner.picture} />

              <h5>
                {item.owner.firstName} {item.owner.lastName}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Posts;
