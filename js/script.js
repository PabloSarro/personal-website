function showTab(tabId) {
    const sections = document.querySelectorAll(".tab-content");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
}