
      document.getElementById("Checkbox").addEventListener("click", function (event) {
          event.preventDefault();
          var number = document.getElementById("area-circumference").value;

          if (isEmpty(number)) {
            document.getElementById("result").value = "Enter a number";
          } else if (document.getElementById("area").checked) {
            var cir = new circle(number);
            document.getElementById("result").value = cir.area();
          } else {
            var cir = new circle(number);

            document.getElementById("result").value = cir.perimeter();
          }
          console.log(number);
        });

      function circle(radius) {
        this.radius = radius;
        // area method
        this.area = function () {
          return Math.PI * this.radius * this.radius;
        };
        // perimeter method
        this.perimeter = function () {
          return 2 * Math.PI * this.radius;
        };
      }
      var cir = new circle(3);
      console.log("Area =", cir.area().toFixed(2));
      console.log("perimeter =", cir.perimeter().toFixed(2));

      function isEmpty(str) {
        return !str.trim().length;
      };