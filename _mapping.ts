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
  memoria: {
    addMemoria: {
      req: 'AddMemoriaReq',
    },
    getMemoria: {
      req: 'GetMemoriaReq',
      res: 'GetMemoriaRes',
    },
    updateMemoria: {
      req: 'UpdateMemoriaReq',
    },
    searchMemoria: {
      req: 'SearchMemoriaReq',
      res: 'SearchMemoriaRes',
    },
    deleteMemoria: {
      req: 'DeleteMemoriaReq',
    },
  },
  qiniu: {
    _config: {
      disableEntity: true,
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
  tag: {
    addTag: {
      req: 'AddTagReq',
    },
    deleteTag: {
      req: 'DeleteTagReq',
    },
    searchTag: {
      req: 'SearchTagReq',
      res: 'SearchTagRes',
    },
  },
  expressTask: {
    addExpressTask: {
      req: 'AddExpressTaskReq',
    },
    removeExpressTask: {
      req: 'RemoveExpressTaskReq',
    },
    updateExpressTask: {
      req: 'UpdateExpressTaskReq',
    },
    getExpressTask: {
      res: 'GetExpressTaskRes',
    },
  },
}
