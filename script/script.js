    console.log('It works!');

   /* $(document).ready(function(){
        $(".sign-up-button").click(function(){
          $(".sliding-container-2").fadeOut("slow");
          $(".sliding-container").fadeIn("slow");
        });
      });*/

      
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