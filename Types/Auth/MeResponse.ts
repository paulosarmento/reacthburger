export type MeResponse = {
  image: string;
  id: string;
  email: string;
  admin: number;
  createdAt: string;
  updatedAt: string;
  Person: [{
    id: string;
    name: string;
    birthAt: string;
    document: string;
    phone: string;
    photo: string;
    user_id: string;
    createdAt: string;
    updatedAt: string;
  }];
};
