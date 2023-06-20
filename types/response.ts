export interface Response {
  success: boolean
  message: string
}

export interface PayloadResponse<T> extends Response {
  payload: T
}
