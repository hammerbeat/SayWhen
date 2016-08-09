$(document).ready(function () {
  $.getJSON("./../json/assault.json")
    .done(function (data) {
      var keys = Object.keys(data.primary);
      var weaponArray = keys.map(function (aKey) { return data.primary[aKey]; });
      //data is the array you expected.
      var index = 0;
      weaponArray.forEach(function () {
          showCarousel(weaponArray, index);
          index += 1;
      });
      //showCarousel(weaponArray, 0);
    })
    .fail(function (error, a, b) {
      console.log("fail" + a);
    });

  function showCarousel(arr, index) {
    if (index >= arr.length) { index = 0; }
    var item = arr[index];
    if (index === 0) {
      $(".carousel-inner").append($('<div class="item active"><img src="' + item.image + '" style="max-width:147px"><h4>' + item.name + '</h4></div></div>'));
    } else {
      $(".carousel-inner").append($('<div class="item"><img src="' + item.image + '" style="max-width:147px"><h4>' + item.name + '</h4></div></div>'));
    }
    console.log($(".carousel-inner"));
  }
  //$('.carousel').carousel({interval: 2500});
});
