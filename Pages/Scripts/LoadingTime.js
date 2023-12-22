(function () {
    function showLoadingStats() {
        const loadTime = performance.now();
        const loadingTimeElement = document.getElementById('loadingTime');
        if (loadingTimeElement) {
            loadingTimeElement.textContent = `Страница загружена за ${loadTime} миллисекунд`;
        }
    }

    window.addEventListener('load', showLoadingStats);
})();
