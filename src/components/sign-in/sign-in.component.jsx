import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";


class SignIn extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {

        event.preventDefault(); //to prevent default behaviour of submitting the form before clicking the submit button
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
        }
        catch (error) {
            console.error(error);
        }

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
               <h2>I already have an account</h2>
               <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='email'
                    required />

                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label='password'
                    required />

                    <div className="buttons">
                    <CustomButton type="submit"> Sign in </CustomButton> 
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with google </CustomButton> 
                    </div>                    
                </form>
            </div>
        );
    }

}     

export default SignIn;
