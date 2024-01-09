
export const handleDownload = () => {
    const pdf_download_link = "https://drive.google.com/file/d/1RjnLA0oT-fCgblii3YLH2LtIRDtODXzZ/view?usp=sharing"

    const link = document.createElement('a');
    link.href = pdf_download_link;
    link.setAttribute('download', 'saif_mahmud_parvez_cv.pdf');
    link.target = "_blank"
    document.body.appendChild(link);
    link.click();
    link.remove();
}

