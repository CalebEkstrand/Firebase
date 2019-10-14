const firebaseConfig = {
    apiKey: "AIzaSyCn7WzPiOpswxEvm-PJqqka3-mq7x6ZFSI",
    authDomain: "test-f5c77.firebaseapp.com",
    databaseURL: "https://test-f5c77.firebaseio.com",
    projectId: "test-f5c77",
    storageBucket: "",
    messagingSenderId: "812860357185",
    appId: "1:812860357185:web:cb116edc735194555364c0"
  };
  
  firebase.initializeApp(firebaseConfig);

//References the database
var database = firebase.database();
// var newTrain = {
//     pieceOfShit:"motherFucker"
// }
// database.ref().push(newTrain);



$(document).ready(function(){
    $("#submitButton").on("click", function(event){
        event.preventDefault()
        var newTrain = {

             trainName:$("#trainName").val(),
             destination:$("#destination").val(),
            firstTrain:$("#firstTrain").val(),
             frequency:$("#frequency").val()
        }
        $("#trainName").val("")
        $("#destination").val("")
        $("#firstTrain").val("")
        $("#frequency").val("")
        database.ref().push(newTrain);
        // populateTable()
        console.log(trainName, destination, firstTrain, frequency)
    })
      console.log(moment())
      function minAway(frequency, firstTrain){
        var frq = parseInt(frequency)
        var convertedFirstTrain = moment(firstTrain,"HH:mm").format("X")/60
        var convertedNow = moment().format("X")/60
        console.log(convertedNow - convertedFirstTrain)
      }
      minAway(5,"9:10")
        database.ref().on("value",function(snapshot){
            
            // console.log(snapshot.val())
            for (var key in snapshot.val()) {
                var obj = snapshot.val()[key]
                var tableRow = $("<tr>")
                tableRow.append("<td>"+ obj.trainName + "</td>")
                tableRow.append("<td>"+ obj.destination + "</td>")
                tableRow.append("<td>"+ obj.frequency + "</td>")
                tableRow.append("<td>"+ "placeholder" + "</td>")
                tableRow.append("<td>"+ "placeholder" + "</td>")
                // for (let [key2, value] of Object.entries(obj)) {
                //     tableRow.append("<td>"+ obj[key2] + "</td>")
                     $("#trainBody").append(tableRow)
                 
                //   }
                  
                // tableRow.append("<td>").text(obj.destination)
              }
        })
    // }
})