import React, {Component} from 'react';
import './Headers.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

 
class header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false,
            value:0

        };
    }
    openModalHandler=()=>{
       this.setState({modalIsOpen:true});
    }
    closeModalHandler=()=>{
            this.setState({modalIsOpen:false});

    }
    tabChangeHandler={event,value}
    render(){
        return(
            <div>
                <header className="app-header">
                <img src={logo} className="app-logo" alt="Movies App Logo"/>
                <div className="login-button">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>

                    </Button>
            </div>
            </header>

        <Modal                     
        ariaHideApp={false} 
        isOpen={this.state.modalIsOpen} 
        contentLabel="Login"
        onRequestClose={this.closeModal}>

    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                </Modal>
         </div>
        );
    }
}
