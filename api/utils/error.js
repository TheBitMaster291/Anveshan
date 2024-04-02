export const errorHandler=(statusCode,message)=>{
    const error=new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error;
};// This is for custom errors like if we want to generate error for too short/long passwords etc
