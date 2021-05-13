function preview_image(event, elementId) {
    let reader = new FileReader();
    reader.onload = function()   {
        let output = document.getElementById(elementId);
        output.src = reader.result;
        output.style.display = "block";
        output.style.border = "solid red 3px";
    }
    reader.readAsDataURL(event.target.files[0]);
}