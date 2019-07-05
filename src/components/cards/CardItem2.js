import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from '../buttons/ButtonBar';
import Keg from '../Keg';
import KegList from '../KegList';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing.unit * 4
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing.unit * 2
  }
})

const kegList = [
  {
    name: 'Master Brew Kombucha',
    cfu: 5,
    brand: 'Kevita',
    pints: 50,
    price: 1
  },
  {
    name: 'Lemon Ginver',
    cfu: 5,
    brand: 'Humm',
    pints: 50,
    price: 1
  },
  {
    name: 'Botanic no 7',
    cfu: 5,
    brand: 'GT enlightened Organic Raw Kombucha',
    pints: 50,
    price: 1
  },
  {
    name: 'Essence of Lemon',
    cfu: 0,
    brand: 'Kombucha Wonder Drink',
    pints: 50,
    price: 1
  },
  {
    name: 'Dr. Marigold',
    cfu: 5,
    brand: 'Tealixir',
    pints: 50,
    price: 1
  }
];

class CardItem extends Component {

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.root}>
      <Paper className={classes.paper}>
        {kegList.map((keg, index) =>
          <Keg name = {keg.name}
            cfu = {keg.cfu}
            brand = {keg.brand}
            pints = {keg.pints}
            price = {keg.price}
            key = {index}
            />
        )}

        </Paper>
      </div>
       )}

  }


export default withStyles(styles)(CardItem);
