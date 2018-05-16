import axios from 'axios';

export const get = (url) => {
    return (
      axios.get(url)
        .then(response => response.data)
        .catch(err => console.log('Error in request'))
    )
}

export const post = (url, json) => {
    return (
      axios.post(url, json)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err))
    );
}
