const calculateBMI = (weight, height) => {
  // Convert height from cm to meters before calculation
  height = height / 100;

  // Calculate BMI
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // Round to two decimal places

  return bmi;
};

export default calculateBMI;
