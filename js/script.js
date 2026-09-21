(function () {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
    var sections = Array.prototype.slice.call(document.querySelectorAll(".tab-content"));
    var validTabs = tabs.map(function (t) { return t.dataset.tab; });

    function showTab(tabId, updateHash) {
        if (validTabs.indexOf(tabId) === -1) return;

        sections.forEach(function (sec) {
            sec.classList.toggle("active", sec.id === tabId);
        });

        tabs.forEach(function (tab) {
            var selected = tab.dataset.tab === tabId;
            tab.setAttribute("aria-selected", selected ? "true" : "false");
        });

        if (updateHash !== false && window.location.hash !== "#" + tabId) {
            history.replaceState(null, "", "#" + tabId);
        }
    }

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            showTab(tab.dataset.tab);
        });
    });

    window.addEventListener("hashchange", function () {
        var id = window.location.hash.replace("#", "");
        showTab(id);
    });

    var initial = window.location.hash.replace("#", "");
    showTab(validTabs.indexOf(initial) !== -1 ? initial : "about", false);

    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
