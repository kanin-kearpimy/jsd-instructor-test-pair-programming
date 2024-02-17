const calculateBMI = (weight, height, gender) => {
  // Convert height from cm to meters before calculation
  height = height / 100;

  // Calculate BMI
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // Round to two decimal places

  // Initialize message and category
  let message = "";
  let category = "";

  // Determine the message and category based on gender and BMI
  if (gender === "male") {
    if (bmi < 20) {
      message = "Underweight";
      category = "blue";
    } else if (bmi >= 20 && bmi < 22) {
      message = "Normal weight";
      category = "green";
    } else if (bmi >= 22 && bmi < 24) {
      message = "Normal weight";
      category = "yellow";
    } else if (bmi >= 24 && bmi < 28) {
      message = "Overweight";
      category = "orange";
    } else if (bmi >= 28 && bmi < 30) {
      message = "Overweight";
      category = "orange";
    } else {
      message = "Obesity";
      category = "red";
    }
  } else if (gender === "female") {
    if (bmi < 18.5) {
      message = "Underweight";
      category = "blue";
    } else if (bmi >= 18.5 && bmi < 21) {
      message = "Normal weight";
      category = "green";
    } else if (bmi >= 21 && bmi < 24) {
      message = "Normal weight";
      category = "yellow";
    } else if (bmi >= 24 && bmi < 27) {
      message = "Overweight";
      category = "orange";
    } else if (bmi >= 27 && bmi < 29) {
      message = "Overweight";
      category = "orange";
    } else {
      message = "Obesity";
      category = "red";
    }
  }

  // Return the BMI, message, and category
  return { bmi, message, category };
};

export default calculateBMI;
