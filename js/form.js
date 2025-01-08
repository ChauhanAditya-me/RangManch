function sendEmail() {
    var name = $("#Name").val();            
    var email = $("#Email").val();
    var msg = $("#Message").val();

    var body = "Name : " + name + "    " + "Email :" + email +  "    " +"Message : " + msg;


    email.send("service_ygycc191","template_21ttgmp1",{
      from_name: "Rangmanch Website",
      to_name: "Rangmanch",
      message: body,
      }).then(
      message => {
        alert("Message Has Been Sent, We Will Contact You Soon.");
      }
    );
}

function print(x) {
  console.log(x + "is prime");
}
function isprime(x) {
  for (var i=2; i<x; i++) {
    if (x%i==0) {
      return false;
    }
  }

  return print(x);
}
