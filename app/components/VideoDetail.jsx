import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import YTSearch from 'youtube-api-search'
import _ from 'lodash';
import SearchResultIcon from '../images/search-result.png';
import VideoItemSmall from './VideoItemSmall.jsx';
const API_KEY = "AIzaSyAP4MjDGCpmfQT0-hTDHvqMuWuQDb2FiO8";

export default class VideoDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            term:'',
            selectedVideo: []
        }

    }

    componentWillMount() {
        this.setState(function () {
            return {
                selectedVideo: this.props.location.state.video,
                videos: this.props.location.state.videos,
                term: this.props.location.state.term
            }
        })
    }
    

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                term: term,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        
        let title = this.state.selectedVideo.snippet.title
        let description = this.state.selectedVideo.snippet.description
        let videoId = this.state.selectedVideo.id.videoId
        let url = `https://www.youtube.com/embed/${videoId}`

        let videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        let videoItemsSmall = this.state.videos.map((video) => {
            return <VideoItemSmall
                key={video.etag}
                video={video}
                videos={this.state.videos}
                term={this.state.term}
                onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
            />
        })

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="list-title-wrapper2">
                    <img src={SearchResultIcon} alt="youtube search" />
                    <div className="title">Search results for <span className="term">- {this.state.term} -</span></div>
                    <div className="small-video-list-wrapper">
                    <div className="row">
                        {videoItemsSmall}
                    </div>
                </div>
                </div>
                

                {/* <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item"></iframe>
                </div> */}
                <div className="video-title">
                    {title}
                </div>
                <div className="video-description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}