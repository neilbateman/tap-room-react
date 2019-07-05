import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import KegList from './KegList';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  openDialog = (event) => {
    this.setState({learnMoredialog: true});
  }

  dialogClose = (event) => {
    this.setState({learnMoredialog: false});
  }

  openGetStartedDialog = (event) => {
    this.setState({getStartedDialog: true});
  }

  closeGetStartedDialog = (event) => {
    this.setState({getStartedDialog: false});
  }

  render() {
    const { classes } = this.props;
    return (

      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={4} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      What is Kombucha Tea?
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    It is a sweet-sour, fermented, acidic, slightly carbonated beverage, which has been described as either a wine that tastes like a delicious tea or an unusual tea that tastes like a rare wine.
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/article1">
                      Learn more
                    </Link>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                    Eight potential benefits of kombucha
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Kombucha is a sweet, fizzy drink made of yeast, sugar, and fermented tea with a number of potential health benefits, including gut health and liver function.
                    </Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Link to="/article2">
                    Learn more
                  </Link>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                      Booch Buiz
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      If you click in Getting Started, you will see a nice carousel
                    </Typography>
                  </div>
                  <div className={classes.alignRight}>
                  <Link to="/article3">
                    Learn more
                  </Link>
                    <Button onClick={this.openGetStartedDialog} color='primary' variant="contained" className={classes.actionButtom}>
                      Dashboard
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid container item xs={12}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <div>
                        <div className={classes.box}>
                          <Typography color='secondary' gutterBottom>
                            Full box
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Boochy Booch
                          </Typography>
                        </div>
                        <div className={classes.alignRight}>
                        <Link to="/article4">
                          Learn more
                        </Link>
                        </div>
                      </div>
                    </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <SwipeDialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose} />
          <InstructionDialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
          />
        </div>
      </React.Fragment>

    )
  }
}

export default withRouter(withStyles(styles)(Main));
