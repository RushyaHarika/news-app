import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    return ( 
      <div className="Grid animated bounceInUp">
        {
          this.props.cards.map((card) => (
            <Card 
              duration={150} 
              key={card.id} 
              card={card} 
            />
          ))
        }
      </div>
     )
  }
};
 
export default Home;
