// classes

        // let pers1 = {
        //     firstname: "John",
        //     lastname: "Smith",
        //     fullName: function(){
        //         return 'My fullname is ' + this.firstname+' '+this.lastname
        //     }
        // }

        // console.log(pers1.firstname);
        // console.log(pers1.lastname);
        // console.log(pers1.fullName());

        // document.getElementById("mypara").innerHTML = "Paragraph has changed! This is from Javascript"


// function person

        // function Person(firstName, lastName) {
        //     this.name = {}
        //     this.name.first = firstName
        //     this.name.last = lastName
        // }

        // Person.prototype.fullName = function() {
        //     return this.name.first + ' ' + this.name.last
        // }

        // person1 = new Person('Burt','Lancaster')
        // person2 = new Person('Charlie','Chocolate')
        
        // inspect(person1)
        // inspect(person2)
        
        // Person.prototype.manager = false
        
        // inspect(person1)
        // inspect(person2)


        // // Hoisted, https://www.w3schools.com/js/js_hoisting.asp
        // function inspect(p) {
        //     console.log(p.name.first)
        //     console.log(p.name.last)
        //     console.log(p.fullName())
        // }

// Callbacks

        // function getUsersName(callback) {
        //     const usersName = prompt('what is your name?')
        //     callback(usersName)
        // }

        // function sayHello(name) {
        //     alert('Hello' + name)
        // }

        // getUsersName(sayHello)
        // getUsersName(function(name) {
        //     alert("Nice to meet you, " + name)
        // })

        // // this is the same function as above
        // getUsersName((name) => {
        //     alert("Nice to meet you, " + name)
        // })


        // let f = (one, two, three) => {
        //     console.log(one, two, three)
        // }

        // let f = value => { return value + 1 }
        // alert(f(665))


        // function stepOne(cb) {
        //     // do something
        //     cb()
        // }

        // function stepTwo(cb) {
        //     // do something
        //     cb()
        // }

        // stepOne(() => { console.log('finished') })
        // stepTwo()


// Buttons

    // let button = document.querySelector('button');
    // let cb = function;

// Callback Hell (Monday, 21 May, 2018)

    // Example 1

        function doSomething(callback){
            let delay = 1300 // milliseconds
            let func = function(){
                let result = [1,2,3]
                console.log('doSomething()')
                callback()
            }
            // setTimeout has a (func,miliseconds) arguments to pass in
            console.log('start')
            setTimeout(func,delay)
        }

        // this is to be called after finished
        let finished = function (result) {
            console.log('done')
        }

        doSomething(finished)


    // Example 2


        function error(message) {
            console.log(`error: ${message}`)
        }

        function doSomething (success,failure) {
            const result = Math.random()
            if(result > 0.5) {
                success(result)
            } else {
                failure(result)
            }
        }
        
        doSomething(
            function(result) {
                doSomethingElse()
            },
            error
        )

// Promises