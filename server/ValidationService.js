// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("mobile", userObj.mobile);
    if (result.isNotValid) { return result; }



    //check length
    result = validateLib.checkLength("firstname",userObj.firstname, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastname",userObj.lastname, 2, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("username",userObj.username, 3, 15);
    if (result.isNotValid) { return result; }




    //check mobile syntax
    result = validateLib.checkMobile("mobile", userObj.mobile);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }



    //check Password
    result = validateLib.checkPassword("Password", userObj.password, userObj.password2);
    if (result.isNotValid) { return result; }



    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
    validateUser
}
