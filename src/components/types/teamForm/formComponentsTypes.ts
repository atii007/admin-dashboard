interface Address {
  area: string;
  city: string;
}

export type InitialValuesType = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  age: string;
  address: Address;
  zip: string;
};

export type Fields = {
  name: keyof InitialValuesType;
  type: string;
  label: string;
};
