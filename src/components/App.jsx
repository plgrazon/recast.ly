class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      query: '',
    };
  }

  ////// Video List Entry functions /////////////////////////////

  onListItemClick(inputVid) {
    this.setState({
      video: inputVid,
    });
  }
  
  ////// Search functions //////////////////////////////////////

  searchCallBack(data) {
    this.setState({
      video: data.items[0],
      videos: data.items
    });
  }
  
  onChange(event) {
    this.setState({query: event.target.value});
  }
  
  onSearchClick() {
    var options = {
      q: this.state.query,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY
    };
    
    window.searchYouTube(options, this.searchCallBack.bind(this))
  }
  
  ////// Render Here ////////////////////////////////////////////
  
  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onChange={this.onChange.bind(this)} onSearchClick={this.onSearchClick.bind(this)}/>
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
