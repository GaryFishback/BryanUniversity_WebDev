
        // Create an object:
        var shopper = {
          nameShopper: "Walny",
          numberOfItems : 7,
          groceryCart : ["Milk", " Sugar", " Bread", " Eggs"],
          moreThanThreeItems: true,
          summaryFunction : function() {
            return this.nameShopper + " has a total of " + this.numberOfItems + " items in the shopping cart, including: " + this.groceryCart + ".";
          }
        };
        console.log(shopper)
        console.log(shopper.summaryFunction)
        // Display data from the object:
        //document.getElementById("Shopper").innerHTML = shopper.summaryFunction();