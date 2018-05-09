import { types } from "mobx-state-tree"
import axiosWrapper from '../networking/axiosWrapper'
import qs from 'qs';
import $ from 'jquery'

 const FileStore = types.model("FileStore", {
    value: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    type: types.optional(types.string, ""),
    size: types.optional(types.string, ""),
    
}).actions(self => {
    function tryPost(){
        const data = { listName: 'City' };
        const postUrl = '';
        const postSettings = {
            url: postUrl,
            method: 'POST',
            data: qs.stringify(data),
        }
        axiosWrapper(postSettings);
    }
    function uploadFile(file){
        //tryPost();
        const data = new FormData();
        data.append('file', file);
        data.append('filePayload', JSON.stringify({
            requestID: "123",
            processID: null,
            method: 'Post'
        }));
        const url = 'http://gov.forms.local/MW/File';
        axiosWrapper({
            url: url, 
            method: 'POST',
            data: data
        }).then(response => {
console.log(response.data);
        }).catch(error =>{
console.log(error);
        });
    }
    function resetFile(){
        self.value = "";
        self.name = "";
        self.type = "";
        self.size = "";
    } 
    function updateFile(newFile) {
        const file = newFile.files[0];
        if(file){
            self.value = newFile.value;
            self.name = file.name;
            self.type = file.type;
            self.size = file.size.toString();
            uploadFile(file);
        }
        else{
            resetFile();
        }
    }
    function validate(){
        self.validations.map();
    }
    return{ updateFile, resetFile, validate }
});
export default FileStore