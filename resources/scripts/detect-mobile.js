
function isMobileDevice() {

    const mobilePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;


    const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    return mobilePattern.test(navigator.userAgent) && hasTouch;
}


if (isMobileDevice()) {
    window.stop();
    window.location.href = "mobile-detected.html";
}