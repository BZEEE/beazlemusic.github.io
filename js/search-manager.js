

class SearchManager {
    constructor() {}

    constructSearchQuery(searchResult) {
        // search by artist and track
        // return "https://api.spotify.com/v1/search?type=track&q=" + searchResult;
        return "https://api.spotify.com/v1/search?type=artist%20OR%20track&q=" + searchResult;
    }

    query(queryString, callback) {
        fetch(queryString, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        }).then(function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data);
                callback(data);
              });
        }).catch(function(error) {
            console.log('Query Error: ', error);
        })
    }
}