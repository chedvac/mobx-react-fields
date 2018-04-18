import React from 'react'
import {observer} from 'mobx-react'
import FieldLabel from '../Elements/FieldLabel'
import BaseFieldBehaviors from '../Behaviors/BaseField'

@observer
export default class BaseInput extends React.Component{
    
    constructor(props) {
        super(props);
       this.field = new BaseFieldBehaviors(props.fieldStore);
      //this.field = props.fieldStore
    }
   
      
    render(){
        return(
            <div>
                <FieldLabel label={this.props.label} />
                <input
                    onChange={(e)=>this.field.onChange(e.target.value)}
                    value={this.field.field.value}
                    className="text-field" 
                />             
                {/* <Error error={this.field.field.error}/> */}
            </div>
        );
    }
}