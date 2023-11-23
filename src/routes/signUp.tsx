import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  Container,
  Title,
  Paper,
  Checkbox,
} from "@mantine/core";
import TermsAndService from "../components/TermsAndService";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/images/logo-dark-notext.png";
import { useAppDispatch } from "../app/hooks";
import { isPatientExistAction } from "../features/auth/authSlice";
import { convertArabicNumerals } from "../app/helpers";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      termsOfService: false,
    },
    validate: {
      name: (value) => (/^(?!\s*$).+/.test(value) ? null : "أدخل اسم صحيح"),
      phone: (value) =>
        /^[\u0660-\u0669]|[0-9]{9}$/.test(value) ? null : "أدخل اسم صحيح",

      // phone: (value) => {
      //   if(!(/^\d{9}$/.test(value))) {
      //     return "أدخل رقم هاتف صحيح";
      //   }
      //   if(!(/^[\u0660-\u0669]{9}$/.test(value))) {
      //     return "أدخل رقم هاتف صحيح";
      //   }
      //   return null;
      // },
      termsOfService: (value) => (value ? null : "وافق على الاحكام و الشروط"),
    },
  });

  const onSubmit = (values: { name: string; phone: string }) => {
    // check exist or not
    console.log("convertArabicNumerals(values.phone)");
    console.log(convertArabicNumerals(values.phone));
    dispatch(
      isPatientExistAction({
        ...values,
        navigate,
        phone: convertArabicNumerals(values.phone),
      }),
    );
    // if exist false already have an account and forward to payment page
    // if not send message and forward to code page
    // console.log(values);
    // navigate(`/otp`);
  };

  return (
    <Container size={520} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `SSTArabic, sans-serif`,
          fontWeight: 900,
        })}
      >
        الرجاء تسجيل الدخول
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Box maw={320} mx="auto" className="flex flex-col">
          <img src={companyLogo} alt="company logo" className="w-32" />
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <TextInput
              label="الأسم"
              mt="md"
              placeholder="الأسم"
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              mt="md"
              label="رقم الهاتف"
              placeholder="5XXXXXXXX"
              {...form.getInputProps("phone")}
            />
            <Checkbox
              mt="md"
              label={<p onClick={open}>الاحكام و الشروط</p>}
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />
            <Group position="center" mt="xl">
              <Button
                type="submit"
                color="#eb4063"
                radius={"lg"}
                styles={(theme) => ({
                  root: {
                    backgroundColor: "#eb4063",
                    "&:not([data-disabled])": theme.fn.hover({
                      backgroundColor: "#eb4063",
                    }),
                  },
                })}
              >
                أنشاء حساب
              </Button>
            </Group>
          </form>
        </Box>
      </Paper>
      <TermsAndService open={open} opened={opened} close={close} />
    </Container>
  );
};

export default SignUp;
