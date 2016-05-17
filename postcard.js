'use strict';

$(document).ready(function () {



 var   imgURL = "https://s3.amazonaws.com/detroitzoo.postcards/dz_01.png";

   $('#postCardImage').attr("src", imgURL);


  $('#facebookUpload').on('click',function (e){
    e.preventDefault();
       var fbURL = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(imgURL);

       window.location.href = fbURL;
    $('#facebookUpload').blur();

  });


  $('#twitterUpload').on('click',function (e){
    e.preventDefault();
//    OAuth.initialize('-wTpkEkqzYX2b5EcW8-2pYzKuC0');
    OAuth.initialize('3TIpo07N1KfQTivxD61KRgKlft4');

    OAuth.popup('twitter').done(function(twitter) {
      //make API calls with `twitter`
       twitter.post('https://upload.twitter.com/1.1/media/upload.json', {
          data: {
             media: imageData
             }
           }).done(function(data) {
              //todo with data
              var media_str = data["media_id_string"];

              twitter.post('/1.1/statuses/update.json', {
                data: {
                        status: "My visit to the Detroit Zoo",
                        media_ids: media_str
                      }
                  }).done(function(data) {
                        alert("Postcard upload to Twitter complete");
                  }).fail(function(err) {
                      var errorTxt = JSON.stringify(err, null, 2)
                      console.log("Error\n" + errorTxt);
                      alert("Upload failed");
                  });

            }).fail(function(err) {
            //todo with err
              var errorTxt = JSON.stringify(err, null, 2)
              console.log("Error\n" + errorTxt);
              alert("Upload failed");
          });

    }).fail(function(err) {
        //todo when the OAuth flow failed
        console.log("popup failed:   "+ err);
        alert("Upload failed");
    });

    $('#twitterUpload').blur();
  });
});
