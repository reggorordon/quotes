import React, { Component } from 'react'
import $ from "jquery";


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            autoCompleteResults: [],
            quoteSelected: {},
            showQuoteSelected: false
        };

        $.getJSON('/search?q=' + this.state.term)
            .then(response => this.setState({ autoCompleteResults: response.quotes }))
    }

    getAutoCompleteResults(e) {
        this.setState({
            term: e.target.value
        }, () => {
            $.getJSON('/search?q=' + this.state.term)
                .then(response => this.setState({ autoCompleteResults: response.quotes }))
        });
    }

    render() {
        const autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
            return <div key={index}>
                <h2>{response.text}</h2>
                <p>{response.author}</p>
            </div>
        });

        return (
            <div>
                <input ref={(input) => { this.searchBar = input }} value={this.state.term} onChange={this.getAutoCompleteResults.bind(this)} type='text' placeholder='Search...' />
                {autoCompleteList}
            </div>
        )
    }
}

export default Search;