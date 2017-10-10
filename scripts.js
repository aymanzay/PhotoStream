/*$(':file').on('change', function () {
    var file = this.files[0];
    if (file.size > 10485760)
    {
        alert('Max upload size is 10 MB.');
    }
            // alert(file.name);
            // alert(file.type);
});

$(':button').on('click', function() {
            // for data, we want to submit the photo and the description
    var photoFormData = new FormData(document.forms['uploader']);
    $.ajax({
        url: $path_to_backend + 'uploadPhoto.php',
        type: 'POST',
        data: photoFormData,
        
        // some flags for jQuery
        cache: false,
        contentType: false,
        processData: false,

        // Custom XMLHttpRequest
        xhr: function() {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
                // For handling the progress of the upload
                myXhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        $('progress').attr({
                            value: e.loaded,
                            max: e.total,
                        });
                    }
                } , false);
            }
            return myXhr;
        }
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
            
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
            
        reader.readAsDataURL(input.files[0]);
    }
}
    
$("#imgInp").change(function() {
    readURL(this);
});*/