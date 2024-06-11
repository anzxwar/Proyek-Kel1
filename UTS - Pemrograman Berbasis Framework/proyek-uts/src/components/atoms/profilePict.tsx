import { useState } from 'react';

const infoWalis = [
  {
    image: "/profile1.png"
  },
  {
    image: "/profile2.png"
  },
  {
    image: "/profile3.png"
  }
];

const getImageByIndex = (index) => {
  if (index < 0 || index >= infoWalis.length) {
    return null;
  }
  return infoWalis[index].image;
};

export default getImageByIndex;