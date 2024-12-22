const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
imageInput.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = ()=>{
        const img = new Image();
        img.onload = ()=>{
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
});

//# sourceMappingURL=index.c4775257.js.map
