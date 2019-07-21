export default {
  _config: {
    promiseGenericRes: 'CommonRes',
  },
  user: {
    getUserInfo: {
      req: 'GetUserInfoReq',
      res: 'GetUserInfoRes',
    },
    updateUserInfo: {
      req: 'UpdateUserInfoReq',
    },
  },
  vue: {
    addVue: {
      req: 'AddVueReq',
    },
    getVue: {
      req: 'GetVueReq',
      res: 'GetVueRes',
    },
    updateVue: {
      req: 'UpdateVueReq',
    },
    getMemoriaList: {
      res: 'GetMemoriaListRes',
    },
    deleteMemoria: {
      req: 'DeleteMemoriaReq',
    },
  },
  qiniu: {
    _config: {
      disableEntity: true
    },
    getQiniuToken: {
      res: 'GetQiniuTokenRes',
    },
  },
  resource: {
    _config: {
      disableController: true,
    },
    addResource: {
      req: 'AddResourceReq',
    },
    getResource: {
      req: 'GetResourceReq',
      res: 'GetResourceRes',
    },
    deleteResource: {
      req: 'DeleteResourceReq',
    },
  },
}
