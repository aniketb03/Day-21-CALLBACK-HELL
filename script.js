window.onload = function () {

    var text = document.getElementById("text");
    var msg = document.getElementById("msg");
    msg.style.visibility = "hidden";

    text.innerHTML = 10;
    setTimeout(function () {
        text.innerHTML = 9;
        setTimeout(function () {
            text.innerHTML = 8;
            setTimeout(function () {
                text.innerHTML = 7;
                setTimeout(function () {
                    text.innerHTML = 6;
                    setTimeout(function () {
                        text.innerHTML = 5;
                        setTimeout(function () {
                            text.innerHTML = 4;
                            setTimeout(function () {
                                text.innerHTML = 3;
                                setTimeout(function () {
                                    text.innerHTML = 2;
                                    setTimeout(function () {
                                        text.innerHTML = 1;
                                        setTimeout(function () {
                                            msg.style.visibility = "visible";
                                            text.style.visibility = "hidden";
                                        }, 1000)

                                    }, 1000)

                                }, 1000)

                            }, 1000)

                        }, 1000)

                    }, 1000)

                }, 1000)

            }, 1000)

        }, 1000)

    }, 1000)
}

