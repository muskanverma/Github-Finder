import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text,setText] = useState(''); 
    

    const onSubmit = (e) =>{
        e.preventDefault();
        //set alert if nothing is entered and search is pressed
        if(text=== ''){
           alertContext.setAlert('Please enter something', 'light');
        }
        else{
            //search users if somethimg is entered
            githubContext.searchUsers(text);
            setText('');
    
        }
    }

    const onChange= (e)=>{
        setText(e.target.value);
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text"
                    name = "text" 
                    onChange = {onChange}
                    value = {text} 
                    placeholder="Search Users..." />

                    <input type="submit" 
                    value = "search" 
                    className="btn btn-dark btn-block" 
                  
                    />

                </form>
                {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block"
                 onClick = {githubContext.clearUsers}>Clear</button>
                 )}
                 
            </div>
        )
    }

export default Search
