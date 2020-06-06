import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';
import { getNodeText } from '@testing-library/react';

class DogList extends Component {
    render() {
        return(
            <div className="DogList">
                <h1 className="display-1 text-center mt-4 mb-4">Dog List</h1>
               
                    <div className="row">
                        {this.props.dogs.map(dog => (
                            <div className="Dog col-md-6 col-lg-4 text-center" key={dog.name}>

                            <Link  to={`/dogs/${dog.name}`} >
                                <img className="rounded-circle" src={dog.src} alt={dog.name} />
                                <h3 className="Underline">
                                    {dog.name}
                                </h3>
                            </Link>
                            </div>
                        ))}
                        
                    </div>
              

            </div>
        );  
    }
}

export default DogList;