import { lazy /*Suspense*/ } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
// import ToastNotify from "../components/ToastNotify";
import { useEffect } from "react";
import { getInvoiceAction, verifyPaymentAction } from "../features/invoice/invoiceSlice";
import { Container, Button, Space, Divider } from "@mantine/core";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import companyLogo from "../assets/images/logo-dark-notext.png";
import onBoardingImage from "../assets/images/OnboardingImage.png";
import { useNavigate } from "react-router-dom";
import { converter } from "../features/invoice/html_invoice_template";

const Invoice = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { patient, verificationCode } = useAppSelector((state) => state.auth);
  const { invoice } = useAppSelector((state) => state.invoice);

  /*  invoice.intensity.intensityTitle

          paymentId: invoiceLocal.paymentId ? invoiceLocal.paymentId : invoiceLocal.id,
          invoiceDate,
          invoice,
          amountWithoutDiscount,
          invoiceID

  */
  useEffect(() => {
      dispatch(getInvoiceAction({id: invoice.id}));
  }, []);

  const printDocumentTransfer = () => {
    // return new Promise((resolve, reject) => {
    // create html
    const ttt = document.getElementById("content");
    html2canvas(ttt as HTMLDivElement, {
      allowTaint: true,
      useCORS: true,
    })
      .then(async (canvas: HTMLCanvasElement) => {
        const imgData = canvas.toDataURL("image/png");

        var imgWidth = 210;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;

        var pdf = new jsPDF("p", "mm");
        var position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

        await pdf.save(`Ithnain-Invoice.pdf`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Container
        size={520}
        my={10}
        className="flex justify-center flex-col items-center"
      >
        <div
          style={{ color: "#042C43" }}
          id="content"
          className="flex justify-center flex-col items-start p-2"
        >
          <img src={companyLogo} alt="company logo" className="w-24" />
          <div className="flex justify-center flex-col items-center my-2 w-full">
            <h5 className="w-full">
              {" "}
              <b>رقم الفاتورة:</b> {invoice.paymentId}
              <Space h="xs" />
              <b>تاريخ الفاتورة:</b> {invoice.updatedOn.substr(0,10)}
              <Space h="lg" />
              <Divider variant="dashed" size="xs" />
            </h5>
          </div>

          <div className="flex justify-center flex-col items-center my-2 w-full">
            <h5 className="w-full">
              {" "}
              <b>الرقم الضريبي:</b> 310397281100003
              <Space h="xs" />
              <b>العنوان:</b> king abdelaziz elreyad, al yasssmin 13326
              <Space h="lg" />
              <Divider variant="dashed" size="xs" />
            </h5>
          </div>
          <div className="flex justify-center flex-col items-center my-2 w-full">
            <table className="w-full">
              <tr className="w-full">
                <td className="font-bold" colSpan={2}>
                  الخطة
                </td>
                <td className="font-bold" colSpan={2}>
                  عدد الجلسات
                </td>
                <td className="font-bold text-left" colSpan={2}>
                  السعر
                </td>
              </tr>
              <tr className="border-b-2 h-11">
                <td colSpan={2}>{invoice.intensity.intensityTitle}</td>
                <td className="text-center"  colSpan={2}>{invoice.intensity.numberOfSessions}</td>
                <td className="text-left" colSpan={2}>
                  {" "}
                  {invoice.intensity.price}{" "}
                </td>
              </tr>
              <Space h="lg" />

              <tr className="border-b-2 h-11">
                <td colSpan={3}>القيمة المضافة</td>
                <td className="text-left" colSpan={3}>
                  {((Number(invoice?.intensity?.price)) * 0.15).toFixed(2) }
                </td>
              </tr>
              <Space h="md" />

              <tr className="w-full">
                <td colSpan={3}>المجموع</td>
                <td className="text-left" colSpan={3}>
                  {(Number(invoice?.intensity?.price) * 1.15).toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <Button
          onClick={() => printDocumentTransfer()}
          variant="subtle"
          styles={(theme) => ({
            root: {
              // backgroundColor: "#eb4063",
              // borderColor: "#eb4063",
              // width: '100%',
              color: "#042C43",
              borderRadius: 17,
              "&:not([data-disabled])": theme.fn.hover({
                //   backgroundColor: "#eb4063",
              }),
            },
          })}
        >
          تحميل الايصال
        </Button>{" "}
        <Button
          onClick={() => navigate('/')}
          variant="subtle"
          styles={(theme) => ({
            root: {
              backgroundColor: "#042C43",
              borderColor: "#042C43",
              width: '100%',
              color: "white",
              margin: "15px",
              borderRadius: 17,
              "&:not([data-disabled])": theme.fn.hover({
                  backgroundColor: "#042C43",
              }),
            },
          })}
        >
          أنتهيت
        </Button>{" "}
      </Container>
    </>
  );
};

export default Invoice;
