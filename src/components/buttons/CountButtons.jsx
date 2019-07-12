import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class CountButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 20
        };
        this.upCount = this.upCount.bind(this);
        this.downCount = this.downCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
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


    resetCount() {
        let resetCount = 20
        this.setState({
            count: resetCount
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
              <Button onClick={this.upCount}>+</Button>
              
              <Button onClick={this.downCount}>-</Button>
              <Button onClick={this.resetCount}>reset</Button>
            </ButtonGroup>
            
          </Grid>
            </div>
        );
    }
}

export default CountButtons;