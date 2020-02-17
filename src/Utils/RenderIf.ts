export default (condition:boolean,ifTrue:any,ifFalse:any) => {
  if(condition){
    return ifTrue;
  }
  else{
    return ifFalse;
  }
}