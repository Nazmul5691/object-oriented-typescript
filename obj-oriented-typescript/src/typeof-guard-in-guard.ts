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


}