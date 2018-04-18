import React from 'react'
import {observer} from 'mobx-react'
import BaseInput from '../../Fields/BaseInput';
import BaseTextarea from '../../Fields/BaseTextarea';
import injectWrapper from '../../core/inject'

@observer
export default class PersonalInformation extends React.Component{
    
    constructor(props) {
        super(props);
               
        this.texts = {
            hebrew: {
                firstName: ' שם פרטי',
                lastName: ' שם משפחה'
            },
            english: {
                firstName: 'first name',
                lastName:'last name'
            },
            arabic: {
                firstName: 'first name',
                lastName:'last name'
            }
        }
        this.currentResources = this.currentResources.bind(this);

    }
    currentResources = function(){
        return this.texts['english'/*this.props.formLanguage.name*/];
    };
      
    render(){
        const FirstName = injectWrapper(BaseInput,{
            fieldStore: this.props.firstName
        });
        const LastName = injectWrapper(BaseInput,{
            fieldStore: this.props.lastName
        });
         const Comments = injectWrapper(BaseTextarea,{
            fieldStore: this.props.comments
        });
       
        return(
            <div className="row">
                <div className="col-md-4">
                    <FirstName label={this.currentResources().firstName}/>
                </div>
                <div className="col-md-4">
                    <LastName label={this.currentResources().lastName}/>
                </div> 
                <div className="col-md-4">
                    <Comments label='comments' cols='200' rows='3'/>
                </div>           
            </div>
           
        );
    }
}