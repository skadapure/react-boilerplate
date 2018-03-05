import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

class SoundPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: '',
      next: '',
    };
  }
  render() {
    return (
      <Sound url={this.props.url} playStatus={this.props.playStatus} onFinishedPlaying={this.props.onFinishedPlaying} />
    );
  }
}

SoundPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  playStatus: PropTypes.string.isRequired,
  onFinishedPlaying: PropTypes.func,
};

export default SoundPlayer;
