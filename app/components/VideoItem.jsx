import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayIcon from '../images/play-icon.png';
import ChannelIcon from '../images/channel-icon.png';

export default class VideoItem extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let title = this.props.video.snippet.title
        let thumbnail =this.props.video.snippet.thumbnails.high.url
        let channel =this.props.video.snippet.channelTitle
        return (
            <div className="col-md-4">
                <div className="video-thumb-wrapper">
                    <figure>
                        <img src={thumbnail} className="thumbnail" width="257px" height="424px" alt="" />
                        <img src={PlayIcon} className="play" alt="" />
                    </figure>
                    <div className="video-title">
                        {title}
                        </div>
                    <div className="video-channel">
                        <img src={ChannelIcon} alt="" />
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