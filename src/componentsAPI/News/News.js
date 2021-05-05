import React from 'react';
import NewSingle from './NewSingle.js'; 
import Error from './Error';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
            error: false,
        }
    }

    //lifecycle method
    componentDidMount(){
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=24dddb60a1d4422ebe8b4dbb8480bd84`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => {
            this.setState({
                error: true
            })
        })
    }

    renderItems(){
        /*iterating through news*/
        if(!this.state.error){
        return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item}/>  /*Iterating through unique key i.e., url in each article*/
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

export default News;