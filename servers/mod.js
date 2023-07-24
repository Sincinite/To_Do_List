// jshint esversion:6
exports.getDate = function(){
    var date=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var greet=date.toLocaleDateString("en-US",options);
    return(greet);
}