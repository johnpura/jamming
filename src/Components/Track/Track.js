import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isPlaying: false};
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.renderPlaybackAction = this.renderPlaybackAction.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    handleClick() {
        if(!this.state.isPlaying) {
            this.props.onPlay(this.props.track.uri);
        } else {
            this.props.onPause(this.props.track.uri);
        }
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }));
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>;
        } else {
            return <a className="Track-action" onClick={this.addTrack}>+</a>;
        }
    }

    renderPlaybackAction() {
        if (this.state.isPlaying) {
            return <a onClick={this.handleClick}><i className="fa fa-pause Playback-action" aria-hidden="true"></i></a>;
        } else {
            return <a onClick={this.handleClick}><i className="fa fa-play-circle Playback-action" aria-hidden="true"></i></a>;
        }
    }

    render() {
        return (
            <div className="Track">
                {this.renderPlaybackAction()}
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;


