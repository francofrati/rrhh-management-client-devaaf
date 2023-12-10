export interface Employees {
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  profile_img: string;
  name?: string;
  id: number | string;
}

export interface AddNewEmployeeBody {
  uid?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  dni: string;
}
