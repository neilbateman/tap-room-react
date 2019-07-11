import React from 'react';
import PropTypes from 'prop-types';
import KegName from './KegName';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Keg(props){

  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{props.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul>
          {props.details.map((item, index)=>
            <KegName name={item}
              key={index}
            />
          )}

        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
  // cfu: PropTypes.number.isRequired,
  // brand: PropTypes.string,
  // price: PropTypes.number.isRequired,
  // pints: PropTypes.number.isRequired
};


export default Keg;


// return(    
//   <div>
// <Paper>
//   <h2>{props.brand} {props.name}</h2>
//   <h3> Price: ${props.price} </h3>
//   <h3>CFU {props.cfu}</h3>
//   <h3>{props.pints} pints left</h3>
// </Paper>
//   </div>
// );