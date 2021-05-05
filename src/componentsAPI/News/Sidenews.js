import React from 'react';
import axios from 'axios';

import SingleSide from './SingleSide'; 
import Error from './Error';

class Sidenews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        }
    }

    //lifecycle method
    componentDidMount(){
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=24dddb60a1d4422ebe8b4dbb8480bd84`;
        /* Leverage axios */
        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        })
        .catch((error) => {
            this.setState({
                error: true
            })
        });
    }

    renderItems(){
        /*iterating through news*/
        if (!this.state.error){
        return this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item}/>  /*Iterating through unique key i.e., url in each article*/
        ));
        } else {
            return <Error/>
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {this.renderItems()}
                </div>
            </React.Fragment>
        )
    }
}

export default Sidenews;