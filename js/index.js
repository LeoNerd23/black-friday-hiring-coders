$(function () {
  ({
    init: function () {
      this.getCountdown();
      this.local();
    },

    getCountdown() {
      var end = new Date("11/10/2021 10:1 AM");

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;

      function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
          clearInterval(timer);
          $("#time__countdown_header").text("EXPIRED!");

          return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        $("#js-countdown-days-header").text(days);
        $("#js-countdown-hours-header").text(hours);
        $("#js-countdown-minutes-header").text(minutes);
        $("#js-countdown-seconds-header").text(seconds);
      }

      timer = setInterval(showRemaining, 1000);
    },

    local() {

        

        $("#button").on("click", function (){

            let email = document.querySelector("#email");

            if (email.value == "") {
                alert("E-mail não informado.");
            }else{
                alert('E-mail cadastrado com sucesso.')
            }

            let dados = JSON.parse(localStorage.getItem("dados") || '[]')

            dados.push({
                email: email.value
            })

            localStorage.setItem("dados", JSON.stringify(dados));  
            
        });

    },
  }.init());
});
