// const usr ={
//     id:1,
//     name:"Juan",
//     lastname:"Lopez",
//     cc: 1213456,
//     cel:"3021",
//     birthday:"12-09-1993",
//     getFullName(){
//         return '${ this.name} ${this.lastname}'
//     }
// }

// ASI SE LLAMAN LOS ATRIBUTOS DEL OBJETO
// const name = usr.name;
// const lastname = usr.lastname;
// const cc = usr.cc;

//-------------------------------------
// DESTRUCTURAR UN OBJETO
//const {cc,name,lastname, ...data}=usr;//El data se usa para llamar los otro atributos que no fueron invocados
//console.log(name,lastname,cc,data);

//-------------------------------------
//DESTRUCTURAR UN ARRAY
// const arrayData = [6,7,8,9];
// const [,,,q4] = arrayData;
// console.log(q4);

//Otro ejemplo con una funcion

// const formatterUsr = ({cc,birthday}) => {
//     return 'La cedula ${cc} cumple ${birthday}'
// }

// console.log(formatterUsr(usr));

// const suma=(a,b) => a*b;

// console.log('Total',suma(1,5))
//--------------------------------------------------

//ACA SE LLAMA UN USUARIO DE LA BASE DE DATOS
const users=[
    {
    id:1,
    name:"Juan",
    lastname:"Lopez",
    cc: 1213456,
    cel:"3021",
    birthday:"12-09-1993",

    getFullName(){
        return '${ this.name} ${this.lastname}'
    }
},
{
        id:2,
        name:"Lupe",
        lastname:"Mesa",
        cc: 333333,
        cel:"324565",
        birthday:"14-09-1993",

        getFullName(){
            return '${ this.name} ${this.lastname}'
        }
    }
]

//ACA SE HACE UN EJEMPLO DE UN CALLBACK----------------------------
// const getUserById=(id,callback)=>{

// const usr = users[0];
// setTimeout(()=>{//Función que hace una espera de 2000
//     callback(usr);
// },2000)
// }

// getUserById(1,(usr)=>{
//     console.log("Nombre: ",usr.name);
//     console.log("cc: ",usr.cc);
// })


//WHISHLIST

const wishlists = [
    {
        userId:1,
        wishlist:[1,9,17]
    }
]

//PROMESAS-----------------

const getUserById = (userId)=>{
    return new Promise  ((resolve,reject)=>{
        const usr = users.find(user => user.id == userId);
        (usr)? resolve(usr) : reject('User not found ${userId}');
    })
}

const getWishlistById = (userId) => { //Se agrega un item al objeto usuario que se llama whislit =[1,9,177]
    return new Promise((resolve,reject)=>{
        const wishlist = wishlists.find(wishlist => wishlist.userId == userId);
        (wishlist)? resolve(wishlist) : reject(`Whislit not founded ${userId}`);
    })
}

//CONEXION SERVIDOR
const id =1;


// getUserById(id).then(profile => {
//     getWishlistById(id).then(response => {
//         profile.wishlist = response.wishlist;
//         console.log(profile);
//     }).catch(err => console.log(`getWhishlist error: ${err}`));
// }).catch(err => console.log(`getUserById error: ${err}` ));

//FORMA MAS FACIL DE HACER EL ANTERIOR  114-119

// let profile ={};
// getUserById(id).then(response =>{
//     profile=response;
//     return getWishlistById(id)
// }).then(response => {
//     profile.wishlist = response.wishlist;
// }).then(() =>{
//     console.log(profile);
// }).catch(err => console.log(`Error: ${err}`));

//METODOS ASYNC Y AWAI---------------------------------

const getFullProfile = async(userId) =>{
    const profile = await getUserById(userId);
    const wishlistResponse = await getWishlistById(userId);
                                   

    profile.wishlist = wishlistResponse.wishlist;

    console.log(profile)
}
getFullProfile(id);