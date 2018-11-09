var tokenJson = localStorage.getItem('authenticatedToken');
if (tokenJson) {
    var tempToken = JSON.parse(tokenJson);
    if (tempToken.token) {
        $.get("/status/core", function (data, status) {
            if (status === "success" && data) {
                $.get(data + "/token?tokenId=" + tempToken.token, function (data, status) {
                    if (status === "success" && data) {
                        document.getElementById("login-nav-item").style.display = "none";
                        document.getElementById("register-nav-item").style.display = "none";
                        document.getElementById("dashboard-nav-item").style.display = "list-item";
                        document.getElementById("projects-nav-item").style.display = "list-item";
                    }
                });
            }
        });
    }
}