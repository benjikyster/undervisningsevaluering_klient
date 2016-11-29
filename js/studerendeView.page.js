$(document).ready(function () {

      var studentTableBody = $("#studentTableBody");

      $.ajax({
          type: 'GET',
          url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (course) {
              var decrypted = $.parseJSON(SDK.Decrypt(course))

              decrypted.forEach(function (decrypted){

                studentTableBody.append(
                  "<tr>" +
                  "<td>" + decrypted.code + "</td>" +
                  "<td>" + /*course.reviewAverage*/ +"</td>" +
                  "<td> <button class='btn btn-default toLecture' data-LectureCode=" + decrypted.displaytext + ">Klik for at se lektioner</button> </td>" +
                  "</tr"
                );

              });
          },
          error: function (course) {
              alert('Failed!');
          }

      })
      
  });
