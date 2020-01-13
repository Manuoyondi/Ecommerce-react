import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';


class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e =>{
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange} required />
                   
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange} required />
                    
                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton> 
                    </div>
                      
                </form>
            </div>
        ) 
    }
}

export default SignIn;
