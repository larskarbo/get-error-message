export function getErrorMessage(err: any): string {
  if (!err) {
    return null;
  }

  let response = err.response;

  if (response) {
    if (typeof response === "string") {
      return response;
    } else if (response.data) {
      if (response.data.message) {
        return response.data.message;
      }
      if (response.data.error?.message) {
        return response.data.error.message;
      }
      if (typeof response.data == "string") {
        return response.data;
      }
    }
  }

  
  if (typeof err === "string") {
    return err;
  }
  
  if(err?.message) {
    let dataString = ""
    
    if(response?.data){
      
      dataString = " data ➡️ " + JSON.stringify(response.data, null, 2);
    }
    return err.message + dataString;
  }
  

  return "Unknown Error"
}
