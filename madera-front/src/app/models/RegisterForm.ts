export class RegisterForm {
    email: string
    password: string
    passwordConfirmation: string
    idCity: string
    students: {
        firstName: string
        lastName: string
        birthDate: Date
    } = {
            firstName: null,
            lastName: null,
            birthDate: null
        }

    invalidFields: string[] = []

    validatePassword(): boolean {
        if (
            this.password
            // && this.password === this.passwordConfirmation
            && this.password.length >= 8 // must be at least 8 characters long
            && /[A-Z]/.test(this.password) // must contain at least one uppercase
            && /[a-z]/.test(this.password) // must contain at least one lowercase
            && /[0-9]/.test(this.password) // must contain at least one number
        ) {
            return true
        }
        this.invalidFields.push('password')
        return false
    }

    validatePasswordConfirmation(): boolean {
        if (
            this.password && this.passwordConfirmation
            && this.password === this.passwordConfirmation
        ) {
            return true
        }
        this.invalidFields.push('passwordConfirmation')
        return false
    }

    validateCity(): boolean {
        if (this.idCity && parseInt(this.idCity) > 0) {
            return true
        }
        this.invalidFields.push('idCity')
        return false
    }

    validate(): boolean {
        this.invalidFields = []
        return (
            this.validatePassword()
            && this.validatePasswordConfirmation()
            && this.validateCity()
        )
    }
}