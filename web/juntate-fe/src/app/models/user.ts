export class User {
    email: string;
    fist_name: string;
    last_names: string;
    dni: string;
    password: string;
    accountNumber: number;
    id: string;

    constructor(email: string, first_names: string, last_names: string, dni: string, password: string, accountNumber: number,
                id: string) {
        this.email = email;
        this.fist_name = first_names;
        this.last_names = last_names;
        this.dni = dni;
        this.password = password;
        this.accountNumber = accountNumber;
        this.id = id;
    }

    public toSend(): any {
       return { 'nombre': this.fist_name + this.last_names,
                'email': this.email,
                'dni': this.dni,
                'cuenta': this.accountNumber,
                'password': this.password };
    }

    // tslint:disable-next-line:member-ordering
    public static fromSend(response: any): User {
      if (!response)  {
        return null;
      }
      return new User(response.email,
                        response.nombre,
                        response.nombre,
                        response.dni,
                        '',
                        response.accountNumber,
                        response.id);
    }

}
