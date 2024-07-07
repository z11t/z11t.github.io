function tap() {
    var p = document.getElementById('amount-number');
    var value = parseInt(p.textContent, 10);
    p.textContent = value + 1;
});