import React, {Component} from 'react';
import './Headers.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from 'material-ui/core/InputLabel';
import Input from 'material-ui/core/Input';





const customStyles={
    content:{
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%,-50%)'
    }

};
const TabContainer=function(){
    return(
        <Typography component="div" style={{padding:0}}>
       {Props.children}

        </Typography>
    );

}

 
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
    tabChangeHandler=(event,value)=>{
        this.setState({value});
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
        onRequestClose={this.closeModal}
        style={customStyles}>

    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="userName">
                            UserName
                          </InputLabel>
                          <Input id="userName" type="text">
                          </Input>
                    </FormControl>
                    <FormControl required><br/><br/>
                        <InputLabel htmlFor="Password">password
                          </InputLabel>
                          <Input id="password" type="password">
                          </Input>
                    </FormControl>
                    <Button variant="contained" color="primary">LOGIN</Button>
                    </TabContainer>
                </Modal>
         </div>
        );
    }
}
