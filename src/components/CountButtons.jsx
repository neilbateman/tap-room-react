import React from 'react';


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
                <button onClick={this.upCount}>more</button>
                <p>{this.state.count}</p>
                <button onClick={this.downCount}>less</button>
            </div>
        );
    }
}

export default CountButtons;