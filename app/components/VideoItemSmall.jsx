import React, { Component } from 'react';
import ChannelIcon from '../images/channel-icon.png';

export default class VideoItemSmall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: []

        }

    }
    render() {
        let video=this.props.video
        let title = this.props.video.snippet.title
        let thumbnail = this.props.video.snippet.thumbnails.high.url
        let channel = this.props.video.snippet.channelTitle
        let onVideoSelect=this.props.onVideoSelect
        return (
            <div className="col-md-2">
                <div className={video.id.videoId=== this.props.videoId ? 'item active': 'item'} key={video.etag}  onClick={()=>onVideoSelect(video)}>
                    <figure>
                        <img src={thumbnail} alt="" className="thumbnail" width="157px" height="212px" />
                    </figure>
                    <div className="title">{title}</div>
                    <div className="video-channel">
                        <img src={ChannelIcon} alt="" />
                        <div className="channel-name">{channel}</div>
                    </div>
                </div>
                </div>
        )
    }
}