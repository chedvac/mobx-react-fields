import { types } from "mobx-state-tree"
import BaseStoreValue  from "../../core/BaseStoreValue"
const PersonalInformation = types.model({
    firstName:  BaseStoreValue,
    lastName:  BaseStoreValue,
    comments:BaseStoreValue
})

export default PersonalInformation;
