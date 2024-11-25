export type TeamDataType = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
};

export type ContactDataType = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
};

export type InvoiceDataType = {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
};

export type TransactionDataType = {
  txId: string;
  user: string;
  date: string;
  cost: string;
};

export type BarDataType = {
  country: string;
  "hot dog": number;
  "hot dogColor": string;
  burger: number;
  burgerColor: string;
  kebab: number;
  kebabColor: string;
  donut: number;
  donutColor: string;
};

export type PieDataType = {
  id: string;
  label: string;
  value: number;
  color: string;
};

interface DataItem {
  x: string;
  y: number;
}

export type LineDataType = {
  id: string;
  color: string;
  data: DataItem[];
};

export type GeographyDataType = {
  id: string;
  value: number;
};

export type FAQDataType = {
  id: number;
  title: string;
  description: string;
};
