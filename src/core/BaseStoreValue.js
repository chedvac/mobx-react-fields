import { types } from "mobx-state-tree"

 const BaseStoreValue = types.model("BaseStoreValue", {
    value: types.optional(types.string, ""),  
    //validations:types.maybe(types.array(types.reference(Validation)))
    
}).actions(self => {
    return{
        updateValue(newValue) {
            self.value = newValue
        },
        validate(){
            self.validations.map();
        }
      
    }
})/*.validations(self => {
    return {...self.validations}
})*/
export default BaseStoreValue