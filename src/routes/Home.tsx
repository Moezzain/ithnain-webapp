import { useEffect } from "react";
import { Modal, Alert, Container, Button, Avatar } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import useToggleSuccessFailedModal from "../app/hookFiles/useToggleSuccessFailedModal";
import companyLogo from "../assets/images/logo-dark-notext.png";
import onBoardingImage from "../assets/images/OnboardingImage.png";
import DrPhoto from "../assets/images/DrPhoto.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [visibleSuccess, visibleFailed, toggleModalSuccess, toggleModalFailed] =
    useToggleSuccessFailedModal();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const payment = queryParams.get("payment");

    if (payment === "successful") {
      toggleModalSuccess();
      setTimeout(() => {
        navigate("/invoice");
      }, 3000);
    } else if (payment === "failed") toggleModalFailed();
  }, []);

  return (
    <>
      <Modal
        withCloseButton={false}
        opened={visibleSuccess as boolean}
        onClose={toggleModalSuccess}
        padding={0}
      >
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="! مبروك"
          color="green"
        >
          <p className="">
            لقد تم دفع الفاتورة بنجاح سيتم ارسال رسالة التأكيد.
          </p>
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
          <p>لم يتم دفع الفاتورة. يمكنك تسجيل الدخول و المحاولة مرة اخرى</p>
        </Alert>
      </Modal>
      {/* <button onClick={toggleModalFailed as () => void}>sdasdsad</button> */}
      {/* <MainContent /> */}
      <Container
        size={520}
        my={10}
        className="flex justify-center flex-col items-start !mt-10"
      >
        <div className="flex flex-row items-center justify-around my-2">
          <img src={DrPhoto} alt="company logo" className=" w-1/3" />
          {/* <Avatar src={DrPhoto} alt="it's me" radius="xl" /> */}
          <img src={companyLogo} alt="company logo" className="w-32" />
        </div>
        <div className="flex justify-center flex-col items-center my-2">
          <h5>تطبيق السكري بالأشتراك مع د. جوهرجي</h5>
        </div>

        <div className="flex justify-center flex-col items-start mb-2 w-full">
          <p className="text-xs">
            حيا الله مُصاب السكري حبيبنا ، تطبيق اثنين ساعد ١٢ ألف مصاب مثل
            حالتك.، راح نساعدك وأنت في بيتك اوصل لنتائج تحاليل ممتازة مع السكري
            وتتخطى التحديات والمخاوف الي تواجهك
            {/* يقدم لك إثنين جلسات تثقيفية ومراقبة ومتابعة مع مدربين متخصصين في مرض
            السكري */}
            {/* <p className="text-xs">حيا الله مصاب السكري حبيبنا ,أمراض السكري متعددة ومنتشرة في كل ارجاء مملكتنا الحبيبة , تطبيق ااثنين درب وساعد 12000 مُصاب على ضبط السكري ايش ماكان النوع او العلاج
 راح نساعدك وانت في بيتك تحافظ على تحاليل سكر ممتازة وبكل سهولة
راح تحصل مثقفين سكري واخصائيين تغذية واطباء سكري واخصائيين نفسيين سعوديين يساعدونك تتخطى كل تحدياتك مع السكري */}
          </p>
          <div className="flex justify-center flex-row items-start mt-12 w-full">
            <Button
              onClick={() => navigate("/signupdoctor")}
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
