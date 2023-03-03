const http = require('http'); // cre muduls xoski http

const hostname = 'localhost';
const port = 3000;

const USERS = [
    {
        id:1,
        name: 'Valod',
        surname: 'Valodyan',
        email: 'Valod@mail.ru',
        password: "123",
        age: 25,
    },
    {
        id:2,
        name: 'Hakob',
        surname: 'Hakobyan',
        email: 'hakob@mail.ru',
        password: "123",
        age: 22,
    },
    {
        id:3,
        name: 'Tigran',
        surname: 'Tigranyan',
        email: 'tigran@mail.ru',
        password: "123",
        age: 35,
    },
    {
        id:4,
        name: 'Ben',
        surname: 'Benyan',
        email: 'ben@mail.ru',
        password: "123",
        age: 27,
    },
    {
        id:5,
        name: 'Gurgen',
        surname: 'Gurgenyan',
        email: 'gurgen@mail.ru',
        password: "123",
        age: 30,
    }
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
//------------------code----------------------

// //unenq  /sign-in uxarkel enq 
// const email = "gurgen@mail.ru";
// const password = "123";
// // ete ka mer bazayum tpenq


// // stugum enq 
// const getUser = (email, password) =>{
//     const user = USERS.find((user) => 
//                             user.email === email && 
//                             user.password === password);
//     return user;
// };



// const user = getUser(email, password);

//     if(!user){
//         const data = {
//             success: false, // chi hajoxvel mutqy
//             data: null,// useri tvyalnery
//         };
//         console.log('data >>>', data);
//     }else{

//         const data = {
//             success: true, 
//             data: user,// useri tvyalnery
//         };
//         console.log('data >>>', data);

//     }


//--------------------stananq id-ov--------------------------
const userId = 2;

const getUser = (userid)=>{
    
   const user = USERS.find(user => user.id === userId);
    
    return user;
}

validationUser = (user) =>{
    if(user){
        const data = {
            success: true,
            data: user,
        }
    return data;
}

       const data = {
            success: false,
            data: null,
        }

    return data;
}

const user = getUser(userId);
const validateUser = validationUser(user)


console.log(validateUser);
//----------------------------------------
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

