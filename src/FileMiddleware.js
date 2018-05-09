export const FileMiddleware = (call, next, abort) => {
    if (call.name === "updateFile") {
      const file = call.args[0].files[0];
      if(file && file.type.toLowerCase() !== "application/pdf"){
        alert('סוג הקובץ לא מורשה');
        return abort('סוג הקובץ לא מורשה');
      }
    }
    if (call.name === "updateValue") {
        if(call.args[0]==="notValid"){
            call.args = "";
            return abort('notValid');
        }
      }
    next(call);
};