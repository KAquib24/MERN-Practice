// Component
// Two Types
// 1. Class Component (Old, Not Used Often)
// 2. Functional Component(Modern, Used very Much)

// import React from 'react'
type FormProp = {
  name: string;
  rollno: number;
};

// Using arrow function ✅
const Form = ({ name, rollno }: FormProp) => {
  return <h1>He is {name} and the roll no is {rollno}</h1>;
};

const Day3: React.FC = () => {
  return (
    <div>
      <Form name="Aquib" rollno={24} />
    </div>
  );
};

export default Day3;

