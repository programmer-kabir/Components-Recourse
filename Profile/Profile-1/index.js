function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (dropdownContent.style.transform === "scale(1)") {
        dropdownContent.style.transform = "scale(0)";
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        dropdownContent.style.transform = "scale(1)";
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

document.addEventListener('click', function(event) {
    const dropdownButton = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    let isClickInside = dropdownButton.contains(event.target) || dropdownContent.contains(event.target);

    if (!isClickInside) {
        dropdownContent.style.transform = "scale(0)";
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});
