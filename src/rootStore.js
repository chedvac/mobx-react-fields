import PersonalInformation from './components/PersonalInformation/store';

import { types } from "mobx-state-tree";

const RootStore = types.model({
    userDetails:PersonalInformation
})
export default  RootStore.create({
    userDetails:{firstName:{value:"",validations:[null]},lastName:{value:"",validations:[null]},comments:{value:"",validations:[null]},status:{value:""}}
})