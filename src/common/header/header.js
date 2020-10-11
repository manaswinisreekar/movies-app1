import React, {Component} from 'react';
import './Headers.css';
import Button from '@material-ui/core/Button';

 
class header extends Component{
    render(){
        return(
            <div>
                <Button variant="contained" color="default">Login</Button>
            </div>
        )
    }
}