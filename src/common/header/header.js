import React, {Component} from 'react';
import './Headers.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

 
class Header extends Component{
    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo}className="app-logo" alt="Movie App Logo"/>
                </header>
                <Button variant="contained" color="default">Login</Button>
            </div>
        )
    }
}