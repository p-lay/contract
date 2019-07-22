import { BaseResource } from './resource'
import { Tag } from './tag'

export interface BaseMemoria {
  title: string
  feeling?: string
  resources: BaseResource[]
  tags: Tag[]
  music?: string
  create_time?: number
}

// user info should be set in request
export interface AddMemoriaReq extends BaseMemoria {
  user_id: number
}

export interface GetMemoriaReq {
  id: number
}

export interface GetMemoriaListReq {
  tag_ids?: number[]
  create_by?: number
}
export interface GetMemoriaListRes {
  memorias: {
    title: string
    id: number
  }[]
}

export interface MemoriaAppendInfo {
  id: number
  comments: string[]
  // TODO: should be type User not number
  create_by: number
  update_time: number
}

export interface GetMemoriaRes extends BaseMemoria, MemoriaAppendInfo {}

export interface UpdateMemoriaReq extends BaseMemoria {
  id: number
  existResourceIds?: number[]
}

export interface DeleteMemoriaReq {
  id: number
}
