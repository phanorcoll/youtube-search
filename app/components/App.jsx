import React,{ Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VideoDetail from './VideoDetail.jsx';
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SearchBar />
                <VideoDetail />
                
            </div>
        );
    }
}

export default App