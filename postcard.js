'use strict';

$(document).ready(function () {



 var   imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-11/ced211621f32382d33096dde5f0644ac.png";

   $('#postCardImage').attr("src", imgURL);


  $('#facebookUpload').on('click',function (e){
    e.preventDefault();
       window.location.href = "http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkutter-001.s3.amazonaws.com%2F2016-04-11%2Fced211621f32382d33096dde5f0644ac.png"

    $('#facebookUpload').blur();

  });





  $('#twitterUpload').on('click',function (e){
    e.preventDefault();
    alert("Uploading Postcard to Twitter");

    $('#twitterUpload').blur();

  });
});
