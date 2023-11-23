import { lazy /*Suspense*/ } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
// import ToastNotify from "../components/ToastNotify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { verifyPaymentAction } from "../features/invoice/invoiceSlice";
import { Notification, Modal, Alert, Container, Button } from "@mantine/core";
import { IconCheck, IconX, IconAlertCircle } from "@tabler/icons-react";
import useToggleSuccessFailedModal from "../app/hookFiles/useToggleSuccessFailedModal";
import companyLogo from "../assets/images/logo-dark-notext.png";
import onBoardingImage from "../assets/images/OnboardingImage.png";
import { useNavigate } from "react-router-dom";

const MainContent = lazy(() => import("../components/MainContent"));

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { patient, verificationCode } = useAppSelector((state) => state.auth);

  const [visibleSuccess, visibleFailed, toggleModalSuccess, toggleModalFailed] =
    useToggleSuccessFailedModal();
  // const handleLogin = async () => {
  //   dispatch(login());
  //   ToastNotify("Successfully logged in");
  // };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tranRef = queryParams.get("tranRef");
    const refer = queryParams.get("ref");
    const order_reference_id = queryParams.get("order_reference_id");
    const order_id = queryParams.get("order_id");

    if (refer)// && order_reference_id && order_id && tranRef)
      dispatch(
        verifyPaymentAction({
          tranRef,
          order_reference_id,
          order_id,
          ref: refer,
          toggleModalSuccess, toggleModalFailed,
          navigate,
        }),
      );
  }, []);

  return (
    <>
      <Modal
        withCloseButton={false}
        opened={visibleSuccess as boolean}
        onClose={toggleModalSuccess as () => void}
        padding={0}
      >
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="! مبروك"
          color="green"
        >
          <p className="">لقد تم دفع الفاتورة بنجاح سيتم ارسال رسالة التأكيد.</p>
          <p className="">لاتنس تحميل التطبيق.</p>
        </Alert>
      </Modal>
      <Modal
        withCloseButton={false}
        opened={visibleFailed as boolean}
        onClose={toggleModalFailed as () => void}
        padding={0}
      >
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="! حدث خطاء ما"
          color="red"
        >
          <p>لم يتم دفع الفاتورة</p>
        </Alert>
      </Modal>
      {/* <button onClick={toggleModalFailed as () => void}>sdasdsad</button> */}
      {/* <MainContent /> */}
      <Container
        size={520}
        my={10}
        className="flex justify-center flex-col items-start"
      >
        <img src={onBoardingImage} alt="company logo" className="w-full" />
        <img src={companyLogo} alt="company logo" className="w-32" />
        <div className="flex justify-center flex-col items-center my-2">
          <h5>تطبيق السكري الخاص بك</h5>
        </div>

        <div className="flex justify-center flex-col items-start mb-2 w-full">
          <p className="text-xs">
            يقدم لك إثنين جلسات تثقيفية ومراقبة ومتابعة مع مدربين متخصصين في مرض
            السكري
            {/* <p className="text-xs">حيا الله مصاب السكري حبيبنا ,أمراض السكري متعددة ومنتشرة في كل ارجاء مملكتنا الحبيبة , تطبيق ااثنين درب وساعد 12000 مُصاب على ضبط السكري ايش ماكان النوع او العلاج
 راح نساعدك وانت في بيتك تحافظ على تحاليل سكر ممتازة وبكل سهولة
راح تحصل مثقفين سكري واخصائيين تغذية واطباء سكري واخصائيين نفسيين سعوديين يساعدونك تتخطى كل تحدياتك مع السكري */}
          </p>
          <div className="flex justify-center flex-row items-start mt-12 w-full">
            <Button
              onClick={() => navigate("/signUp")}
              variant="outline"
              styles={(theme) => ({
                root: {
                  backgroundColor: "#042C43",
                  borderColor: "#042C43",
                  color: "white",
                  borderRadius: 17,
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: "#042C43",
                  }),
                },
              })}
            >
              سجل معنا
            </Button>
          </div>
        </div>
        <div id="content" />
      </Container>
    </>
  );
};

export default Home;
