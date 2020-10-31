$(function() {
    var today = new Date();
    var hacktoberfestends = new Date("2020-10-31");
    var difference = hacktoberfestends.getTime() - today.getTime();
    document.getElementById("numberofdaysleft").innerHTML = Math.floor(difference/(1000*3600*24));
  });
