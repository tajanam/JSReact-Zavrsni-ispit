import './App.css';


import { useState, useEffect } from "react";
import { fetchData } from './services/fetchData';
import { SearchGitHubUsers, SearchGitHubRepos } from "./components";



function App() {

  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [userDataError, setUserDataError] = useState(null);
  const [repoDataError, setRepoDataError] = useState(null);
  const [username, setUsers] = useState(null);

  useEffect(() => {
    fetchData("https://api.github.com/users/" + username, setUserData, setUserDataError);
  },[username])

  useEffect(() => {
    fetchData("https://api.github.com/users/" + username + "/repos", setRepoData, setRepoDataError)
  },[username]);

  if(userDataError){
    return <div>{userDataError}</div>;
  }

  if(repoDataError){
    return <div>{repoDataError}</div>;
  }
  if(!userData){
    return <div>Fetching data...</div>
  }
  if(!repoData){
    return <div>Fetching repositories...</div>
  }

  const handleSubmitGO = event => {
    event.preventDefault();
    // console.log('event target is:',event.target.search.value)
    var inputText = event.target.search.value;
    inputText = inputText.trim();

    if(inputText){
      setUsers(event.target.search.value);
      document.getElementById("searchForm").style.display = "none";
    }
    else{
      alert("Write something!");
    }
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmitGO} id="searchForm">
                <label htmlFor="search">GitHub username:</label><br />
                <input type="text" id="search" name="search" placeholder="e.g. facebook" autoFocus ></input><br/><br />
                <button type="submit">GO!</button>
            </form>
            {username ? <SearchGitHubUsers data={userData} /> : ""}
            {username ? <SearchGitHubRepos data= {repoData} /> : ""}
     
    </div>
  );
}

export default App;
