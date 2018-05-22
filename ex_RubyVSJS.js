// Challenge

    // // 0.Create a new variable called user, set the value to: tom

    // let user = prompt("please enter the name")
    // console.log("Hello " + user + "!")
    
    // // 1.Write an if statement: if the user's name is tom, say 'Hello Tom'
    // if (user.toLowerCase() == "tom") {
    //     console.log(`Hello ${user}!`);
    // } else {
        
    // // 2.Add an else condition: say 'Hello someone other than Tom'
    //     console.log(`Hello someone other than Tom`)
        
    // }


    // // 3.Add a new variable called age, set the value to: 18
    // let age = 18;
    // // 4.If the user is 18, say 'welcome to the casino!'
    // if (age === 18) {
    //     console.log('welcome to the casino!')
    // }
    // // 5.Research 'prompt'. Use it in your code to ask the user for their age.
    // age = prompt("Please enter your age!");
    // // 6.If the user is less than 18 years old, use the alert method to deny entry.
    // if (age < 18) {
    //     alert("You are not a legal age yet! You can\'t enter!")
    // })

// Beast Mode

    // //1 Assign an empty array to a students variable.
    // let student = []
    // //2 Use the push method to add a student called Sarah
    // student.push("Sarah")
    // //3 Use prompt to ask the user for their name, add it to the array.
    // let ask = () => {
    //     let pushed = student.push(prompt("What is your name?"))
    //     // console.log('You entered ' + pushed)
    //     //5 Loop through the array and use the alert method to read each user back to the user.
        
    // }
    // //4 Use a loop to ask the user for 3 names, add them all to the array.
    // for (let i = 1 ; i <= 3 ; i++) {
    //     ask()
    //     alert('You entered ' + student[i])
    // }
    // console.log(student)

// Beast Mode ++

    //1 Store hashes in your students array
    let arrayStudent = [
        {
            "name" : "Bashir",
            "age"  : 35
        },
        {
            "name" : "Egmund",
            "age"  : 20
        },
        {
            "name" : "Baldur",
            "age"  : 23
        },
        {
            "name" : "Tyr",
            "age"  : 25
        }
        
    ]
    //2 Each student should have a name and age property.

    // console.log(arrayStudent)
    for (let i in arrayStudent){
        console.log('Name : ' + arrayStudent[i].name + '\t|\tAge : ' + arrayStudent[i].age)
    }