import React from "react";

const Day1: React.FC = () => {
  type ButtonProps = {
    text: string; // use `string` (primitive) not `String` (object type)
  };

  function MyButton({ text }: ButtonProps) {
    return <button>{text}</button>;
  }

  return (
    <div>
      <MyButton text="Click Me" />

      {/* ❌ Error at compile time (number not allowed) */}
      {/* <MyButton text={123} /> */}
    </div>
  );
};

export default Day1;
