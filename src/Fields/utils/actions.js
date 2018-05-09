export const  updateValue = (e,field) => {
    field.updateValue(e.target.value);
}

export const updateFile = (e,field) => {
    field.updateFile(e.target);
}

export const resetFile = (field) => {
    field.resetFile();
}
