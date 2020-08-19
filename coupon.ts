export interface EncryptCouponReq {
  message: string
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
}
