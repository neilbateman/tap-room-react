import React from 'react';
import PropTypes from 'prop-types';
import KegName from './KegName';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountButtons from './CountButtons';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';



const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick() {
    alert('Clickity');
  }


  
  
  render(){
    const {classes} = this.props;
    return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading} >{this.props.name}</Typography>
        
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul>
          {this.props.details.map((item, index)=>
            <KegName name={item}
              key={index}
            />
          )}

        </ul>
        
      </ExpansionPanelDetails>
      <CountButtons />
    </ExpansionPanel>
    );
  }
}

  




Keg.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
};

export default withRouter(withStyles(styles)(Keg));



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