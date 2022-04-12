function getclients(){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: localStorage.getItem("api_url")+"getusers",
            type: "POST",
            method: "POST",
            dataType: "json",
            data: {
            user_id : localStorage.getItem("user_id")
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("token"));
            },
            success: function(data) {
                resolve(data)              
            },
            statusCode: {
                401: function() {
                    reject(401);                    
                }
            }
        })
    })
}

function getpayments(fromdate, todate){    
    return new Promise((resolve, reject) => {
        $.ajax({
            url: localStorage.getItem("api_url")+"fetch-payments",
            type: "POST",
            method: "POST",
            data: {
            user_id : localStorage.getItem("user_id"), fromdate: fromdate, todate: todate
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("token"));
            },
            success: function(data) {
                resolve(data)
            },
            statusCode: {
                401: function() {
                    reject(401);
                    // alert('Unauthorized User, Please Login Again');
                    // window.location.href = "index.html";
                }
            }
        })
    })
}

function getclicks(fromdate, todate){    
    return new Promise((resolve, reject) => {
        $.ajax({
            url: localStorage.getItem("api_url")+"get-clicks",
            type: "POST",
            method: "POST",
            data: {
            user_id : localStorage.getItem("user_id"), fromdate: fromdate, todate: todate
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("token"));
            },
            success: function(data) {
                resolve(data)
            },
            statusCode: {
                401: function() {
                    reject(401)
                }
            }
        })
    })
}