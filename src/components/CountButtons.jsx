import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

class CountButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 20
        };
        this.upCount = this.upCount.bind(this);
        this.downCount = this.downCount.bind(this);
    }

    upCount() {
        let upCount = this.state.count +1;
        this.setState({
            count: upCount
        })
    }

    downCount() {
        let downCount = this.state.count -1;
        this.setState({
            count: downCount
        })
    }

    render() {
        return (

            <div>
                <Grid item>
                <span>{this.state.count}</span>
            <ButtonGroup
              variant="contained"
              color="secondary"
              size="small"
              aria-label="Large contained secondary button group"
            >
              <Button onClick={this.upCount}>more</Button>
              
              <Button onClick={this.downCount}>less</Button>
              {/* <Button>Three</Button> */}
            </ButtonGroup>
            
          </Grid>
                {/* <button onClick={this.upCount}>more</button>
                <p>{this.state.count}</p>
                <button onClick={this.downCount}>less</button> */}
            </div>
        );
    }
}

export default CountButtons;