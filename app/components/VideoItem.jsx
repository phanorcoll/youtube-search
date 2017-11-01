import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class VideoItem extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let title = this.props.video.snippet.title
        let thumbnail =this.props.video.snippet.thumbnails.high.url
        let channel =this.props.video.snippet.channelTitle
        return (
            <div className="col">
                <div className="video-thumb-wrapper">
                    <figure>
                        <img src={thumbnail} width="257px" height="424px" alt="" />
                        <img src="images/play-icon.png" className="play" alt="" />
                    </figure>
                    <div className="video-title">
                        {title}
                        </div>
                    <div className="video-channel">
                        <img src="images/channel-icon.png" alt="" />
                        <div className="channel-name">{channel}</div>
                    </div>
                </div>
            </div>
        );
    }
}

VideoItem.propTypes = {
    video: PropTypes.object.isRequired
}