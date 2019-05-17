import isString from "lodash/isString";

export const validateItem = (name: string, cost: number, category: string): boolean => {
  if (!(isString(name) && name.length)) {
    return false;
  }

  if (isNaN(cost) || cost < 1) {
    return false;
  }

  if (!(isString(category) && category.length)) {
    return false;
  }

  return true;
};
