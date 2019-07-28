export interface Tag {
  id: number
  name: string
  memoriaIds?: number[]
}

export interface AddTagReq {
  name: string
}

export interface DeleteTagReq {
  id: number
}

export interface SearchTagReq {
  keyword?: string
  withMemoria?: boolean
}

export interface SearchTagRes {
  tags: Tag[]
}
