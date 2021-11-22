
export class ValidationMessages {
    static loginMessages = {
        email: {
            required: 'Email is required',
            pattern: 'Invalid email'
        },
        password: {
            required: 'Password is required',
        },
        name: {
            required: 'Name is required',
            minlength:'Name should be atleast 10 characters long',
            maxlength:'Name cannot exceed 20 characters'
        },
        dateofbirth: {
            required: 'Age is required',
        },
        age: {
            required: 'Age is required',
        },
        number: {
            required: 'Age is required',
        },
    }
    
}