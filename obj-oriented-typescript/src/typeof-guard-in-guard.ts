{


    //type guard

    //typeof

    type Alphanewmeric = number | string;



    // const add = (param1: number | string, param2: number | string): number | string => {
    const add = (param1: Alphanewmeric, param2: Alphanewmeric): Alphanewmeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        }
        else {
            return param1.toString() + param2.toString()
        }
    }

    const Add = add(2, "3")
    const Add2 = add(2, 3)
    const Add3 = add("2", "3")
    console.log(Add, Add2, Add3);


    // in guard

    type NormalUser = {
        name: string;
    }


    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {

        if ('role' in user) {
            user.role
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: 'mr normal'
    }
    const adminUser: AdminUser = {
        name: 'mr admin',
        role: 'admin'
    }

    getUser(normalUser)
    getUser(adminUser)
    // const user = normalUser.name


}