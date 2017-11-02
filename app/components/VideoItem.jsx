import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayIcon from '../images/play-icon.png';
import ChannelIcon from '../images/channel-icon.png';
import { Link } from 'react-router-dom';

export default class VideoItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            video: [],
            videos:[],
            term: null
        }

    }

    componentDidMount() {
        this.setState(function () {
            return { 
                video: this.props.video,
                videos: this.props.videos,
                term:this.props.term
            }
        })
    }
    render() {
        let title = this.props.video.snippet.title
        let thumbnail = this.props.video.snippet.thumbnails.high.url
        let channel = this.props.video.snippet.channelTitle
        return (
            <div className="col-md-4">
                <Link to={{
                    pathname: '/detail',
                    state: { video: this.state.video, videos:this.state.videos,term:this.state.term }
                }}>
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
                </Link>
            </div>
        );
    }
}

VideoItem.propTypes = {
    video: PropTypes.object.isRequired
}