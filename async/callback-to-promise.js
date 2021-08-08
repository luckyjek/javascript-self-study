//Classback Hell exmaple

class UserStorage {
  loginUser(id, password) {

    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if (
            (id === "ellie" && password === "dream") ||
            (id === "coder" && password === "academy")
        ) {
            resolve(id);
        } else {
            reject(new Error("not found"));
        }
    }, 2000);
    });
    
  }

  //사용자의 데이터를 받아서, admin or gest라던지의 역할들을 
  //서버엑 다시 요청해서 받아오는 api
  getRoles(user){
    return new Promise((resolve,reject)=>{
      setTimeout(() =>{
        if(user ==='ellie'){
            resolve({name:'ellie', role:'admin'});
        }else{
          reject(new Error('no access'));
        }
    },1000);
    })

  }
}


// const name = prompt('input your name');
// alert(`hello + ${name}`);

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=> alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);





// userStorage.loginUser(id, password, 
//   user=>
// {
// userStorage.getRoles(user, (userWithRole)=>
// {
//   alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
// },
// error=>
// {
//   console.log(error)
// }
// )
// }
// ,
// error=>{
//   console.log(error)
// }
// );
