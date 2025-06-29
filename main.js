function toggleBtn(id, btn) {
    const Id = document.getElementById(id);
    if (Id.style.display == 'none') {
        Id.style.display = 'block';
        btn.textContent = 'close';
    }
    else {
            Id.style.display = 'none';
            btn.textContent = 'open';
    }
}