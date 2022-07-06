import pt from "prop-types";

function SearchGitHubRepos(props){

    const { data } = props;

    function resetPage(){
        window.location.reload(false);
    }

    return(
        <div id="data">
            <table border= "1">
                <tbody>
                    {data.map(({ id, name }) => {
                        return <tr key={id}>
                            <td>{name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <br />
            <button id="reset" onClick={resetPage}>Reset</button>
        </div>
    );
}

SearchGitHubRepos.propTypes = {
    data: pt.array
}
export default SearchGitHubRepos;