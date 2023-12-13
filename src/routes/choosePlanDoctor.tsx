import {
  Card,
  Button,
  Container,
  Image,
  Text,
  Badge,
  Group,
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import companyLogo from "../assets/images/logo-dark-notext.png";
import DrPhoto from "../assets/images/DrPhoto.jpg";
import { useState } from "react";
import { setLoadingAction } from "../features/auth/authSlice";
import { createInvoiceAction } from "../features/invoice/invoiceSlice";
import TamaraPayment from "../components/Tamara";

const plans = [
  {
    intensityId: "28eebf72-dfa1-41f8-953a-af6115730a88",
    description: "من الموقع",
    name: "السبع جلسات",
    amount: "280",
  },
  {
    intensityId: "377ba20e-7969-436c-a097-36d947259a30",
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
        <div className="flex flex-row items-center justify-around my-2">
          <img src={DrPhoto} alt="company logo" className=" w-1/3" />
          <img src={companyLogo} alt="company logo" className="w-32 mt-10" />
        </div>
        <div className="flex justify-center flex-col items-center my-2">
          <p style={{ color: "#042C43" }} className=" text-2xl my-6">
            مرحبا {patient?.name.replace("(جوهرجي)", "")}
          </p>
        </div>

        <div className="flex justify-center flex-col items-start mb-2 w-full">
          <p className="text-base mb-4">حدد نوع الموعد مع الطبيب:</p>
          {/* 
          <p className="text-base">
            هل أنت مصاب بالسكري النوع الاول او الثاني؟
          </p>
          <Radio.Group
            value={insulin}
            onChange={chooseInsuline}
            name="favoriteFramework"
          >
            <Radio value="Yes" label="الأول" />
            <Radio value="No" label="الثاني" />
          </Radio.Group> */}

          <Card shadow="sm" padding="lg" radius="md" m="lg" withBorder>
            <Card.Section></Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>الباقة الاولى</Text>
              <Badge color="pink" variant="light">
                تخفيض ٢٠٪{" "}
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              حجز جلسة مع د جوهرجي بقيمة ٢٨٠ ريال
            </Text>

            <div className="flex justify-center flex-col items-center mb-2 w-full">
              <Button
                mt="md"
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
                أدفع الان
              </Button>
            </div>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" m="lg" withBorder>
            <Card.Section></Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>الباقة الثانية</Text>
              <Badge color="pink" variant="light">
                تخفيض ٢٠٪
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              حجز جلسة مع د جوهرجي بقيمة ٤٨٠ ريال
            </Text>

            <div className="flex justify-center flex-col items-center mb-2 w-full">
              <Button
                mt="md"
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
                أدفع الان
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ChoosePlanDoctor;
