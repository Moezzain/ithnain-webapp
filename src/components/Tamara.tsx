import { Button, TextInput } from "@mantine/core";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";

function TamaraPayment({
  value,
  setValue,
  createPayment,
}: {
  value: string;
  setValue: any;
  createPayment: (email: string) => void;
}) {
  const dispatch = useAppDispatch();
  const [showEmail, setShowEmail] = useState(false);
  const [error, setError] = useState("");

  const onChange = (value: string) => {
    setValue(value);
    setError("");
  };

  const onTamaraClick = () => {
    setShowEmail(true);

    if (showEmail) {
      // check email value then proceed to payment
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        createPayment(value);
      } else {
        setError("أدخل ايميل صحيح");
      }
    }
  };
  return (
    <div className="flex flex-col items-center">
      {showEmail && (
        <TextInput
          className=" w-56"
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          label=""
          mt="md"
          placeholder="أدخل الأيميل"
          error={error}
        />
      )}
      <Button
        onClick={onTamaraClick}
        variant="outline"
        className="transition ease-in-out delay-500 w-32"
        styles={(theme) => ({
          root: {
            backgroundColor: "#f4ca40",
            borderColor: "#f4ca40",
            color: "white",
            borderRadius: 17,
            marginTop: 10,
            marginBottom: 10,
            width: 160,
            "&:not([data-disabled])": theme.fn.hover({
              backgroundColor: "#f4ca40",
            }),
          },
        })}
      >
        {showEmail ? "أدفع تمارا" : "الدفع عن طريق تمارا"}
      </Button>{" "}
    </div>
  );
}

export default TamaraPayment;
