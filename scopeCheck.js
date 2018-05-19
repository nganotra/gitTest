function test(f) {
    
    f();

}


function getUserDetails(user) {
    console.log(1111);
   console.log( test(function() {
        var checkScope =1;
        console.log(user);
        // console.log(this);
         return user;
        }) );
};
var abc = getUserDetails('nitesh');
console.log(abc);
// console.log(checkScope);
