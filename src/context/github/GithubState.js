import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../types';
//import GithubContext from './githubContext';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer,initialState);
    //search user
    // To get the users with the name similar to that searched for
    const searchUsers = async text =>{  
        setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${
        githubClientId}&client_secret=${githubClientSecret}`)
        //this.setState({users: res.data.items, loading: false }) 
        //setUsers(res.data.items);
        //setLoading(false);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
 
        })
      
      }
    


    //get user 

    //get single github user
    const getUser = async username =>{
        //this.setState({loading: true})
        setLoading();
        
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${
        githubClientId}&client_secret=${githubClientSecret}`)
        
        //this.setState({user: res.data, loading: false }) 
        // setUser(res.data);
        // setLoading(false);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };


    //get user repos
    const getUserRepos = async username =>{
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        githubClientId}&client_secret=${githubClientSecret}`)
        
        //this.setState({repos: res.data, loading: false }) 
        //setRepos(res.data);
        //setLoading(false);
        dispatch({
            type : GET_REPOS,
            payload: res.data
            });
    };


    //clear user
    const clearUsers = ()=> dispatch({type: CLEAR_USER});

    //set loading
    const setLoading = () => dispatch({type: SET_LOADING});
     
    return <GithubContext.Provider
    value = {{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}
    >
        {props.children}
    </GithubContext.Provider>
}; 

export default GithubState;