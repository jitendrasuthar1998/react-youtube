const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

console.log('Google api key == ', GOOGLE_API_KEY)

export const MOST_POPULAR = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`



