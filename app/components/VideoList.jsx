import React, { Component } from 'react';
import VideoItem from './VideoItem.jsx';

export default class VideoList extends Component{
    render(){
        return(
            <div className="col-md-3 col2">
                <div className="video-list-title">
                    Search results
                </div>
                <VideoItem />
            </div>
        );
    }
}