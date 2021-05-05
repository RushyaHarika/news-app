import React from "react";

class ProductDetails extends React.Component{
constructor(props){
    super(props);
}
render(){
    return(
        <div className={this.props.card.animation}>
            <div className="front">
              <img src="juice.jpg" alt="Avatar" className="card-image" />
              <div className="container">
                <h3>{this.props.card.title}</h3>
                <h3><span className="price"> ${this.props.card.price}</span></h3> 
                <p>{this.props.card.description}</p>
              </div>
            </div>
        
      </div>
    )
}

}

export default ProductDetails;