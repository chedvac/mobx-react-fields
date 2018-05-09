import React from 'react'
import {observer} from 'mobx-react'
import LabelField from '../Elements/LabelField'
import {updateValue, updateFile, resetFile} from './utils/actions'
import validationProps from './utils/validationProps'

@observer
export default class BaseFile extends React.Component{
    
    constructor(props) {
        super(props);
        //validationProps(props);
    }

    handleClick = (e, field) => {
        if(field.value){
            e.preventDefault();
            resetFile(field);
        }
    };
      
    render(){
        const {  field, label, isRequired=true} = this.props || {};
        return(
            <div>
                <LabelField label={label} isRequired={isRequired}/>
                <input
                multiple="true"
                    type="file"
                    onChange={(e)=>updateFile(e,field)}
                    onClick={(e)=>this.handleClick(e,field)}
                    value={field.value}
                    className="file-field" 
                />             
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}