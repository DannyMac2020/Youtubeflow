import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../actions';

class ChannelList extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <ul>
        {this.props.channels.map(channel => {
          return (
            <li key={channel.id}>Your channel name: {channel.snippet.title}</li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { channels: state.channels };
};

export default connect(
  mapStateToProps,
  { fetchChannels }
)(ChannelList);

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channel.id}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    console.log(this.state.resultyt);

    return(
      <div>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}
