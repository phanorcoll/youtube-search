import React,{ Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VideoDetail from './VideoDetail.jsx';
import VideoList from './VideoList.jsx'
import YTSearch from 'youtube-api-search'
import _ from 'lodash';

const API_KEY = "";

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            videos:[],
            selectedVideo: null
        }

        this.videoSearch("reactjs")
    }

    videoSearch = (term) =>{
        YTSearch({key:API_KEY,term:term},(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
        })
    }
    
    render() {
        let videoSearch =_.debounce((term)=>{this.videoSearch(term)},300)
        return (
            <div className="container-fluid">
                <SearchBar onSearchTermChange={videoSearch} />
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