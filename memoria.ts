import { BaseResource } from './resource'
import { Tag } from './tag'

export interface BaseMemoria {
  title: string
  feeling?: string
  resources: BaseResource[]
  thumb?: string
  tags: Tag[]
  music?: string
  create_time?: number
  isLargeData?: boolean
}

// user info should be set in request
export interface AddMemoriaReq extends BaseMemoria {
  user_id: number
}

export interface GetMemoriaReq {
  id: number
}

export interface SearchMemoriaReq {
  tag_ids?: number[]
  create_by?: number
}

export interface SearchMemoriaItem {
  title: string
  id: number
  thumb: string
  feeling: string
  creator: {
    id: number
    name: string
  }
  createTime: number
  isLargeData: boolean
  resourceCount: number
  tagNames: string[]
}
export interface SearchMemoriaRes {
  memorias: SearchMemoriaItem[]
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
