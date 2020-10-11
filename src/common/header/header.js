import React, {Component} from 'react';
import './Headers.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

 
class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false

        };
    }
    openModalHandler=()=>{
        this.setState({modalIsOpen:true});
       
    closeModalHandler=()=>{
            this.setState({modalIsOpen:false});

    }
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
        </Modal>
        </div>
        );
    }
}
}
