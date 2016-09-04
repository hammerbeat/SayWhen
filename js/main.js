$(document).ready(function () {
  $.getJSON("./../json/assault.json")
    .done(function (data) {
      var soldierClass = data.soldier;
      var soldierIcon = data.icon;

      function getRandomArrayNumber(aArray) {
        return Math.floor(Math.random() * (aArray).length);
      }

      var primaryWeapon = Object.keys(data.primary);
      var weaponArray = primaryWeapon.map(function (aKey) { return data.primary[aKey]; });
      var posPrimary = getRandomArrayNumber(weaponArray);

      var primaryScopes = Object.keys(weaponArray[posPrimary].scope);
      var scopeArray = primaryScopes.map(function (aKey) { return weaponArray[posPrimary].scope[aKey]; });
      var posScope = getRandomArrayNumber(scopeArray);

      var primaryAt1 = Object.keys(weaponArray[posPrimary].attachment1);
      var at1Array = primaryAt1.map(function (aKey) { return weaponArray[posPrimary].attachment1[aKey]; });
      var posAt1 = getRandomArrayNumber(at1Array);

      var primaryAt2 = Object.keys(weaponArray[posPrimary].attachment2);
      var at2Array = primaryAt2.map(function (aKey) { return weaponArray[posPrimary].attachment2[aKey]; });
      var posAt2 = getRandomArrayNumber(at2Array);

      var sidearm = Object.keys(data.sidearm);
      var sidearmArray = sidearm.map(function (aKey) { return data.sidearm[aKey]; });
      var posSidearm = getRandomArrayNumber(sidearmArray);

      var gadgets1 = Object.keys(data.gadgets1);
      var gadgets1Array = gadgets1.map(function (aKey) { return data.gadgets1[aKey]; });
      var posGad1 = getRandomArrayNumber(gadgets1Array);

      var gadgets2 = Object.keys(data.gadgets2);
      var gadgets2Array = gadgets2.map(function (aKey) { return data.gadgets2[aKey]; });
      var posGad2 = getRandomArrayNumber(gadgets2Array);

      var specilizations = Object.keys(data.specialization);
      var specilizationArray = specilizations.map(function (aKey) { return data.specialization[aKey]; });
      var posSpec = getRandomArrayNumber(specilizationArray);

      var loadoutArray = [
        {"listName": weaponArray, "name": "#myCarousel .carousel-inner", "position": posPrimary},
        {"listName": scopeArray, "name": "#scopeCarousel .carousel-inner", "position": posScope},
        {"listName": at1Array, "name": "#at1Carousel .carousel-inner", "position": posAt1},
        {"listName": at2Array, "name": "#at2Carousel .carousel-inner", "position": posAt2},
        {"listName": sidearmArray, "name": "#secondaryCarousel .carousel-inner", "position": posSidearm},
        {"listName": gadgets1Array, "name": "#gad1Carousel .carousel-inner", "position": posGad1},
        {"listName": gadgets2Array, "name": "#gad2Carousel .carousel-inner", "position": posGad2},
        {"listName": specilizationArray, "name": "#specCarousel .carousel-inner", "position": posSpec}
      ];

      var loadout = {
        "soldier": soldierClass,
        "classIcon": soldierIcon,
        "primary": weaponArray[posPrimary],
        "primaryScope": scopeArray[posScope],
        "primaryAttachment1": at1Array[posAt1],
        "primaryAttachment2": at2Array[posAt2],
        "sidearm": sidearmArray[posSidearm],
        "gadget1": gadgets1Array[posGad1],
        "gadget2": gadgets2Array[posGad2],
        "specilization": specilizationArray[posSpec]
      };
      console.log("Soldier: " + loadout.soldier + ", img: " + loadout.classIcon);
      console.log("Primary: " + loadout.primary.name + ", img: " + loadout.primary.image);
      console.log("Scope: " + loadout.primaryScope.name + ", img: " + loadout.primaryScope.image);
      console.log("Attachment1: " + loadout.primaryAttachment1.name + ", img: " + loadout.primaryAttachment1.image);
      console.log("Attachment2: " + loadout.primaryAttachment2.name + ", img: " + loadout.primaryAttachment2.image);
      console.log("Sidearm: " + loadout.sidearm.name + ", img: " + loadout.sidearm.image);
      console.log("Gadget1: " + loadout.gadget1.name + ", img: " + loadout.gadget1.image);
      console.log("Gadget2: " + loadout.gadget2.name + ", img: " + loadout.gadget2.image);
      console.log("Special: " + loadout.specilization.name + ", img: " + loadout.specilization.image);


      //data is the array you expected.
      loadoutArray.forEach(function (aArray) {
        var index = 0;
        aArray.listName.forEach(function () {
          showCarousel(aArray.listName, index, aArray.name, aArray.position);
          index += 1;
        });

      });
    });

  function showCarousel(arr, index, identifier, position) {
    if (index >= arr.length) { index = 0; }
    var item = arr[index];
    if (index === position) {
      $(identifier).append($('<div class="item active"><img src="' + item.image + '" style="max-width:147px; height: 88px"><h4>' + item.name + '</h4></div></div>'));
    } /*else {
      // not selected items
      $(identifier).append($('<div class="item"><img src="' + item.image + '" style="max-width:147px; height: 88px"><h4>' + item.name + '</h4></div></div>'));
    }*/
  }
  //$('.carousel').carousel({interval: 2500});
  $(function () {
    $('.carousel').each(function () {
      $(this).carousel({
        interval: false
      });
    });
  });
});
