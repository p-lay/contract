export interface ExpressTask {
  id: number
  category: string
  serialNumber: string
  status: number
  note: string
  updateTime: string
}

export interface AddExpressTaskReq {
  category: string
  serialNumber: string
  note: string
}

export interface RemoveExpressTaskReq {
  id: number
}

export interface UpdateExpressTaskReq {
  id: number
  status: number
}

export interface GetExpressTaskRes {
  taskByCategory: { [key: string]: ExpressTask[] }
  unpickCount: number
}
