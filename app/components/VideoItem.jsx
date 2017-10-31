import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class VideoItem extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let video=this.props.video
        let title = video.snippet.title
        let thumbnail =video.snippet.thumbnails.default.url
        let onVideoSelect=this.props.onVideoSelect
        return (
            <li onClick={()=>onVideoSelect(video)} className="list-group-item">
                <div className="video-item">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={thumbnail} alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="title">
                                {title}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

VideoItem.propTypes = {
    video: PropTypes.object.isRequired
}