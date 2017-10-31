import React,{ Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VideoDetail from './VideoDetail.jsx';
import VideoList from './VideoList.jsx'
import YTSearch from 'youtube-api-search'

const API_KEY = "KEY";

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            videos:[],
            selectedVideo: null
        }

        YTSearch({key:API_KEY,term:'golang'},(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
        })

    }
    
    render() {
        return (
            <div className="container-fluid">
                <SearchBar />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <VideoDetail video={this.state.selectedVideo} />
                            <VideoList 
                                onVideoSelect={selectedVideo =>this.setState({selectedVideo})} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default App