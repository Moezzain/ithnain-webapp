import { Button, Container, Radio } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import companyLogo from "../assets/images/logo-dark-notext.png";
import MainPlan from "../assets/images/7sessionspromo.jpg";
import IntensivePlan from "../assets/images/12sessionspromo.jpg";
import { useState } from "react";
import { setLoadingAction } from "../features/auth/authSlice";
import { createInvoiceAction } from "../features/invoice/invoiceSlice";
import TamaraPayment from "../components/Tamara";

const plans = [
  {
    intensityId: "6be7094b-e4eb-436c-a837-4f5c38013869",
    description: "من الموقع",
    name: "السبع جلسات",
    amount: "280",
  },
  {
    intensityId: "2f397364-ca4e-4a7b-8511-3b2e816d0a9e",
    description: "من الموقع",
    name: "الأثنا عشر جلسة",
    amount: "480",
  },
];
const ChoosePlanDoctor = () => {
  const dispatch = useAppDispatch();
  const { patient } = useAppSelector((state) => state.auth);
  const [insulin, setInsulin] = useState("");
  const [value, setValue] = useState("");

  const chooseInsuline = (value: string) => {
    dispatch(setLoadingAction(true));
    setTimeout(
      function () {
        dispatch(setLoadingAction(false));
        setInsulin(value);
      }.bind(this),
      500,
    );
  };

  const payWithTamara = (patientEmail: string) => {
    dispatch(
      createInvoiceAction({
        intensityId: plans[1].intensityId,
        description: plans[1].description,
        patientEmail: patientEmail,
      }),
    );
  };

  return (
    <div>
      <Container
        size={520}
        my={10}
        className="flex justify-center flex-col items-start"
      >
        <img src={companyLogo} alt="company logo" className="w-32 mt-10" />
        <div className="flex justify-center flex-col items-center my-2">
          <p style={{ color: "#042C43" }} className=" text-3xl my-6">
            مرحبا {patient?.name}
          </p>
        </div>

        <div className="flex justify-center flex-col items-start mb-2 w-full">
          <p className="text-base mb-4">
            لتحديد خطتك داخل التطبيق جاوب على السؤال:
          </p>
          <p className="text-base">هل أنت مصاب بالسكري النوع الاول او الثاني؟</p>
          <Radio.Group
            value={insulin}
            onChange={chooseInsuline}
            name="favoriteFramework"
          >
            <Radio value="Yes" label="الأول" />
            <Radio value="No" label="الثاني" />
          </Radio.Group>

          {insulin !== "" && (
            <div className="flex justify-start flex-col items-center w-full">
              {insulin === "No" ? (
                <>
                  <p className="text-base mb-4">خطة {plans[1].name} بقيمة:</p>
                  <p className="text-base mb-4 text-blue-950">
                    {plans[1].amount} ريال
                  </p>
                  {/* <img
                    src={IntensivePlan}
                    alt="Intensive Plan"
                    className=" w-80 mb-5"
                  /> */}

                  <Button
                    onClick={() =>
                      dispatch(
                        createInvoiceAction({
                          intensityId: plans[1].intensityId,
                          description: plans[1].description,
                        }),
                      )
                    }
                    variant="outline"
                    styles={(theme) => ({
                      root: {
                        backgroundColor: "#eb4063",
                        borderColor: "#eb4063",
                        color: "white",
                        borderRadius: 17,
                        "&:not([data-disabled])": theme.fn.hover({
                          backgroundColor: "#eb4063",
                        }),
                      },
                    })}
                  >
                    واصل للدفع (٤٨٠ ريال)
                  </Button>
                  <TamaraPayment
                    value={value}
                    setValue={setValue}
                    createPayment={payWithTamara}
                  />
                </>
              ) : (
                <>
                  {/* <img src={MainPlan} alt="Main Plan" className=" w-80 mb-5" /> */}
                  <p className="text-base mb-4">خطة {plans[0].name} بقيمة:</p>
                  <p className="text-base mb-4 text-blue-950">
                    {plans[0].amount} ريال
                  </p>
                  <Button
                    onClick={() =>
                      dispatch(
                        createInvoiceAction({
                          intensityId: plans[0].intensityId,
                          description: plans[0].description,
                        }),
                      )
                    }
                    variant="outline"
                    styles={(theme) => ({
                      root: {
                        backgroundColor: "#eb4063",
                        borderColor: "#eb4063",
                        color: "white",
                        borderRadius: 17,
                        "&:not([data-disabled])": theme.fn.hover({
                          backgroundColor: "#eb4063",
                        }),
                      },
                    })}
                  >
                    واصل للدفع (٢٨٠ ريال)
                  </Button>{" "}
                  <TamaraPayment
                    value={value}
                    setValue={setValue}
                    createPayment={payWithTamara}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ChoosePlanDoctor;
