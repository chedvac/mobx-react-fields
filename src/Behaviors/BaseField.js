export default class BaseFieldBehaviors {
    constructor(field) {
        this.field = field;

        // @observable $value;
        // @observable $label;
      }
         
      onChange(newValue) {
       // this.field.validate();
       // this.field.isValid ? this.field.update(newValue):'';
       this.field.updateValue(newValue)
    }; 
    
}

