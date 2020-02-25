var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('fileDisplayArea');
var hello = document.getElementById('hello');

hello.addEventListener('click', function () {
    testus();
});

function testus() {
    fileDisplayArea.innerText = 'UFF';
}

window.onbeforeunload = function () {
    return "";
};

window.onload = function() {

    fileInput.addEventListener('change', function(e) {

        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            fileDisplayArea.innerText = reader.result;
        }
        reader.readAsText(file);	
    });
}
