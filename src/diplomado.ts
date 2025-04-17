enum UserRole {
    ADMIN = "admin",
    GUEST = "guest"
};

interface UserInterface {
    firstName: string;
    lastName: string;
    role: UserRole;
    dni: number;
    age?: number;
};

const user: UserInterface = {
    firstName: "Angela",
    lastName: "Davis",
    role: UserRole.ADMIN,
    dni: 12345678,
    age: 30
};

let PI: number = 3.14;
let phone: string | number;
phone = 1234567890;
phone = "123-456-7890";

const tempPhone = phone as unknown as number;



const getData = ({ firstName }: UserInterface): string => firstName;

const data: Record<string, string | number | undefined> = {
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    dni: user.dni,
    age: user.age
}

type Num = 2 | 4 | 6 | 8;

const test = (num: Num): void =>{
    console.log(`The number is: ${num}`);
}

test(2);

const str = user.firstName.toLowerCase();
