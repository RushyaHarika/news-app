import React from 'react';

const NewSingle = ({item}) => (
    /* CDNs for materialize css which is responsible for card, card-image,... classNames are added in index.html */
    <div className="col s4">
        <div className="card" style={{width:'100%',height:'100%'}}>
            <div className="card-image">
                <img src={item.urlToImage} alt={item.title}/>
                <span className="card-title">{item.source.name}</span>
            </div>
            <div className="card-content">
                <p>{item.title}</p>
            </div>
            <div className="card-action">
                <a href={item.url} target="_blank">Full article</a>
            </div>
        </div>
    </div>
);

export default NewSingle;