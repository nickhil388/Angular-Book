var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        object.message="default message";
        object.setMessage=function(m){
            object.message = m;
        }
        object.getMessage=function(){
           return  object.message ;
        }


        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
var i1 = Singleton.getInstance();

console.log(i1.message);

i1.setMessage("Set by instance 1");
console.log(i1.getMessage());


var i2= Singleton.getInstance();
console.log(i2.getMessage());
console.log(i2.message);

// Module Design Pattern

var module = (function(){

    var private_var = 388;

    return {
        getValue : function(){
            return private_var;
        },

        setValue : function(val){
            private_var = val;
        }
    }

})();



console.log(module.getValue());
module.setValue(999);
console.log(module.getValue());
// test
