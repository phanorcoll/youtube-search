import React,{ Component } from 'react';
import SearchBar from './SearchBar.jsx';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SearchBar />
                <div className="content-fluid">
                <h1>content - { this.props.text }</h1>
                    </div>
                
            </div>
        );
    }
}

export default App