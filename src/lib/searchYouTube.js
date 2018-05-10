var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.q,
      key: options.key
      maxResults: options.max,
      videEmbeddable: true,
      type: 'video'
    },
    
    contentType: 'application/json',
    
    success: (data) => {
      console.log(data);
      callback(data.items);
    },
    
    error: (data) => {
      console.log('failed', data);
    }
  })
};

window.searchYouTube = searchYouTube;
