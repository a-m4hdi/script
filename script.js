
     function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      $("#submit").on("click", function () {
        var usrname = $('#inputuser').val();
        if (!$("#inputuser").val()) {
          alert("Ù„Ø·ÙØ§Ù‹ Ù†Ø§Ù… Ú©Ø§Ø±Ø¨Ø±ÛŒ Ø®ÙˆØ¯ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ù†Ù…Ø§ÛŒÛŒØ¯.");
        } else if (!$("#inputPassword").val()) {
          alert("Ù„Ø·ÙØ§Ù‹ Ø±Ù…Ø²Ø¹Ø¨ÙˆØ± Ø®ÙˆØ¯ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ù†Ù…Ø§ÛŒÛŒØ¯.");
        } else {
          alert("Ú©Ø§Ø±Ø¨Ø± "+ usrname +" Ú©Ø¯ ØªØ®ÙÛŒÙ Ø´Ù…Ø§: \n" + makeid(11));
          $("#submitnew").click();
        }
      });
