import React,{ Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VideoDetail from './VideoDetail.jsx';
import VideoList from './VideoList.jsx'
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SearchBar />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <VideoDetail />
                            <VideoList />
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default App