import Cropper from 'cropperjs';

const imageInput = document.getElementById('imageInput');
const imageElement = document.getElementById('image');
const cropButton = document.getElementById('cropButton');
let cropper = '';

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        imageElement.src = reader.result;

        cropper = new Cropper(imageElement, {
            aspectRatio: 0, // Установите 0 для произвольного соотношения сторон
            zoomable: true,
            scalable: true,
            movable: true,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: false,
            center: true,
            minCropBoxWidth: 10, // Минимальная ширина области обрезки
            minCropBoxHeight: 10, // Минимальная высота области обрезки
        });
    };

    reader.readAsDataURL(file);
});

cropButton.addEventListener('click', () => {
    if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas();
        const croppedImageDataURL = croppedCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = croppedImageDataURL;
        link.download = 'cropped_image.png';
        link.click();
    }
});
