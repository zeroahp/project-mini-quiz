const API_DOMAIN = "http://localhost:3006/";

export const getAPI = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, options);
    const result = await response.json();
    return result;
}


export const postAPI = async (path, options) =>{
    const response = await fetch(API_DOMAIN + path,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(options) 
    });
    const result = await response.json();
    return result;
}

export const deleteAPI = async (path) =>{
    const response = await fetch(API_DOMAIN + path,{
        method : "DELETE",
    });
    const result = await response.json();
    return result;
}