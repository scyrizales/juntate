export class User {
    email: string;
    fist_name: string;
    last_names: string;
    dni: string;
    constructor(email: string, first_names: string, last_names: string, dni: string) {
        this.email = email;
        this.fist_name = first_names;
        this.last_names = last_names;
        this.dni = dni;
    }
}
