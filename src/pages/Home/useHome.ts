export const useHome = () => {
  const onUserFormSubmit = (name: string, email: string, info: string) => {
    console.log(name, email, info);
  };
  return { onUserFormSubmit };
};
