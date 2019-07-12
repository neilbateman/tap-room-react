import React from 'react';
import Keg from './Keg';
import {kegList} from '../KegList';




export default class  AvailableProduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList,
    };
  }

  render() {
    return (
      <div>
        {this.state.kegList.map((item, index)=>
          <Keg name={item.name}
              details={item.details}
            // cfu={item.cfu}
            // brand={item.brand}
            // pints={item.pints}
            // price={item.price}
            key={index}
          />
        )}
      </div>
    );
  }
}
