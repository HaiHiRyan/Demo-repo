
this.car="Honda Civic  w / Ugly Spoiler";
 var marksGarage = {
     car: "Aston Martin",
     getCar: function(){
         return this.car;
     }
};

 console.log(marksGarage.getCar());
 var storeGetCarForLater = marksGarage.getCar;

 //Now work is over and Mark wants his car
 console.log(storeGetCarForLater()); //WTF

 var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
 console.log(theRealGetCarFunction());