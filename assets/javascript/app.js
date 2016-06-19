//  link to Firebase
var trainData = new Firebase("https://trainnybx.firebaseio.com/");

 
 
    // Add start 
  $("#addsubmitBtn").on('click',function(){
      
        // Set form values to variables
      var trainName = $("#trainNameInput").val().trim();
      var trainDestination = $("#destinationInput").val().trim();
      var trainStart = moment($("#trainInput").val().trim(),"HH:mm").subtract(10, "years").format("X");
      var frequency = $("#frequencyInput").val().trim();
      
      // set form variables to trainInfo to push to firebase
      
      var trainInfo = {
            name: trainName,
            destination: trainDestination,
            trainStart: trainStart,
            frequency: frequency,

       };

      //pushing train info to firebase
     trainData.push(trainInfo);

      console.log(trainInfo.name);
      console.log(trainInfo.destination); 
      console.log(trainInfo.start);
      console.log(trainInfo.frequency)

      // Alert
         alert("Train added successfully!");

       // clear text-boxes
        $("#trainNameInput").val("");
        $("#destinationInput").val("");
        $("#trainInput").val("");
        $("#frequencyInput").val("");
    
    // stop Refreshing
   return false;

});
  // Create Firebase event for adding the  
  
  trainData.on("child_added", function(childSnapshot, prevChildKey){

      console.log(childSnapshot.val());


      // Store everything into a variable.

      var trainName = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().destination;
      var trainStart = childSnapshot.val().trainStart;
      var frequency = childSnapshot.val().frequency;

   // Create Firebase event for adding the  
  

    // Store everything into a variable.
    

      // Employee Info
      console.log(trainName);
      console.log(trainDestination);
      console.log(arrival);
      console.log(frequency);


       var differenceTimes = moment().diff(moment.unix(trainStart), "minutes");
       var remainder = moment().diff(moment.unix(trainStart), "minutes") % frequency ;
       var minutes = frequency - remainder;

       var arrival = moment().add(minutes, "m").format("hh:mm A"); 

        console.log(minutes);
        console.log(arrival);
        console.log(moment().format("hh:mm A"));
        console.log(arrival);
        console.log(moment().format("X"));



// Append train data to table 
   $("#trainSchedule > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");

      
  });
















