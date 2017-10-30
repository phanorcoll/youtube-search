import React, { Component } from 'react';

export default class VideoItem extends Component{
    render(){
        return(
            <div className="video-item">
                    <div className="row">
                        <div className="col-md-5">
                        <img src="https://dummyimage.com/97x76/000/fff" alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="title">
                                JWPlayer Embed Code
                            </div>
                            <div className="info">
                                videopro / JULY 11, 2017
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}