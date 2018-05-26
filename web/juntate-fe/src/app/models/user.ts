export class User {
    email: string;
    fist_name: string;
    last_names: string;
    dni: string;
    password: string;
    accountNumber: number;

    constructor(email: string, first_names: string, last_names: string, dni: string, password: string,, accountNumber: number) {
        this.email = email;
        this.fist_name = first_names;
        this.last_names = last_names;
        this.dni = dni;
        this.password = password;
        this.accountNumber = accountNumber;
    }

    public toSend(): any {
       return { 'nombre': this.fist_name + this.last_names,
                'email': this.email,
                'dni': this.dni,
                'cuenta': this.accountNumber,
                'password': this.password };
    }

}
