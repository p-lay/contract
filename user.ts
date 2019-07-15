export interface UserInfo {
  nickName: string
  avatarUrl: string
  gender: number
  province: string
  city: string
  country: string
}

export interface GetUserInfoReq {
  code: string
}

export interface GetUserInfoRes extends UserInfo {
  userId: number
}

export interface UpdateUserInfoReq extends UserInfo {
  userId?: number
}
