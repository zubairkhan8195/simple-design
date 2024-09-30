import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Header from "./header";

interface StepTwoProps {
  nextStep: () => void;
  previousStep: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { phone_number: string };
}

const StepTwo: React.FC<StepTwoProps> = ({
  nextStep,
  previousStep,
  handleInputChange,
  formData,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header
        title="Enter your phone number"
        description="We’ll only use this to securely log you in and manage your account."
        previousStep={previousStep}
      />
      <Input
        type="tel"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleInputChange}
        placeholder="Phone"
        className="mt-12"
      />
      <Button
        onClick={nextStep}
        className=" w-full text-white bg-turquoise  mt-4"
      >
        Next
      </Button>
    </div>
  );
};

export default StepTwo;
