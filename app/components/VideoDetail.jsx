import React, { Component } from 'react';

export default class VideoDetail extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        if (!this.props.video){
            return <div>Loading..</div>
        }

        let title = this.props.video.snippet.title
        let description = this.props.video.snippet.description
        let videoId = this.props.video.id.videoId
        let url = `https://www.youtube.com/embed/${videoId}`
        return (
            <div className="col-md-9">
                <h2>Video Details</h2>
                <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
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