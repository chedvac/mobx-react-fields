import React from 'react'
import {observer} from 'mobx-react'
import FieldLabel from '../Elements/FieldLabel'
import TextareaBehaviors from '../Behaviors/TextArea'

@observer
export default class BaseTextarea extends React.Component{
    
    constructor(props) {
        super(props);
        this.rows = props.rows
        this.cols = props.cols
       this.field = new TextareaBehaviors(props.fieldStore);
    }
   
      
    render(){
        return(
            <div>
                <FieldLabel label={this.props.label} />
                <textarea
                    onChange={(e)=>this.field.onChange(e.target.value)} 
                    value={this.field.field.value} 
                    rows={this.rows}
                    cols={this.cols}
                    className="text-field" 
                 />             
                {/* <Error error={this.field.field.error}/> */}
            </div>
        );
    }
}
