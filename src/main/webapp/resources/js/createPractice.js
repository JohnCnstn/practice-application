$( document ).ready(function() {

    // SUBMIT FORM
    $("#customerForm").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });


    function ajaxPost(){

        var formData;

        formData = {
            startDate : $("#startDate").val(),
            endDate :  $("#endDate").val()
        }

        // var checked = $('#studentId').is(':checked');
        //
        // // PREPARE FORM DATA
        //
        // var formData;
        //
        // if(checked) {
        //      formData = {
        //          startDate : $("#startDate").val(),
        //          endDate :  $("#endDate").val(),
        //          studentId : $("#studentId").val()
        //     };
        // } else {
        //     formData = {
        //         startDate : $("#startDate").val(),
        //         endDate :  $("#endDate").val(),
        //         studentId : $("#studentId").val()
        //     };
        // }

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "/createPractice",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {
                if (result.status == "OK") {
                    $("#postResultDiv").html("<strong>Success</strong>");
                } else {
                    $("#postResultDiv").html("<strong>Error</strong>");
                }
                console.log(result);
            },
            error: function (e) {
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

        // Reset FormData after Posting
        resetData();
    }

    function resetData(){
        $("#startDate").val("");
        $("#endDate").val("");
        $("#studentId").val("");
    }
});
