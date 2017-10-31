import React, { Component } from 'react';
import VideoItem from './VideoItem.jsx';
import PropTypes from 'prop-types';

export default class VideoList extends Component{
    constructor(props) {
        super(props)

    }

    render(){
        let videos = this.props.videos.length
        let videoItems =this.props.videos.map((video)=>{
            return <VideoItem 
                key={video.etag} 
                video={video}
                onVideoSelect={this.props.onVideoSelect}
            />
        })
        return(
            <div className="col-md-3 col2">
                <div className="video-list-title">
                    Search results
                </div>
                <ul className="list-group">
                    {videoItems}
                </ul>
                
            </div>
        );
    }
}

VideoList.propTypes ={
    videos: PropTypes.array.isRequired
}