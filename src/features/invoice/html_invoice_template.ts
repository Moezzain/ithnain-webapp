export const converter = () =>
  //   {
  //   invoiceDate,
  //   invoice,
  //   invoiceID,
  //   paymentId
  // }: {
  //   invoiceDate: string,
  //   invoice: any,
  //   invoiceID: string,
  //   paymentId: string,
  // }
  {
    let ss = `  
<div id="testt" class="container">
    <div id="testt" class="container">
    <div class="txt">فاتورة ضريبية مبسطة</div>
    <div class="txt">فاتورة من تطبيق أثنين</div>
      <div class="txtCon">
      <div class="txt">الرقم الضريبي</div>
      <div class="textblack">310397281100003</div>
    </div>
         <!-- 
    <div class="txt">العنوان: الملك عبدالعزيزالرياض، الياسمين 13326</div> -->
    <div class="dashed"> </div>
    <div class="txtCon">
      <div class="textblack">رقم الفاتورة</div>
    </div>
    <div class="txtCon">
      <div class="textblack">تاريخ الفاتورة</div>
    </div>
    <div class="dashed"> </div>
    <table>
      <tbody>
        <tr>
          <td class="textAlign">المبلغ</td>
          <td>الجلسات</td>
          <td>الباقة </td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>
    <br>
    <table class="alignTable">
      <tbody>
        <tr>
          <td>اجمالي المبلغ الخاضع للضريبة</td>
        </tr>
          <tr>
          <td>القيمة المضافة: 15%</td>
        </tr>
      </tbody>
    </table>
    <div class="line"> </div>
    <div class="txtCon">
        <div class="textblack">الاجمالي مع الضريبة</div>

    </div>
    <div style="align-self: center;">
      <img class="qrcode" src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;chl=hhhhhhhhh&amp;choe=UTF-8" alt="QR code">
    </div>
  </div>
</div> `;
    let html = document.createElement("div");
    html.innerHTML = ss;
    return html;
  };
