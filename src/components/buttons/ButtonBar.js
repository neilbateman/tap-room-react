import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  primary: {
    marginRight: theme.spacing.unit * 2
  },
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  }
})

class ButtonBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        edit : false
    };
    this.editButton = this.editButton.bind(this);
    
}

  editButton() {
    let editButton = true;
    this.setState({
      edit: editButton
    })

  }  

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        <Button
          className={classes.primary}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.secondary} onClick={this.editButton}
        >
          Edit
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);