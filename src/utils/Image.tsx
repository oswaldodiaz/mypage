import React from "react";

type Props = {
  name: string;
  alt: string;
};

export const Image = ({ name, alt }: Props) => {
  try {
    console.log(name);
    // Import image on demand
    const image = require(`../assets/images/${name}`);

    if (!image) return null;
    return <img src={image} alt={alt} />;
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};
