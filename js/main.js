var config = {
    apiKey: "AIzaSyAO-MtLjicwGW2uar6Y-wlbv3XOZyN0OC4",
    authDomain: "fir-sample-dcd2c.firebaseapp.com",
    databaseURL: "https://fir-sample-dcd2c.firebaseio.com",
    projectId: "fir-sample-dcd2c",
    storageBucket: "fir-sample-dcd2c.appspot.com",
    messagingSenderId: "794168900181"
};

firebase.initializeApp(config);

var customersList = firebase.database().ref('customers/');

customersList.on('value', function(snapshot) {
    console.log(snapshot.val())
});

function loadViews(selectedMenu) {
    var selectedView = $(selectedMenu).data("custom-ref")
    $(".main-wrapper").load("./views/" + selectedView + ".html")
}

// Initialize Firebase


