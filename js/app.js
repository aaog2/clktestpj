const firebaseConfig = {
  apiKey: "AIzaSyBi3VwiqESUXYmgiAnTWAgfCIjIrP6SGDM",
  authDomain: "clickcount-c1c25.firebaseapp.com",
  databaseURL:
    "https://clickcount-c1c25-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clickcount-c1c25",
  storageBucket: "clickcount-c1c25.appspot.com",
  messagingSenderId: "1029027253413",
  appId: "1:1029027253413:web:4881c4ee7a71dc27a3914c",
};

firebase.initializeApp(firebaseConfig);

const databasefire = firebase.database();
const rootref = databasefire.ref("gwgclk");

const mainpagebtn = document.querySelector(".mainpagebtns");

mainpagebtn.addEventListener("click", () => {
  mainpagetotalclk("user/", "mainpage/", "totalclk");
  perhourclk(1);
});

function mainpagetotalclk(ref, pageid, typeofclk) {
  firebase
    .database()
    .ref(ref + pageid + typeofclk)
    .set(firebase.database.ServerValue.increment(1));
}

// mainpagetotalclk("user/", "mainpage/", "totalclk");

let data = null;

function perhourclk(num) {
  var min = num;
  var now = new Date().getTime();
  console.log(now);

  let setupTime = localStorage.getItem("time");
  if (setupTime == null) {
    mainpagetotalclk("user/", "mainpage/", "perhourclk");
    localStorage.setItem("time", now);
  } else {
    if (now - setupTime > min * 60 * 1000) {
      localStorage.clear();
      mainpagetotalclk("user/", "mainpage/", "perhourclk");
      localStorage.setItem("time", now);
    }
  }
}
