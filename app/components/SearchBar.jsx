import React, { Component} from 'react';
import videoIcon from "../images/video-icon.png";

export default class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state={term:''};

    }

    handleTermChange = (term) => {
        //e.preventDefault()
        this.setState({term})
        this.props.onSearchTermChange(term)
    }


    render(){
        return (
        <div className="top-bar">
            <div className="container">
            <nav className="navbar">
                <div className="navbar-brand" href="#">
                <i className="fa fa-youtube" aria-hidden="true"></i>
                Youtube search
                </div>
                <div className="input-style">
                    <div className="input-group">
                    <input type="text" value={this.state.term} onChange={event =>this.handleTermChange(event.target.value)} placeholder="Search for videos" aria-label="Search for videos" aria-describedby="basic-addon1" />
                    <span className="input-group-addon" id="basic-addon1">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
    }
}
