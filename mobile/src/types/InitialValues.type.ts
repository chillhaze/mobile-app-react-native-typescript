export interface IInitialValues {
  title: string;
  description: string;
  year: number;
  public: boolean;
  completed: boolean;
  options?: {
    buttonTitle?: string | undefined;
    queryFunc?: Function | undefined;
    id?: string | undefined;
  };
}
