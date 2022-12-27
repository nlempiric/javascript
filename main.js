// console.log('hello world');
// let a=10;
// var b=15;
// var c;
// console.log('a:',a);
// console.log('b:',b);
// console.log(c);
// console.log('i love js');


// const name='ram';
// const fname='sita';
// const result='the name is '+name+' and '+fname;
// console.log(result);

// let name1=undefined;
// console.log(name1);

// const number = null;
// console.log(number);

// const symb1=Symbol();
// const sym2 = Symbol('foo');
// const sym3 = Symbol('foo');

// console.log(symb1);
// console.log(sym2);
// console.log(sym3);


// let x=5;
// let y=10;
// console.log(x+y);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[1]);
// cars[1]='riya';
// console.log(cars[1]);cars.push('nena');
// console.log(cars);

// //Exponentiation
// let x = 5;
// let z = 4 ** 2;
// console.log(z);

// //pow
// let x = 3;
// let z = Math.pow(x                   ,2);
// console.log(z);

// let x = 100 + 50 * 3;
// console.log(x);

// let x = (100 + 50) * 3;
// console.log(x);

// function myFunction(p1, p2) {
//     return p1 * p2;
//   }

// var x=myFunction(2,3);
// console.log(x);


// let x = Math.PI;
// console.log(x);
// let y = Math.sqrt(16);
// console.log(y);


// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// for(var i=0;i<itcompanies.length;i++)
// {
//     var c=0;
//     for(j=0;j<itcompanies[i].length;j++)
//     {
//         if(itcompanies[i][j]=='o')
//         {
//             c+=1;
//         }
//     }
//     if(c>1)
//     {
//         console.log(itcompanies[i]);
//     }
// }

// var itcompanies=['facebook','google','microsoft','apple','oracle','amazon']
// for(var i=0;i<itcompanies.length;i++)
// {
//     if(itcompanies[i].includes('o')&&itcompanies[i].match(/o/g).length>1)
//     {
//         console.log(itcompanies[i]);
//     }
// }


// //math functions
// console.log(Math.round(Math.PI));
// console.log((Math.floor(9.69)));
// console.log(Math.ceil(9.15));
// console.log(Math.min(-5, 3, 20, 4, 5, 10))
// console.log(Math.max(-5, 3, 20, 4, 5, 10))
// const randNum = Math.random() 
// console.log(randNum)
// console.log(Math.abs(-10))
// console.log(Math.sqrt(16));
// console.log(Math.pow(4,3));
// console.log(Math.log(2)) 
// console.log(Math.log(10))


// //string
// let space = ' '
// console.log(space);
// let name='abc'
// let fname='xyz'
// let lname='pqr'
// let fullname=name+' '+fname+' '+lname
// console.log(fullname)
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')
// console.log('Days\tTopics\tExercises')
// console.log('This is a backslash  symbol (\\)') 

// let personInfoTwo = `I am ${lname}. I am ${name}. I live in let space = ' '
// console.log(space);
// let name='abc'
// let fname='xyz'
// let lname='pqr'
// let fullname=name+' '+fname+' '+lname
// console.log(fullname)
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')
// console.log('Days\tTopics\tExercises')
// console.log('This is a backslash  symbol (\\)') 

// let personInfoTwo = `I am ${lname}. I am ${name}. I live in ${fname}.` 
// console.log(personInfoTwo)
// console.log(personInfoTwo.length)
// console.log(name.length)
// console.log(name.length)


// let string='JavaScript'
// let firstletter=string[0]
// console.log(firstletter)
// console.log(string[3])
// console.log(string.length)
// console.log(string.toUpperCase())
// console.log(string.toLowerCase())
// console.log(string.substring(0,4))
// console.log(string.substring(1,6))
// console.log(string.substring(3))
// console.log(string.substr(1,6))
// console.log(string.substr(3))

// let string = '30, Days, Of JavaScript'
// let string1='hello'
// let string2='hi'
// // console.log(string.split(' ')) 
// // console.log(string.split(','))
// console.log(string.charAt(5))
// console.log(string.charCodeAt(5))
// console.log(string.concat(string1,string2))
// console.log(string.indexOf('a'[6]))


//function
// function sqaure(number)
// {
//     return number*number;
// }
// console.log(sqaure(5))


// function fac(n) {
//     return n < 2 ? 1 : n * fac(n-1)
// }
// console.log(fac(4))


// function map(f,a)
// {
//     const result=new Array(a.length);
//     for(let i=0;i<a.lngth;i++)
//     {

//     }
// }


// function addTwoNumbers() {
//     let numOne = 2
//     let numTwo = 3
//     let total = numOne + numTwo
//     return total

// }

// console.log(addTwoNumbers())


// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }

//   console.log(sumArrayValues([1,2,3,4]))



// const areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
// }
// console.log(areaOfCircle(10))

// const anonymousFun = function() {
//     console.log(
//       'I am an anonymous function and my value is stored in anonymousFun'
//     )
//   }

// console.log(anonymousFun)

// function fullname()
// {
//     console.log('abc def')
// }
// fullname()

//fullname
// function fullname(fname,lname)
// {
//     console.log(fname+' '+lname)
// }
// fullname('abc','xyz')


//sum
// function sum(a,b)
// {
//     console.log(a+b)
// }
// sum(2,5)



//rectangle are
// function rarea(l,w)
// {
//     console.log(l*w)
// }
// rarea(2,5)

//perimeter of rectangle
// function rperi(l,w)
// {
//     p=2*(l+w)
//     console.log(p)
// }
// rperi(2,5)


// //area of circle
// function rperi(l,w)
// {
//     p=2*(l+w)
//     console.log(p)
// }
// rperi(2,5)

// a = 'JavaScript' 
// b = 10 
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b)
// letsLearnScope()

// const fruits=['apple','banana','orange']
// let b=fruits[fruits.length-1]
// console.log(b)

// console.log(typeof(fruits))
// console.log(Array.isArray(fruits))
// fruits.pop()
// console.log(fruits)
// fruits.push('cherry')
// console.log(fruits)


// function addnumber(n1,n2)
// {
//     let result=n1-n2;
//     console.log(result);
// }
// let result=123;
// addnumber(10,2)
// console.log(result)

// const expr='orange';
// switch(expr)
// {
//     case 'orange':
//         console.log('its oranges');
//         break;

//     case 'mango':
//         console.log('its mango');
//         break;
    
//     default:
//         console.log('default');
// }

// let age=prompt('what is your age?')
// if(age>10 && age <20)
// {
//     console.log('your age is lies between 10 and 20')
// }
// else if(age>20 && age<60)
// {
//     console.log('your age is between 20 and 40')

// }
// else{
//     console.log('your age is more than 60')
// }

// let age=prompt('what is your age?')
// switch(age)
// {
//     case '20':
//         console.log('your age is 20')
//         break;

//     case '30':
//         console.log('your age is 30')
//         break;
//     case '50':
//         console.log('your age is 50')
//         break;
//     default:
//         console.log('your age is more than 50')

// }

// let sum=0
// let n=prompt('enter number')
// n=Number.parseInt(n)
// for(let i=0;i<n;i++)
// {
//     sum=sum+i
//     console.log('sum:',sum)
// }


// const numbers=[12,13,14,15,16];
// let txt=""
// for(let x in numbers)
// {
//     console.log(numbers[x])
// }


// let age=prompt('how old are you');


