import {initializeApp} from 'firebase/app'
import {getFirestore , collection ,getDocs, addDoc} from 'firebase/firestore'


const firebaseConfig = ({
    apiKey: "AIzaSyBpGKzH3dOHkwI2equqWICkPsby3CauxJs",
    authDomain: "products-872f6.firebaseapp.com",
    databaseURL: "https://products-872f6-default-rtdb.firebaseio.com",
    projectId: "products-872f6",
    storageBucket: "products-872f6.appspot.com",
    messagingSenderId: "492731114182",
    appId: "1:492731114182:web:0d4077ea6e2c68702e2dc7",
    measurementId: "G-Q37DRH3Q4F"
})

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// const sortAr = array.sort((a,b) => a.id > b.id ? 1 : -1);

export const products = [];
export const articles = [];

async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
}
getProducts();

async function getArticles() {
  const querySnapshot = await getDocs(collection(db, "articles"));
  querySnapshot.forEach((doc) => {
    // return doc.data();
    articles.push(doc.data())
  });
}
getArticles();


// const newAr = [];
// for(let i = 0;i<array.length;i++){
//   newAr.push({
//     name: array[i].name,
//     id: i+1,
//     category: array[i].category
    
//   })
// }
// console.log(newAr);



// export default products;
// export const articles =  article; 
// export const product =  products; 

// for(let i =0;i<products.length;i++){
  // console.log(products[i]);
// }

// async function get(){
//   try {
//     const docRef = addDoc(collection(db, "products"), {
//       id:6,
//       device: "RTX-3050Ti",
//       category: "third",
//     });
//     console.log("Document written with ID: ", (await docRef).id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
//   }


// get();

// const products = [];


// async function sendProducts(){
//     try{
//     const prod = ref(db, 'products/');
//     onValue(prod,(snapshot) => {
//         const data = snapshot.val();
//         products.push(
//             {
//                 id:data.item.id,
//                 device:data.item.device,
//                 category:data.item.category
//             },
//             {
//                 id:data.item1.id,
//                 device:data.item1.device,
//                 category:data.item1.category
//             },
//             {
//                 id:data.item2.id,
//                 device:data.item2.device,
//                 category:data.item2.category
//             },
//             {
//                 id:data.item3.id,
//                 device:data.item3.device,
//                 category:data.item3.category
//             },
//             {
//                 id:data.item4.id,
//                 device:data.item4.device,
//                 category:data.item4.category
//             },
//             {
//                 id:data.item5.id,
//                 device:data.item5.device,
//                 category:data.item5.category
//             }
//             )
//         });   
//     }catch(error){
//         console.log(error);        
//     } 

// } 
//     sendProducts()