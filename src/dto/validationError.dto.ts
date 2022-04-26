interface IElementError {
  value: string;
  msg: string;
  param: string;
  location: string;
}

export interface IValidationError {
  errors: IElementError[];
}
