export function fetchData(url, setData, setError, username, userrepository){
    var loc = "";

    if(username !== undefined){
        loc = url + username;
    }
    if(userrepository !== undefined){
        userrepository = url + username + "/repos";
    }
    else{
        loc = url;
    }

    return fetch(loc)
    .then (response => response.json())
    .then(data => setData(data))
    .catch(error => setError(error.toString()));
}