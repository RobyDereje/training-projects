// function passedOrNot(name, score, minPoint){
//     if(score >= minPoint){
//         return "Congratulations " + name + "! You have passed."
//     }else{
//         return name + ", you have failed :("
//     }
// }
// console.log(passedOrNot("Roby", 83, 50))
// function greeting(time, timeframe){
//      if(time >= 6 && time < 12 && timeframe == 'AM'){
//          return "Good Morning";
//      }else if((time == 12 || time >= 1 && time  )&& timeframe == 'AM'){
         
//      }
// }

// switch("Evening"){
//     case "Morning":
//     console.log("Good Morning!");
//     break
//     case "Afternoon":
//     console.log("Good Afternoon!");
//     break
//     case "Evening":
//     console.log("Good Evening!");
//     break
//     case "Night":
//     console.log("Good Night!");
//     break
//     default:
//     console.log("Hello")
// }
// function totalPoints(wins, draws, losses){
//   if(!Number.isInteger(wins)|| !Number.isInteger(draws) || !Number.isInteger(losses) || wins < 0 || draws < 0 || losses < 0){
//     return "This function only takes integers."
//   }
//   var points = (wins * 3) + draws;
//   return points;
// }
// console.log(totalPoints(3,-4,2))
// console.log(totalPoints(5,0,-2))
// console.log(totalPoints(0,0,1))
// console.log(totalPoints(-16,-5,2))
// var lookup = {
//         'a': "apple",
//         'b': 'banana',
//         'c': 'cinamon',
//         'd': 'death',
//         'e': 'ergonomics',
//         'f': "fragile",
//         'g': 'gorilla',
//         'h': 'hideout',
//         'i': 'igloo',
//         'j': 'jaguar',
//         'k': 'killmonger',
//         'l': 'long',
//         'm': 'mathematics',
//         'n': 'narcissitic'
//     }
// function corresponder(val){
//     if(lookup.hasOwnProperty(val)){
//         return lookup[val]
//     }
//     return 'Value is not found.'
// }
// console.log(corresponder('h'))

// var songs = [
//     {'title': 'exes',
//     'singer': 'unknown',
//     'oldies': false},
//     {'title': 'lush life',
//     'singer': 'zara larsson',
//     'oldies': false},
//     {'title': 'Coat of many colors',
//     'singer': 'dolly parton',
//     'oldies': true}
// ]
// console.log(songs[1]['singer'])

// var person = {
//     'info': {
//         'name': 'Alex',
//         'age': 23,
//         'marital status': 'single'
//     },
//     'health': {
//         'physical': {
//             'skin': 'optimal',
//             'hair': 'optimal',
//             vitalOrgans: 'sub-optimal'
//         },
//         'mental': {
//             'depression levels': 'high',
//             'anxiousness': 'high',
//             'mood swings': 'low'
//         }
//     }
// }
// console.log(person.health.physical['vitalOrgans'])
// function unfairSummator(arr){
//     var total = 0
//     for(var i = 0; i < arr.length; ++i){
//         if(arr[i]%2 == 0){
//             total -= arr[i]
//         } else{
//             total += arr[i] 
//         }
//     }
//     return total
// }

// console.log(unfairSummator([11, 8, 521, 324]))

// var myArr = [3, [2, 4]]
// var myArr2 = []
// myArr2.push(myArr.splice(0, 1))
// console.log(myArr)
// console.log(myArr2)


// function multiplyAll(arr){
//     var numbersOnly = []
//     var numbersProduct = 1
//     var product = 1
//     for(var i = 0; i < arr.length; ++i){
//         if(typeof arr[i] == 'number'){
//             numbersOnly.push(arr.splice(i, 1))
//         }
//         for(var j = 0; j < arr[i].length; ++j){
//             product *= arr[i][j]
//         }
//     }
//     for(var i = 0; i < numbersOnly.length; ++i){
//         for(var j = 0; j< numbersOnly.length; ++j)
//             numbersProduct *= numbersOnly[i][j]
//     }
//     product *= numbersOnly
//     return product
// }
// console.log(multiplyAll([3, [2, 12]]))

// var person = {
//     'name': 'Roby',
//     'age': 18,
//     'isLiterate': true
// }
// console.log(person['name', 'age'])

// function phone(OS, brand, batteryLife){
//     this.OS = OS
//     this.brand = brand
//     this.batteryLife = batteryLife
// }
// phone.prototype.dial = function(){
//     console.log('Dun Dunnnnnnnnnnn DUUUUUUNNNNNNNNNNNNNN')
// }
// var phone1 = new phone('Android', 'Samsung', '5000Ah')
// phone1.dial()
// var numberInit = 2;
// do {
//     console.log(numberInit)
//     numberInit++
// } while (numberInit > 2 && numberInit < 10)
// Setup

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];
// function lookupProfile(name, prop){
//     for(var i = 0; i < contacts.length; ++i){
//         if(contacts[i].firstName == name){
//             return contacts[i][prop] || 'No such property'
//         }
//     }
//     return 'No such Contact'
// }
// console.log(lookupProfile('Kristian', 'likesss'))
// function randomGenerator(){
//     return Math.random()
// }
// function randomWholeNumber(){
//     return Math.floor(Math.random() * 100)
// }
// function randomrange(ourMax, ourMin){
//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin
// }
// function converter(str){
//     return parseInt(str, 2) -2
// }
// function isEqual(a, b){
//     return a===b ? 'Yes, they are obviously equal genius!!!': 'No dum dum. How can they be equal'
// }
// function wadaSign(a){
//     return a > 0 ? 'positive': a == 0? 'zero': 'negative'
// }
// console.log(wadaSign(0))
// function tellA(){
//     var a = 12
//     return a    
// }
// function objFreeze(){
//     const CONSTANT = {
//         PI : 3.14
//     }
//     Object.freeze(CONSTANT)
//     try{
//        CONSTANT.PI = 100  
//     } catch(ex){
//         console.log(ex)
//     }
//     return CONSTANT.PI
// }
// const PI = objFreeze()
// console.log(PI)
// const ARROW = () => 'BAHAHAHAHAHA';
// console.log(ARROW())
// const greeting = (name1, name2) => "Hello " + name1 + " and " + name2 + "! I'm glad to meet you."
// console.log('roby'.concat(' dereje'))
// let months = ['Jan', 'Feb', 'March', 'April', 'May', "June", "July", "August", "September", "October", "November", "December"]
// var var1 = 'name';
// var var2;
// let monthsCopy;
// (function(){
//     monthsCopy = [...months]
//     months[0] = 'Meskerem'
//     var2  = var1;
//     var1[0] = 'F'
// })();
// console.log(var1, var2)
// const TEMP = {
//     tempToday: '97 F',
//     tempTomorrow: {min: '98 F', max:'123 F'}
// }
// function tomorrowsMaxTemp(obj){
//     const {tempTomorrow: {min: tomorrow}} = obj
//     return tomorrow
// }
// let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function takeAwayFirstTwo(list){
//     let [ , , , ...arr] = list
//     return arr
// }
// console.log(takeAwayFirstTwo(source))
// let sourceCopy = [...source]
// source.push(11)
// source.shift()
// console.log(source)
// console.log(sourceCopy)
// let stats = {
//     max: 100,
//     min: 34,
//     maxAchievers: 2,
//     minAchievers: 1,
//     totalTakers: 230
// }
// function statEval({max, min}){
//     return (max + min) / 2
// }
// console.log(stats)
// console.log(statEval(stats))
// function updatedGreet(name, nickname){
//     return `Hello, ${name}! Or 'shall 'I call you ${nickname}? This way/'more" ea"sier.`
// // }
// let objectCreator = (name, age, gender) => ({name, age, gender})
// console.log(objectCreator('Roby', 18, "M"))
// let test = () => ('dieeeeeeeeee')
// console.log(test())
// let obj = {
//     favnumber: 2,
//     setfav(num){
//         this.favnumber= num
//     }
// }
// obj.setfav(3)
// console.log(obj.favnumber)
// var person = function(name, age, gender){
//     this.name = name,
//     this.age = age, 
//     this.gender = gender
// }
// var Roby = new person('Roby', 18, "M")
// var Yosan = new person("Yosan", 26, "M")
// var Lemlem = new person("Lemlem", 40, "F")
// console.log(Lemlem.gender)
// function makeClass(){
//     class person{
//         constructor(name, age, gender){
//             this.name = name
//             this.age = age
//             this.gender = gender
//         }
//     }
//     return person;
// }
// var person = makeClass()
// var person1 = new person('Roby', 18, "M")
// console.log(person1)
// class person{
//     constructor(name, age, gender){
//         this.name = name,
//         this.age = age,
//         this.gender = gender
//     }
// }
// var person1 = new person('Roby', 18, 'M')
// console.log(person1)
// function temperature(){
//     class thermostat{
//         constructor(temp){
//             this._temp = 5/9 * (temp - 32)
//         }
//         get temperature(){
//             return this._temp
//         }
//         set temperature(x){
//             this._temp = x
//         }
//     }
//     return thermostat
// }
// var thermostat = temperature()
// var thermos = new thermostat(76)
// console.log(thermos._temp)
// console.log(thermos.temperature)
// thermos.temperature = 12
// console.log(thermos.temperature)
// function person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = function(){
//         return `This person's full name is ${this.firstName} ${this.lastName}.`
//     }
// }
// var person1 = new person('R;o;b;y;;', 'Dereje')
// console.log(person1.fullName())
// console.log(person1.firstName.split(';'))
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let bigBoyNumbers = numbers.filter(function(x){
//     return x > 5
// })
// console.log(numbers)
// console.log(bigBoyNumbers)
// let stringified = bigBoyNumbers.toString()
// console.log(stringified)
// numbers.forEach(function (x, y){
//     return x + numbers[y+1]
// })
// console.log(addedNumber)
// let sortthis = ['Roby', "Meron", "meron", " Jesus"]
// console.log(sortthis.sort())
// let sortthat = [4, 3, 2, 3, 2, 12]

// console.log(sortthat.sort((a,b) => a - b))
// sortthat.splice(3, 2, 8, 6)
// console.log(sortthat)
// console.log(Math.min(2, 3))
// function detectmini(str){
//     let message = []
//     for(let i = 0; i < str.length; ++i){
//         if(str.charAt(i) == str.charAt(i).toLowerCase()){
//             message.push(str.charAt(i))
//         }
//     }
//     return message.join('')
// }
// let lettersAssembled = {
//     A : 'B',
//     B : 'C',
//     C : 'D',
//     D : 'E',
//     E : 'F',
//     F : 'G',
//     G : 'H',
//     H : 'I',
//     I : 'J',
//     J : 'K',
//     K : 'L',
//     L : 'M',
//     M : 'N',
//     N : 'O',
//     O : 'P',
//     P : 'Q',
//     Q : 'R',
//     R : 'S',
//     S : 'T',
//     T : 'U',
//     U : 'V',
//     V : 'W',
//     W : 'X',
//     X : 'Y',
//     Y : 'Z',
//     Z : 'A'
// }
// function converter(str){
//     let message = str.toUpperCase()
//     let container = message.split('')
//     let container2 = []
//     for(var i = 0; i < container.length; ++i){
//         if(lettersAssembled.hasOwnProperty(container[i])){
//             container2.push(lettersAssembled[container[i]].toLowerCase())
            
//         } else {
//             container2.push(container[i])
//         }
//         console.log(i)
//     }
//     return container2
// }
// console.log(converter('abcd'))


