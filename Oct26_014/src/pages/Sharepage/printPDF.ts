//printPDF.ts

import html2canvas from "html2canvas";
import JsPdf from "jspdf";

//파라미터로 documentID 와 파일명을 넣어주면된다.
async function printPDF(id: string, name: string) {
  html2canvas(document.getElementById(id)!, {
    onclone: (document: any) => {
      document.getElementById("print").style.visibility = "hidden";
    },
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPdf("p", "mm");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;
      var pageHeight = 295;
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      //화면이 넘칠경우 다음페이지 생성
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${name}.pdf`);
    })
    .catch((error) => console.log(error));
}
export default printPDF;