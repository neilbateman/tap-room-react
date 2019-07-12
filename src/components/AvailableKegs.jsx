import React from 'react';
import Keg from './Keg';
import {kegList} from '../KegList';




export default class  AvailableKegs extends React.Component {
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
              key={index}
          />
        )}
      </div>
    );
  }
}
