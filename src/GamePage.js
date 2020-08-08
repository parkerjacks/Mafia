import React, { Component } from 'react';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="GamePage">
                <h1> Hello </h1>
                <div>
                    <div> Character Card </div>  
                    <div> Character Name: </div>
                    <div> Occupation: </div> 
                    <div> Status:</div> 
                    

                </div>
            </div>
        );
    }
}

export default GamePage;