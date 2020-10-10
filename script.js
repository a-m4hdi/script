
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
          alert("لطفاً نام کاربری خود را وارد نمایید.");
        } else if (!$("#inputPassword").val()) {
          alert("لطفاً رمزعبور خود را وارد نمایید.");
        } else {
          alert("کاربر "+ usrname +" کد تخفیف شما: \n" + makeid(11));
          $("#submitnew").click();
        }
      });
