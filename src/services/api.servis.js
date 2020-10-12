
// var firebaseConfig = {
//     apiKey: "AIzaSyAYOEoI1gxCQ9p3Ncj7sIDe9zZeY9DvNHM",
//     authDomain: "asome-todos.firebaseapp.com",
//     databaseURL: "https://asome-todos.firebaseio.com",
//     projectId: "asome-todos",
//     storageBucket: "asome-todos.appspot.com",
//     messagingSenderId: "1086182655557",
//     appId: "1:1086182655557:web:c08775b3cb2a22fc5f052c"
// };
// Initialize Cloud Firestore through Firebase


//cloud firebase initialization
function initDataBase() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAYOEoI1gxCQ9p3Ncj7sIDe9zZeY9DvNHM',
        authDomain: 'asome-todos.firebaseapp.com',
        projectId: 'asome-todos'
    });
    return firebase.firestore();
}

// add element to dataBase selector = documentName, id = id = name, style = ccs > class;
export class AddCategoryDataBase {
    constructor(selector) {
        this.selector = selector;
    }

    add (name, ident, style) {
        const category = db.collection(this.selector);

        category.doc(name).set({
            id: ident,
            name: name,
            style: style
        })
    }
}

//get element from dataBase || get all doc
export class GetDataBase {

    constructor(selector) {
        this.selector = selector;
    }

    getBase(docName) {
        let data = [];

        if (!docName) {
            db.collection(this.selector).get()
            .then(function(querySnapshot) {
                querySnapshot.forEach( doc => data.push(doc.data()));
            });
        } else {
            db.collection(this.selector).doc(docName).get()
            .then(function(doc) {
                if (doc.exists) {
                    oneDoc.push(doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
        console.log(data); 
    }    
}

const db = initDataBase();