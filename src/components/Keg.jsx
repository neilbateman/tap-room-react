import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

function Keg(props) {
  return (

    <div>
    <Paper>
      <h2>{props.brand} {props.name}</h2>
      <h3> Price: ${props.price} </h3>
      <h3>CFU {props.cfu}</h3>
      <h3>{props.pints} pints left</h3>
    </Paper>
    </div>
    );
  }
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  cfu: PropTypes.number.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
};


export default Keg;
