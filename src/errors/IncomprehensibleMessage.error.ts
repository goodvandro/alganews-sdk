import CustomError, { ErrorType } from "../CustomError";

export default class IncomprehensibleMessageError extends CustomError {
  static type: ErrorType = "IncomprehensibleMessageError" as ErrorType
}