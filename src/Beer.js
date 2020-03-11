import React, { Component } from 'react';
import Search from './Search';
import API from '../src/API';

class Beer extends Component {
    state = {
        search: "", //update state of application to contain what has been searched
        beers: [],
        results: [],
        error: ""
    }

    handleSearch = (event) => { // set state everytime we type into input box
        // console.log(event.target.value)
        this.setState({ search: event.target.value });
    }

    searchBeer = (event) => {
        event.preventDefault();

        API.getPunkApiSearch(this.state.search)
            .then((data) => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <Search handleSearch={this.handleSearch} searchBeer={this.searchBeer} />
            </div >
        )
    }
}

export default Beer;