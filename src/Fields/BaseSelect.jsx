import React from 'react'
import {observer} from 'mobx-react'
import LabelField from '../Elements/LabelField'
import {updateValue} from './utils/actions'
import validationProps from './utils/validationProps'


@observer
export default class BaseSelect extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);

    }
   
      
    render(){
        const {  field, label, options=[] } = this.props || {};
        return(
            <div>
                <LabelField label={label} />
                <select
                    onChange={(e)=>updateValue(e,field)}
                    value={field.value}
                    className="select-field" 
                >   
                    {options.map(option =>
                     <option key={option.key} value={option.key}>{option.value}</option>)
                    }
                 </select>          
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
  
}