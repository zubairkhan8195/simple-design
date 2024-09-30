import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "../icons";

interface StepOneProps {
  nextStep: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { email: string };
}

const StepOne: React.FC<StepOneProps> = ({
  nextStep,
  handleInputChange,
  formData,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Icons.logo />
      <h2 className="text-3xl text-turquoise font-bold mt-14">
        Welcome to Simple
      </h2>
      <p className="text-xs mt-4">Log in or sign up to get started.</p>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="mt-12"
      />
      <Button
        onClick={nextStep}
        className=" w-full text-white bg-turquoise  mt-4"
      >
        Sign up
      </Button>
    </div>
  );
};

export default StepOne;
