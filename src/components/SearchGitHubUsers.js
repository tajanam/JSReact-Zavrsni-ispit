import React from "react";

import pt from "prop-types";

class SearchGitHubUsers extends React.Component{
    render(){
        const { data } = this.props;

        return(
            <div id="bio">
                <img height={"60%"} width={"50%"} src={data.avatar_url}/>
                <h1>{data.name}</h1>
                <h3>BIO: {data.bio}</h3>
                <h3>LOCATION: {data.location}</h3>
            </div>
        );
    }
}

SearchGitHubUsers.propTypes = {
    data: pt.object
}
export default SearchGitHubUsers;