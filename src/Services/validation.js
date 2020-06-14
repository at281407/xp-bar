const errorMessages = {
    isRequired: "*Field is required.",
    passwordFormat: "Password must be at least 6 characters"
}

export const validation = {
    username: function(input){
        let errors = input.length <= 0 ? errorMessages.isRequired : "";  
        return errors;
    },
    email: function(input){
        let errors = input.length <= 0 ? errorMessages.isRequired : "";  
        return errors;
    },
    password: function(input){
        let errors = input.length === 0 ? errorMessages.isRequired : "";  
        errors = input.length > 0 && input.length < 6 ? errorMessages.passwordFormat :  "";
        return errors;
    }
}