function postData(endpoint,data){
    return new Promise((resolve, reject) => {
      $.ajax({
          url: localStorage.getItem("api_url")+endpoint,
          type: "POST",
          method: "POST",
          dataType: "json",
          data: data,
          beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("token"));
          },
          success: function(data) {
              resolve(data)
          },
          statusCode: {
              401: function(data) {
                  reject(401);
                  alertify.error('Unauthorized User, Please Login Again');
                  window.location.href = "login.html";
              }
          }
      })
    })
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}


$(window).on( "load", function() {
    let username=localStorage.getItem("full_names")
    let usertype=localStorage.getItem("user_type")
    $(".main_username").html(username)
    $(".usertype").html(usertype)
    let pagename=$("#pagename").val()
    $("." + pagename).addClass("active")

    $('body').on('click', '#log_out_btn', function() {
        alertify.confirm('Do you want to log Out? Click Ok to continue:', function (e, str) {
            if (e) {
                localStorage.removeItem("user_id");
                localStorage.removeItem("full_names");
                localStorage.removeItem("user_type");
                localStorage.removeItem("token");
                window.location.href = "login.html";
            } else {
                alertify.error('Log Out request Cancelled')
            }
        }, 'Insert the default textbox message here.');
    })
})