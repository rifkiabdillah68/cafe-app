interface ICart {
  menuId: string;
  quantity: number;
  notes: string;
}

interface IOrder {
  id:string;
  customer_name: string;
  table_number;
  cart: ICart[];
  status: 'PENDING' | 'PROCESSING' | 'COMPLETE';
  total:number
}

export type {IOrder, ICart};