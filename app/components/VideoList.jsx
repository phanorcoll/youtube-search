import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VideoItem from './VideoItem.jsx';
import VideoIcon from '../images/video-icon.png';
import YTSearch from 'youtube-api-search'
import _ from 'lodash';

const API_KEY = "AIzaSyAP4MjDGCpmfQT0-hTDHvqMuWuQDb2FiO8";

export default class VideoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            term:'reactjs',
            selectedVideo: null
        }

    }

    componentDidMount(){
        this.videoSearch(this.state.term)
    }

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos)
            this.setState({
                videos: videos,
                term: term,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        let videoItems = this.state.videos.map((video) => {
            return <VideoItem
                key={video.etag}
                video={video}
            //onVideoSelect={this.props.onVideoSelect}
            />
        })
        let videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="list-title-wrapper">
                    <img src={VideoIcon} alt="" />
                    <div className="title">Latest videos for <span className="term">- {this.state.term} -</span></div>
                </div>
                <div className="video-list-wrapper">
                    <div className="row">
                        {videoItems}
                    </div>
                </div>
            </div>
        );
    }
}