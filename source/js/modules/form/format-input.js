const formatInput = (input) => {
  const value = input.value.trim();
  if (value) {
    input.value = value.charAt(0).toUpperCase() + value.slice(1);
  }
};

export {formatInput};
