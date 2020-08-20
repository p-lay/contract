export interface CouponUser {
  nickName: string
  avatarUrl: string
}

export interface EncryptCouponReq {
  message: string
  user_id: number
}

export interface EncryptCouponRes {
  md5: string
}

export interface DecryptCouponReq {
  md5: string
}

export interface DecryptCouponRes {
  message?: string
  decryptFailed?: boolean
  createdBy?: CouponUser
  usedBy?: CouponUser
}

export interface UseCouponReq extends DecryptCouponReq {
  user_id: number
}

export interface UseCouponRes {
  useFailed?: boolean
}
