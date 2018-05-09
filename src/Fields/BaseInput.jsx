import React from 'react'
import {observer} from 'mobx-react'
import LabelField from '../Elements/LabelField'
import {updateValue} from './utils/actions'
import validationProps from './utils/validationProps'
import {enableUniqueIds} from 'react-html-id'

@observer
export default class BaseInput extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);
        enableUniqueIds(this);
    }
      
    render(){
        const {  field, label, isRequired=true} = this.props || {};
        return(
            <div>
                <LabelField label={label} isRequired={isRequired} htmlFor={this.nextUniqueId()}/>
                <input
                    id={this.lastUniqueId()}
                    onChange={(e)=>updateValue(e,field)}
                    value1={field.value}
                    className="text-field" 
                />             
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}