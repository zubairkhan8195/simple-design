import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

interface HeaderProps {
  title: string;
  description: string;
  previousStep: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  previousStep,
}) => {
  return (
    <div>
      <Button
        onClick={previousStep}
        className=" h-0 bg-transparent hover:bg-transparent px-0"
      >
        <Icons.ArrowLeft className=" hover:scale-125" />
      </Button>
      <h1 className="text-3xl text-charcoal font-bold text-center mt-20">
        {title}
      </h1>
      <p className=" text-xs  text-center mt-4">{description}</p>
    </div>
  );
};

export default Header;
