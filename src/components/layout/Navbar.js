import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import './App.css'; 

export class Navbar extends Component{

    static defaultProps = {
        title: "Github Finder",
        //icon : "fab fa-github"
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
       // icon: PropTypes.string.isRequired
    };
    render(){
        return(
            <div>
                 <nav className="navbar bg-primary">
                     <h1>{this.props.title}</h1>
                     <ul>
                         <li><Link to='/'>HOME</Link></li>
                         <li><Link to='/about'>ABOUT</Link></li>
                     </ul>
                 </nav>
            </div>
        );
    }

}
export default Navbar;