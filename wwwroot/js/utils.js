const httpMethods = {
    GET: "GET",
    POST: "POST",
}

$(document).ready(function () {

    if ($(".load-async").length > 0) {
        loadComponentsAsync();
    }
});

function fetchComponent(url = "", element, data = {}, httpMethod = httpMethods.GET) {
    $.ajax({
        url: url,
        method: httpMethod,
        data: data !== null && data,
        success: function (response) {
            element.html(response);
        }
    });
};

function loadComponentsAsync(element) {

    let _loader = $("#loader").html();

    if (element) {
        element.html(_loader)

        let _routeData = Object.keys(element.data()).filter(key => key.includes("route"))
            .reduce((acc, key) => {
                acc[key.replace("route", "").toLowerCase()] = element.data(key);
                return acc;
            }, {});

        fetchComponent(createFetchUrl(element), element, _routeData);
    }
    else {
        $(".load-async").each(function () {
            $(this).html(_loader);

            let _routeData = Object.keys($(this).data()).filter(key => key.includes("route"))
                .reduce((acc, key) => {
                    acc[key.replace("route", "").toLowerCase()] = $(this).data(key);
                    return acc;
                }, {});

            fetchComponent(createFetchUrl($(this)), $(this), _routeData);
        });
    }
};

function createFetchUrl(element) {
    let _origin = window.location.origin;
    let _controller = element.data("controller");
    let _action = element.data("action")

    return `${_origin}/${_controller}/${_action}`;
};