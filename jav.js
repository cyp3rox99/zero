function onResponse(request, response) {
    response.status = 302;
    response.headers["Location"] = "http://localhost:8000";
    return response;
}