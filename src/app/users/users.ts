import { Iusers } from './users.interface';

export class GetUsersData {
    constructor(){

    }
    getAllUser(): Iusers[]{
        return[
            {id: 1, fname: "Ramesh", lname: "Bogati", email: "ramesh@gmail.com", phone: 9841562364, address: "Ghattekulo-32, Kathmandu", status: 0},
            {id: 2, fname: "Dinesh", lname: "Bade", email: "dinesh@gmail.com", phone: 9841852364, address: "New Baneshwor-02, Kathmandu", status: 0},
            {id: 3, fname: "Nikesh", lname: "Maharjan", email: "nikesh@gmail.com", phone: 9813552364, address: "Baudha-01, Kathmandu", status: 0}
        ]
    }
}