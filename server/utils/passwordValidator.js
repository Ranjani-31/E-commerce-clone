const validator = require('validator');

 function passwordValidator(password, optional={min:8, max:15}){

    if (!validator.isLength(password, optional)){
        throw new Error("Password is at least 8 characters'");        

    }

    if(!/[A-Z]/.test(password)){
        throw new Error('use at lease one uppercase');
    
    }
    if (!/[a-z]/.test(password)){
        throw new Error('use at least one lowercase');
    
    }

    // if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
    //     throw new Error('use at least one special character');
                
    //     }

            
    return true;
        

    }



module.exports = passwordValidator