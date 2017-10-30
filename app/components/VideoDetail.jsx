import React, { Component } from 'react';

export default class VideoDetail extends Component {
    render() {
        return (
            <div className="col">
                <h2>Video Details</h2>
                <img src="https://dummyimage.com/900x500/000/fff" alt="" />
                <div className="video-title">
                    Methode Technology Hall Intro
                </div>
                <div className="video-description">
                    <p>
                       Scientific research shows this is a great way to immediately increase happiness. You can do it anywhere and it does not cost anything. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </div>
            </div>
        );
    }
}