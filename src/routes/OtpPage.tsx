import { Button, Container, PinInput } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import companyLogo from "../assets/images/logo-dark-notext.png";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useRef, useState } from "react";
import {
  createPatientAction,
  verifyPhoneAction,
} from "../features/auth/authSlice";

function OtpPage() {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { patient, verificationCode } = useAppSelector((state) => state.auth);
  const [seconds, setSeconds] = useState("58");
  const [incorrectCode, setIncorrectCode] = useState(false);
  const [startedCountdown, setStartedCountdown] = useState(false);
  const [minutes, setMinutes] = useState("00");
  const [updateTime, setUpdateTime] = useState(true);
  const [showResendCode, setShowResendCode] = useState(false);
  const timer = useRef(null) as any;

  useEffect(() => {
    startCountdown();
    return function cleanup() {
      clearInterval(timer.current);
    };
  }, []);

  console.log("params");
  console.log(state);

  const finishEnterCode = (value: string) => {
    if (value === verificationCode) {
      setIncorrectCode(false);
      if (!state.signUp) {
        // forward to plans page
        navigate("/choosePlan");
      } else {
        // create patient then forward to plans page
        dispatch(
          createPatientAction({
            name: patient.patientName,
            phone: patient.patientPhone,
            referralCode: null,
            navigate,
          }),
        );
      }
    } else {
      setIncorrectCode(true);
    }
  };

  const onClickResend = () => {
    setShowResendCode(false);
    clearInterval(timer.current);
    setUpdateTime(true);
    setSeconds("59");
    startCountdown();
    dispatch(
      verifyPhoneAction({
        name: patient.patientName,
        phone: patient.patientPhone,
      }),
    );
  };

  const startCountdown = () => {
    const timeInMinutes = 1;
    let currentMinutes;
    let currentSeconds;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    // const day = hour * 24;

    setStartedCountdown(true);
    const countDown: any = new Date();
    countDown.setMinutes(countDown.getMinutes() + timeInMinutes);
    timer.current = null;
    timer.current = setInterval(() => {
      const now: any = new Date().getTime();
      let distance: any = countDown - now;
      currentMinutes = Math.floor((distance % hour) / minute);
      currentSeconds = Math.floor((distance % minute) / second);
      console.log("currentSeconds");
      console.log(currentSeconds);

      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }
      if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`;
      }
      if ((currentSeconds as number) <= 30 && !showResendCode) {
        setShowResendCode(true);
        // Keyboard.dismiss();
      }
      if (updateTime && distance >= 0) {
        setSeconds(currentSeconds as string);
      }

      if (distance < 0) {
        setUpdateTime(false);
      }
    }, second);
  };

  return (
    <Container
      size={520}
      my={40}
      className="flex justify-center flex-col items-center"
    >
      <div className="flex justify-center flex-col items-center my-6">
        <img src={companyLogo} alt="company logo" className="w-32 mb-6" />
        <h5>تطبيق السكري الخاص بك</h5>
      </div>

      <div className="flex justify-center flex-col items-start mb-6 w-full">
        <p className="text-lg">التحقق من هاتفك</p>
        <p className="text-xs">الرجاء ادخال رمز التحقق</p>
        <div className="flex justify-start flex-row items-start my-3 w-full">
          <p onClick={() => navigate("/signUp")} className="text-xs mb-3">
            تعديل
          </p>
          <p className="text-xs">&ensp; {patient.patientPhone} </p>
        </div>
      </div>

      <div dir="ltr">
        <PinInput
          onComplete={finishEnterCode}
          type={/^[0-9]*$/}
          inputType="tel"
          inputMode="numeric"
        />
      </div>
      <div className="mt-16 flex justify-center flex-col items-center">
        <p>00:{seconds}</p>
        {incorrectCode && <p className="text-red-600">الرقم خطأ </p>}
        {showResendCode && (
          <Button
            onClick={onClickResend}
            variant="outline"
            styles={(theme) => ({
              root: {
                backgroundColor: "#042C43",
                borderRadius: 17,
                borderColor: "#042C43",
                color: "white",
                "&:not([data-disabled])": theme.fn.hover({
                  backgroundColor: "#042C43",
                }),
              },
            })}
          >
            أعد ارسال الرمز
          </Button>
        )}
      </div>
    </Container>
  );
}

export default OtpPage;
