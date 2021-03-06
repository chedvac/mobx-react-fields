import React from 'react'
import {observer} from 'mobx-react'
import LabelField from '../Elements/LabelField'
import {updateValue} from './utils/actions'
import validationProps from './utils/validationProps'


@observer
export default class BaseTextarea extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);
    }
    render(){
        const {  field, label,rows=3 } = this.props || {};
        
        return(
            <div>
                <LabelField label={label} />
                <textarea
                    onChange={(e)=>updateValue(e,field)}
                    value={field.value} 
                    rows={rows}
                   
                    className="textArea-field" 
                 />             
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}
