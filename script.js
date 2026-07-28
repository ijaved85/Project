document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");
    
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const btnContainer = document.getElementById('btn-container');
            btnContainer.style.display = 'none';

            const element = document.getElementById("pdf-content");
            
            // Automatically formats the PDF name based on the HTML <title> tag
            let pdfName = document.title.replace(/\s+/g, '_') + ".pdf";

            const opt = {
                margin: 0,
                filename: pdfName,
                image: { type: "png" }, 
                html2canvas: { scale: 3, useCORS: true, scrollY: 0 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            };
            
            html2pdf().set(opt).from(element).save().then(() => {
                btnContainer.style.display = 'flex';
            });
        });
    }
});
