const sortOrderType = (data) => {
  const order = ["Run", "Walk", "Bike", "Swim", "Hike"];
  if (!Array.isArray(data)) {
    console.error("Provided data is not an array");
    return; // Exit the function or handle the error as appropriate
  }

  // If data is an array, proceed with the sorting logic
  const orderMap = new Map(order.map((type, index) => [type, index]));

  return data.sort((a, b) => {
    const orderA = orderMap.has(a.type)
      ? orderMap.get(a.type)
      : Number.MAX_SAFE_INTEGER;
    const orderB = orderMap.has(b.type)
      ? orderMap.get(b.type)
      : Number.MAX_SAFE_INTEGER;

    return orderA - orderB;
  });
};

export { sortOrderType };
