var firebaseConfig = {
  apiKey: "AIzaSyD78avJrvMziHSXGhlCYxuauNUYPYU0FYY",
  authDomain: "auth-demo-b78ca.firebaseapp.com",
  databaseURL: "https://auth-demo-b78ca.firebaseio.com",
  projectId: "auth-demo-b78ca",
  storageBucket: "auth-demo-b78ca.appspot.com",
  messagingSenderId: "643783462069",
  appId: "1:643783462069:web:823f42d0fde81032"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const body = document.querySelector('body');
const alert = document.querySelector('.alert');
const back = document.querySelector('.back');
const alert1 = document.querySelector('.alert1');
const admin = document.querySelector('.admin');
const account = document.querySelector('.account');
const report = document.querySelector('.report');
const homepage = document.querySelector('#home');
const loginpage = document.querySelector('#auth');
const accountpage = document.querySelector('#account');
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const txtemail = document.querySelector(".txtemail");
const txtpass = document.querySelector(".txtpass");
const about = document.querySelector('.about');
const send = document.querySelector('.send');
const post = document.querySelector('.post');
const logout = document.querySelector('.logout');

let blog = '';

post.addEventListener('click', function(){
  about.style.display = 'none';
  send.style.display = 'block';

})

logout.addEventListener('click', function(){
  
  firebase.auth().signOut();
    let al = '';
    al= `
    <div class="uk-alert-success" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Thank you for logging out</p>
    `
    alert1.innerHTML = al
  console.log("sign out")
  loginpage.style.display = 'none';
  accountpage.style.display = 'none';
  homepage.style.display = 'block';
})

login.addEventListener('click', function(){
  const email = txtemail.value;
  const password = txtpass.value;
  console.log(email);
  console.log(password);

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  typeof(errorMessage)
  console.log(errorCode)
  let al = '';
  al= `
  <div class="uk-alert-danger" uk-alert>
  <a class="uk-alert-close" uk-close></a>
  <p>${errorMessage}</p>
  `
  alert.innerHTML = al

  });
})

firebase.auth().onAuthStateChanged(function(user){
  if(user){
    let al = '';
    al= `
    <div class="uk-alert-success" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Welcome you are signed in</p>
    `
    alert1.innerHTML = al
    console.log('sign in')
    loginpage.style.display = 'none';
    accountpage.style.display = 'none';
    account.style.display = 'inline-flex';
    homepage.style.display = 'block';
   
  }else{
    account.style.display = 'none';
  }
  
});



signup.addEventListener('click', function(){
    const email = txtemail.value;
    const password = txtpass.value;
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    typeof(errorMessage)
    console.log(errorCode)
    let al = '';
    al= `
    <div class="uk-alert-danger" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>${errorMessage}</p>
    `
    alert.innerHTML = al

    });

/*     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
      var user = firebase.auth().currentUser;

      if (user){
        homepage.style.display = 'block';
      }
    }); */

    
})

window.addEventListener('load', function(){
    console.log('redd');
    const xhr = new XMLHttpRequest();      
    xhr.onreadystatechange = function (){
            if (this.readyState == 4 && this.status == 200) {
              let posts = JSON.parse(this.responseText)
              console.log(posts[0]);
              posts.forEach(function(post){ 
                blog +=`
                <div class="card uk-card-default" style="margin-top:20px" >
                <div class="uk-card-media-top">
                    <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style="width:100%; ">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">${post.title.rendered}</h3>
                    <p>${post.content.rendered.substring(0, 1000)}</p>
                    
                  </div>
            </div>
                `
                document.querySelector('.wed').innerHTML = blog;     
              })
      }
    }

      xhr.open('GET', 'http://amaka.onlinewebshop.net/wp-json/wp/v2/posts/', true);
  
    xhr.send();
})

admin.addEventListener('click', function(){
    homepage.style.display = 'none';
    accountpage.style.display = 'none';
    loginpage.style.display = 'block';

})

report.addEventListener('click', function(){
    loginpage.style.display = 'none';
    accountpage.style.display = 'none';
    homepage.style.display = 'block';

});

account.addEventListener('click', function(){
    loginpage.style.display = 'none';
    homepage.style.display = 'none';
    accountpage.style.display = 'block';

});

back.addEventListener('click', function(){

  loginpage.style.display = 'none';
  homepage.style.display = 'none';
  send.style.display = 'none';
 about.style.display = 'block';

});


