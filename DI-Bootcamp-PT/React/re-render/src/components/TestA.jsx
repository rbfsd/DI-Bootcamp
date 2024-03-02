import React from "react";


class TestA extends React.Component {
    constructor (){
        super();
        this.state = {
            name: 'John',
            email: '....@gmail.com',
            users: [],
        }
        // this.name = "John";
    }

    getUsers = () => {

        this.setState({name: 'DAN'})
    }


    render(){
        return (
            <>
                <h2>I am a class component</h2>
                <h1>{this.state.name}</h1>
                <button onClick={this.getUsers}>Get Users Data</button>
            </>
        );
    }
}
export default TestA;