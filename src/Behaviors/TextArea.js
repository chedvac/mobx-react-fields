export default class TextareaBehaviors {
    constructor(field) {
        this.field = field;
      }
         
      onChange = function(newValue) {
        this.field.validate();
        this.field.isValid ? this.field.update(newValue):'';
    }; 
    
}
