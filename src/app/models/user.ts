export class UserList  {
   content: Array<User>;
   number: number;
   numberOfElements: number;
   size: number;
   totalElements: number;
   totalPages: number
}


export class User  {
    name: string = '';
    id: string = '';
    password: string = '';
    email: string = '';
    userTypeEnum: string = '';
    userStatusEnum: string = '';
    cpfCnpj: string = '';
    cellphone: string = '';
    personType: string = '';
}
