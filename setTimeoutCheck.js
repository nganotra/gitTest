  function getUserDetails(user, cb) {
    console.log(1111);
    setTimeout(function() {
         return user;
         cb();
        }, 1000)
};
var abc = getUserDetails('nitesh',callBackCheck);
function callBackCheck () {
    
    console.log(abc);
}