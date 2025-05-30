// let dateCounter = new Date("August 12, 2025 12:00:00").getTime();
// let process = setInterval(function(){

//     currTime = new Date().getTime();
//     distance = dateCounter - currTime;

//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // document.getElementById("counter").innerHTML = `${days} Days / ${hours} Hours / ${minutes} Minutes / ${seconds} Seconds`;

//     document.getElementById("counter").innerHTML = days + "   Days - " + hours + "   Hours  <br><br>" + minutes + "   Minutes  - " + seconds + "   Seconds ";
// })


let countdown;

    function startCountdown() {
      clearInterval(countdown); 

      let name = document.getElementById("userName").value;
      let userDate = document.getElementById("dateInput").value;

      if (!name || !userDate) {
        alert("Please enter your name and select a date.");
        return;
      }

      let targetTime = new Date(userDate).getTime();

      document.getElementById("greeting").innerText = "Hello " + name + ", your countdown is:";

      countdown = setInterval(function () {
        let now = new Date().getTime();
        let distance = targetTime - now;

        if (distance <= 0) {
          clearInterval(countdown);
          document.getElementById("counter").innerText = "Countdown Completed";
          return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("counter").innerText =
          days + " Days - " + hours + " Hours - \n\n"  + minutes + " Minutes - " + seconds + " Seconds";
      }, 1000);
    }