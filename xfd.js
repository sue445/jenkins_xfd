var xfd = (function(){
    // public methods
    function init(){
        for(var i = 0; i < config.job_urls.length; i++){
            var api_url = config.job_urls[i] + "/api/json";
            $.ajax({
                url: api_url,
                dataType: "jsonp",
                jsonp: "jsonp"
            }).then(function(res){
                    // succcess
                    var test_result = "unknown";
                    if(res.color == "blue") test_result = "success";
                    else if(res.color == "red") test_result = "error";

                    var label = $("<h1/>").addClass("project_label").text(res.displayName);

                    var project = $("<div/>").addClass("project").addClass(test_result);
                    project.append(label);

                    $("#main_contents").append(project);
                }, function(){
                    // error
                });
        }

        setTimeout(function(){
            location.reload(false);
        }, config.reload_seconds * 1000);

        $("#last_update").text(currentTime());
    }

    return {
        init : init
    };

    // private methods
    function currentTime(){
        var d = new Date();
        var month = d.getMonth() + 1;

        return d.getFullYear() + "/" + pad(month) + "/" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    }

    function pad(num){
        return num < 10 ? "0" + num : num;
    }

}());