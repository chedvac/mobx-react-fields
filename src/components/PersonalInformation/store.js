import { types } from "mobx-state-tree"
import BaseStoreValue  from "../../core/BaseStoreValue"
import FileStore  from "../../core/FileStore"

const PersonalInformation = types.model({
    firstName:  BaseStoreValue,
    lastName:  BaseStoreValue,
    comments:BaseStoreValue,
    status: BaseStoreValue,
    CV: FileStore
})

export default PersonalInformation;
