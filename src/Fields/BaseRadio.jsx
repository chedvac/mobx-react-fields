import React from 'react'
import {observer} from 'mobx-react'
import {updateValue} from './utils/actions'
import validationProps from './utils/validationProps'


@observer
export default class BaseRadio extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);
    }
    render(){
        const {  field, label, value, name } = this.props || {};
        
        return(
            <div>
                <input className="radio-field" 
                    type="radio" 
                    value={value} 
                    name={name} 
                    onChange={(e)=>updateValue(e,field)}
                />
                <label className="label-radio-combined">
                    <span>{label}</span>
                </label>            
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}
