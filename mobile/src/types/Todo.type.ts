export interface ITodo {
  todo: {
    completed: boolean;
    createdAt?: string;
    description: string;
    public: boolean;
    title: string;
    updatedAt?: string;
    year: number;
    __v?: number;
    _id?: string;
  };
  onRemove?: Function;
}
