import { useRouter } from 'next/router';

const isActive = (currentRoute, href) => {
  return currentRoute === href ? "active" : "";
};

export default isActive;
