const formatPhoneNumber = (phoneNumber: string) => {
  return `+55 (${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    7,
  )}-${phoneNumber.slice(7)}`;
};

export default formatPhoneNumber;
