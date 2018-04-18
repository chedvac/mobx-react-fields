import React, { Component } from 'react';
import Form from './components/Form/Form';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';
import injectWrapper from './core/inject'
import rootStore from './rootStore'

export default class ExampleForm extends Component { // destruct non-valid props
    constructor(props){
        super(props)
    }
    
    render() {
        const UserDetails = injectWrapper(PersonalInformation,{...rootStore.userDetails})
        return(
            <Form ref={c => { this.Form = c }}>

               
                <UserDetails/>
              
            </Form>
        )
    }
};