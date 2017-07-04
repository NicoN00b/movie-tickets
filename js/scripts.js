//Ticket constructor

function Ticket(movie, time, age, discount) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.discount = discount;
}

//this is a prototype that defines the price method
Ticket.prototype.price = function() {
  return 4 * this.movie * this.time * this.age * this.discount;
}






$(document).ready(function() {
//starts everything off with a click of the submit button

  $("form#input").submit(function(event) {


    event.preventDefault();
//this takes input from the form fields and creates numbers from the submitted strings and assigns each to a variable

    var inputtedMovie = parseInt($("input:radio[name='movie']:checked").val());
    var inputttedTime = parseInt($("select#time").val());
    var inputtedAge = parseInt($("select#age").val());
    var inputtedDiscount = parseInt($("select#discount").val());

//this creates a variable that is a call on the Ticket constructor in biz end logic, and passes user input variables in as parameters

    var newTicket = new Ticket(inputtedMovie, inputttedTime, inputtedAge, inputtedDiscount);

//this notifies us in the console when we get to this step

    console.log(newTicket);

//"special sauce" this adds text in the span with showPrice Id and runs the prototype function price on the newly created Ticket object
    $("#showPrice").text(newTicket.price());
  });
});
