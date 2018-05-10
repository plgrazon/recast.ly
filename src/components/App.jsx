class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
    };
  }

  onListItemClick(inputVid) {
    this.setState({
      video: inputVid,
    });
  }
  
  onSearchClick(query) {
    console.log('clicked')
    
    var options = {
      query: query,
      max: 5,
      key: window.YOUTUBE_API_KEY,
    };
    
    searchYoutube(options, function(data) {
      this.setState({
        this.video = data[0];
        this.videos = data;
      });
    });
  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchClick={this.onSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList onListItemClick={this.onListItemClick.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
