import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Header from "./header";

interface StepTwoProps {
  nextStep: () => void;
  previousStep: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { full_name: string };
}

const StepThree: React.FC<StepTwoProps> = ({
  nextStep,
  previousStep,
  handleInputChange,
  formData,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header
        title="Enter your full name"
        description="For account security, please use your full legal name."
        previousStep={previousStep}
      />
      <Input
        type="text"
        name="full_name"
        value={formData.full_name}
        onChange={handleInputChange}
        placeholder="Full Name"
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

export default StepThree;
