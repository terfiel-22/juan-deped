import { useReactToPrint } from 'react-to-print';
import html2pdf from 'html2pdf.js';

const useComponentPrinter = ({ contentRef, fileName }) => {
  const handlePrint = useReactToPrint({
    contentRef,
    print: async (printIframe) => {
      const document = printIframe.contentDocument;
      if (document) {
        const html = document.getElementsByClassName('print-container')[0];
        html.style.height = '100%';
        const options = {
          margin: 0,
          filename: fileName + '.pdf',
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', floatPrecision: 'smart' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        };
        try {
          html2pdf().set(options).from(html).save();
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  return { handlePrint };
};

export default useComponentPrinter;
