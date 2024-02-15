const validateForm = (type, name, date, start, end, note) => {
  const errors = {};

  // Validate Type
  if (!type.trim()) {
    errors.type = "Type is required.";
  }

  // Validate Name
  if (!name.trim()) {
    errors.name = "Name is required.";
  }

  // Validate Date (simple regex for YYYY-MM-DD format)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    errors.date = "Date is invalid. Please use the YYYY-MM-DD format.";
  } else {
    const inputDate = new Date(date + "T00:00:00.000Z"); // Treat input date as UTC
    const currentDate = new Date(
      new Date().toISOString().split("T")[0] + "T00:00:00.000Z"
    ); // Current date as UTC

    // Check if the input date is before the current date
    if (inputDate > currentDate) {
      errors.date = "Date cannot be in the future.";
    }
  }

  // Validate Start Time (simple regex for HH:MM format)
  if (!/^\d{2}:\d{2}$/.test(start)) {
    errors.start = "Start time is invalid. Please use the HH:MM format.";
  }

  // Validate End Time (simple regex for HH:MM format)
  if (!/^\d{2}:\d{2}$/.test(end)) {
    errors.end = "End time is invalid. Please use the HH:MM format.";
  }

  // Ensure End Time is after Start Time
  if (start >= end) {
    errors.time = "End time must be after start time.";
  }

  // Validate Note (optional, but with a character limit if provided)
  if (note.length > 500) {
    errors.note = "Note must be under 500 characters.";
  }

  return errors;
};

export default validateForm;
