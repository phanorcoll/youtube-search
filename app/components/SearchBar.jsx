import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' };

    }

    handleTermChange = (term) => {
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }

    render() {
        return (
            <div className="searchBar right-addon">
                <input type="text" className="form-control" value={this.state.term} onChange={event => this.handleTermChange(event.target.value)} placeholder="Search for videos" aria-label="Search for videos" aria-describedby="basic-addon1" />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        );
    }
}
