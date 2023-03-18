import axios from 'axios';

const getHeaderConfig = () => {
    return {
        headers: { 'Content-Type': 'application/json'}
    }
}

export function getListPodcast() {
    return  axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://rss.applemarketingtools.com/api/v2/us/podcasts/top/100/podcasts.json')}`, getHeaderConfig());
}

export function getDetailPodcast(_id) {
    return  axios.get(`https://itunes.apple.com/lookup?id=${_id}&media=podcast&entity=podcastEpisode&limit=20`, getHeaderConfig());
}