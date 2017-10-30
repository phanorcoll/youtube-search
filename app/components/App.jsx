import React,{ Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VideoDetail from './VideoDetail.jsx';
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SearchBar />
                <div className="content">
               <div className="container">
                    <div className="row">
                        <VideoDetail />
                        <div className="col-md-auto col2">
                            Variable width content
                        </div>
                    </div>
                </div>  
            </div>
               
                
            </div>
        );
    }
}

export default App