import React from 'react';
import PropTypes from 'prop-types';
import KegName from './KegName';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountButtons from './buttons/CountButtons';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ButtonBar from './buttons/ButtonBar';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      formVisible: false,
      currentBuch: 'Lemon Ginger'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBuchClick= this.handleClick.bind(this);
  }

  handleClick() {
    alert('Clickity');
  }

  handleBuchClick(selectedBuch) {
    this.setState({currentBuch: selectedBuch});
    console.log(this.state.currentBuch)
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
        <Typography className={classes.heading} onClick={this.handleClick}>{this.props.name}</Typography>
       
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Paper>
        <ul>
          {this.props.details.map((item, index)=>
            <KegName name={item}
              key={index}
            />
          )}
         
        </ul>
        
        <CountButtons />
        </Paper>
      </ExpansionPanelDetails>
      <ButtonBar className={classes.heading}/>
      <button onClick={this.handleBuchClick}></button>
    </ExpansionPanel>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array,
};

export default withRouter(withStyles(styles)(Keg));
