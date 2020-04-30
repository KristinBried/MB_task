    console.log('It works!');
    
      $(document).ready(function() {
        $(".sign-up-button").click(function() {
          $(".sliding-container-2").fadeOut(1000);
          $(".sliding-container").fadeIn(1000, function() {
            $(".sliding-container").animate({
              "right": "100%"
            }, 1000)
          })
        })
      })

      $(document).ready(function() {
        $(".login-up-button").click(function() {
            $(".sliding-container-2").fadeIn(1000);
            $(".sliding-container").fadeOut(1000, function() {
              $(".sliding-container").animate({
                "left": "100%"
              }, 1000);
              location.reload();
            })
          })
      })

      function redirectPage() {
        window.location.href = "sorry-page.html";
      }

      function changeImage(a) {
        document.getElementById("mail-icon").src=a;
      }

      function changeImage2(a) {
        document.getElementById("pass-icon").src=a;
      }

      function changeImage3(a) {
        document.getElementById("mail-icon2").src=a;
      }

      function changeImage4(a) {
        document.getElementById("pass-icon2").src=a;
      }

      function changeImage5(a) {
        document.getElementById("name-icon").src=a;
      }
