import { Button, Container, Group, Radio } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/images/logo-dark-notext.png";
import { useState } from "react";
import { setLoadingAction } from "../features/auth/authSlice";
import { createInvoiceAction } from "../features/invoice/invoiceSlice";

const plans = [
  {
    intensityId: "18a9de3c-d35b-43d3-858d-35393c8fb15e",
    description: "من الموقع",
    name: "السبع جلسات",
    amount: "350",
  },
  {
    intensityId: "013fa4ce-8c81-4829-934d-efe7f96bdd7e",
    description: "من الموقع",
    name: "الأثنا عشر جلسة",
    amount: "550",
  },
];
const ChoosePlan = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { patient } = useAppSelector((state) => state.auth);
  const [insulin, setInsulin] = useState("");

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
          <p className="text-base">هل تتناول الانسولين؟</p>
          <Radio.Group
            value={insulin}
            onChange={chooseInsuline}
            name="favoriteFramework"
          >
            <Radio value="Yes" label="نعم" />
            <Radio value="No" label="لا" />
          </Radio.Group>

          {insulin !== "" && (
            <div className="flex justify-start flex-col items-center mt-9 w-full">
              {insulin === "Yes" ? (
                <>
                  <p className="text-base mb-4">خطة {plans[1].name} بقيمة:</p>
                  <p className="text-base mb-4 text-blue-950">
                    {plans[1].amount} ريال ( غير شامل الضريبة )
                  </p>
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
                    واصل للدفع
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-base mb-4">خطة {plans[0].name} بقيمة:</p>
                  <p className="text-base mb-4 text-blue-950">
                    {plans[0].amount} ريال ( غير شامل الضريبة )
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
                    واصل للدفع
                  </Button>{" "}
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ChoosePlan;
