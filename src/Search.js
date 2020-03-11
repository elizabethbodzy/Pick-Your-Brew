import React from 'react';
// import Jumbotron from '../src/Jumbotron';
// import { Container } from '../src/Grid';


const Search = (props) => {


    return (

        <div className="search">
            <label>Search for Any Beer</label>
            <form onSubmit={props.serachBeer} action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit"> Search</button>
            </form>
        </div>
        // <Container fluid>
        //     <Jumbotron>
        //         <div className="container">
        //             <h1 className="title">Google Book Search </h1>
        //             <h2 className="description"> Search and Save Books</h2>
        //         </div>
        //     </Jumbotron>
        //     <Container>
        //         <SearchDiv handleSearchChange={this.handleSearchChange} searchBook={this.searchBooks} />
        //         <SearchResults results={this.state.results} saveBook={this.saveBook} />
        //     </Container>
        // </Container>

    );
}



export default Search;