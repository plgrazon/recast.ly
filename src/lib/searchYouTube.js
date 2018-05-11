var searchYouTube = (options, callback) => {
  // This fetches the data from the server, in this case, Youtube
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      q: options.q,
      key: options.key,
      maxResults: options.maxResults,
      videoEmbeddable: true,
      type: 'video'
    },
    success: (data) => {
      callback(data);
    },
    
    error: (data) => {
      console.log('failed', data);
    }
  });
};

window.searchYouTube = searchYouTube;
