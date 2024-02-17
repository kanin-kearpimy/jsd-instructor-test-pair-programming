const calculateBMI = (weight, height, gender) => {
  // Convert height from cm to meters before calculation
  height = height / 100;

  // Calculate BMI
  let bmiValue = weight / (height * height);
  bmiValue = bmiValue.toFixed(2); // Round to two decimal places

  // Initialize message and category
  let message = "";
  let category = "";

  // Determine the message and category based on gender and BMI
  if (gender === "male") {
    if (bmiValue < 20) {
      message = "Underweight";
      category = "blue";
    } else if (bmiValue >= 20 && bmiValue < 22) {
      message = "Normal weight";
      category = "green";
    } else if (bmiValue >= 22 && bmiValue < 24) {
      message = "Normal weight";
      category = "yellow";
    } else if (bmiValue >= 24 && bmiValue < 28) {
      message = "Overweight";
      category = "orange";
    } else if (bmiValue >= 28 && bmiValue < 30) {
      message = "Overweight";
      category = "orange";
    } else {
      message = "Obesity";
      category = "red";
    }
  } else if (gender === "female") {
    if (bmiValue < 18.5) {
      message = "Underweight";
      category = "blue";
    } else if (bmiValue >= 18.5 && bmiValue < 21) {
      message = "Normal weight";
      category = "green";
    } else if (bmiValue >= 21 && bmiValue < 24) {
      message = "Normal weight";
      category = "yellow";
    } else if (bmiValue >= 24 && bmiValue < 27) {
      message = "Overweight";
      category = "orange";
    } else if (bmiValue >= 27 && bmiValue < 29) {
      message = "Overweight";
      category = "orange";
    } else {
      message = "Obesity";
      category = "red";
    }
  } else {
    // This handles any gender input that's not strictly "male" or "female"
    if (bmiValue < 19.25) {
      // Average of 20 (male) and 18.5 (female) thresholds
      message = "Underweight";
      category = "blue";
    } else if (bmiValue >= 19.25 && bmiValue < 21.5) {
      // Midpoint between male and female "Normal weight" lower bounds
      message = "Normal weight";
      category = "green";
    } else if (bmiValue >= 21.5 && bmiValue < 25.5) {
      // Averaging the upper "Normal weight" and lower "Overweight" bounds
      message = "Normal weight";
      category = "yellow";
    } else if (bmiValue >= 25.5 && bmiValue < 28.5) {
      // Averaging male and female "Overweight" categories
      message = "Overweight";
      category = "orange";
    } else {
      // Assuming the higher threshold for "Obesity" to be inclusive
      message = "Obesity";
      category = "red";
    }
  }
  // Return the BMI, message, and category
  return { bmiValue, message, category };
};

export default calculateBMI;
