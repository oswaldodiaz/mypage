type Props = {
  name: string;
};

export const getData = (fileName: string) => {
  try {
    // Import static data on demand
    return require(`../assets/static/${fileName}.json`);
  } catch (error) {
    console.log(`Data with name "${fileName}" does not exist`);
    return null;
  }
};
