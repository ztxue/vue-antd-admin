//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const BASE_URL = window.config.apiUrl;
module.exports = {
  //首页统计
  //访客
  INDEX_VISITOR: `${BASE_URL}/work/index/count/visitor`,
  INDEX_TEMPERATURE: `${BASE_URL}/work/index/count/temperature`,
  INDEX_TYPE: `${BASE_URL}/work/index/count/type`,
  //登录请求接口
  ADMIN_LOGIN: `${BASE_URL}/admin/login`,
  //退出登录请求接口
  ADMIN_LOGOUT: `${BASE_URL}/admin/logout`,
  //资源菜单请求接口
  ADMIN_MENU_LIST: `${BASE_URL}/admin/menu/list`,
  //单文件上传请求接口
  ADMIN_FILE_UPLOAD: `${BASE_URL}/admin/file/upload`,
  //多文件上传请求接口
  ADMIN_FILE_UPLOADS: `${BASE_URL}/admin/file/uploads`,

  //资源树请求接口
  ADMIN_RES_TREE: `${BASE_URL}/admin/sys/res/tree`,
  //查询资源请求接口
  ADMIN_RES_LIST: `${BASE_URL}/admin/sys/res/list`,
  //添加资源请求接口
  ADMIN_RES_ADD: `${BASE_URL}/admin/sys/res/add`,
  //删除资源请求接口
  ADMIN_RES_DELETE: `${BASE_URL}/admin/sys/res/delete`,
  //修改资源请求接口
  ADMIN_RES_UPDATE: `${BASE_URL}/admin/sys/res/update`,
  //资源详情请求接口
  ADMIN_RES_SHOW: `${BASE_URL}/admin/sys/res/show`,

  //权限树请求接口
  ADMIN_ROLE_RES_TREE: `${BASE_URL}/admin/sys/role/res/tree`,
  //权限更新请求接口
  ADMIN_ROLE_RES_UPDATE: `${BASE_URL}/admin/sys/role/res/update`,
  //查询角色请求接口
  ADMIN_ROLE_LIST: `${BASE_URL}/admin/sys/role/list`,
  //添加角色请求接口
  ADMIN_ROLE_ADD: `${BASE_URL}/admin/sys/role/add`,
  //删除角色请求接口
  ADMIN_ROLE_DELETE: `${BASE_URL}/admin/sys/role/delete`,
  //修改角色请求接口
  ADMIN_ROLE_UPDATE: `${BASE_URL}/admin/sys/role/update`,
  //角色详情请求接口
  ADMIN_ROLE_SHOW: `${BASE_URL}/admin/sys/role/show`,

  //区划树请求接口
  ADMIN_AREA_TREE: `${BASE_URL}/admin/sys/area/tree`,
  //查询区划列表请求接口
  ADMIN_AREA_LIST: `${BASE_URL}/admin/sys/area/list`,
  //添加区划请求接口
  ADMIN_AREA_ADD: `${BASE_URL}/admin/sys/area/add`,
  //删除区划请求接口
  ADMIN_AREA_DELETE: `${BASE_URL}/admin/sys/area/delete`,
  //修改区划请求接口
  ADMIN_AREA_UPDATE: `${BASE_URL}/admin/sys/area/update`,
  //区划详情请求接口
  ADMIN_AREA_SHOW: `${BASE_URL}/admin/sys/area/show`,
  //组织机构
  //查询组织机构请求接口
  ADMIN_ORG_LIST_ALL: `${BASE_URL}/admin/sys/org/list/all`,
  //组织机构树请求接口
  ADMIN_ORG_TREE: `${BASE_URL}/admin/sys/org/tree`,
  //查询组织机构请求接口
  ADMIN_ORG_LIST: `${BASE_URL}/admin/sys/org/list`,
  //添加组织机构请求接口
  ADMIN_ORG_ADD: `${BASE_URL}/admin/sys/org/add`,
  //删除组织机构请求接口
  ADMIN_ORG_DELETE: `${BASE_URL}/admin/sys/org/delete`,
  //修改组织机构请求接口
  ADMIN_ORG_UPDATE: `${BASE_URL}/admin/sys/org/update`,
  //组织机构详情请求接口
  ADMIN_ORG_SHOW: `${BASE_URL}/admin/sys/org/show`,
  //部门维护
  //查询所有部门请求接口
  ADMIN_DEPT_LIST_ALL: `${BASE_URL}/admin/sys/dept/list/all`,
  //部门树请求接口
  ADMIN_DEPT_TREE: `${BASE_URL}/admin/sys/dept/tree`,
  //添加部门请求接口
  ADMIN_DEPT_ADD: `${BASE_URL}/admin/sys/dept/add`,
  //删除部门请求接口
  ADMIN_DEPT_DELETE: `${BASE_URL}/admin/sys/dept/delete`,
  //修改部门请求接口
  ADMIN_DEPT_UPDATE: `${BASE_URL}/admin/sys/dept/update`,
  //部门详情请求接口
  ADMIN_DEPT_SHOW: `${BASE_URL}/admin/sys/dept/show`,

  //数据字典请求接口
  ADMIN_DICT_TREE: `${BASE_URL}/admin/sys/dict/tree`,
  //根据tag查询
  ADMIN_DICT_TAG: `${BASE_URL}/admin/sys/dict/tag`,
  //查询数据字典列表请求接口
  ADMIN_DICT_LIST: `${BASE_URL}/admin/sys/dict/list`,
  //添加数据字典请求接口
  ADMIN_DICT_ADD: `${BASE_URL}/admin/sys/dict/add`,
  //删除数据字典请求接口
  ADMIN_DICT_DELETE: `${BASE_URL}/admin/sys/dict/delete`,
  //修改数据字典请求接口
  ADMIN_DICT_UPDATE: `${BASE_URL}/admin/sys/dict/update`,
  //数据字典详情请求接口
  ADMIN_DICT_SHOW: `${BASE_URL}/admin/sys/dict/show`,

  //人员维护
  //查询人员列表请求接口
  ADMIN_USER_LIST: `${BASE_URL}/admin/sys/user/list`,
  //查询所有人员列表请求接口
  ADMIN_USER_LIST_ALL: `${BASE_URL}/admin/sys/user/list/all`,
  //添加人员请求接口
  ADMIN_USER_ADD: `${BASE_URL}/admin/sys/user/add`,
  //删除人员请求接口
  ADMIN_USER_DELETE: `${BASE_URL}/admin/sys/user/delete`,
  //修改人员请求接口
  ADMIN_USER_UPDATE: `${BASE_URL}/admin/sys/user/update`,
  //人员详情请求接口
  ADMIN_USER_SHOW: `${BASE_URL}/admin/sys/user/show`,
  //人员对应角色列表
  ADMIN_USER_ROLE_LIST: `${BASE_URL}/admin/sys/user/role/list`,
  //设置人员角色
  ADMIN_USER_ROLE_UPDATE: `${BASE_URL}/admin/sys/user/role/update`,
  //模板管理
  //查询请求接口
  ADMIN_TEMPLATE_LIST: `${BASE_URL}/admin/sys/template/list`,
  //添加请求接口
  ADMIN_TEMPLATE_ADD: `${BASE_URL}/admin/sys/template/add`,
  //删除请求接口
  ADMIN_TEMPLATE_DELETE: `${BASE_URL}/admin/sys/template/delete`,
  //修改请求接口
  ADMIN_TEMPLATE_UPDATE: `${BASE_URL}/admin/sys/template/update`,
  //详情请求接口
  ADMIN_TEMPLATE_SHOW: `${BASE_URL}/admin/sys/template/show`,
  //日志管理
  //查询请求接口
  ADMIN_LOG_LIST: `${BASE_URL}/admin/sys/log/list`,
  //删除请求接口
  ADMIN_LOG_DELETE: `${BASE_URL}/admin/sys/log/delete`,
  //基础管理
  //查询请求接口
  DEVICE_INFO_LIST: `${BASE_URL}/work/device/info/list`,
  //查询所有请求接口
  DEVICE_INFO_LIST_ALL: `${BASE_URL}/work/device/info/list/all`,
  //添加请求接口
  DEVICE_INFO_ADD: `${BASE_URL}/work/device/info/add`,
  //删除请求接口
  DEVICE_INFO_DELETE: `${BASE_URL}/work/device/info/delete`,
  //修改请求接口
  DEVICE_INFO_UPDATE: `${BASE_URL}/work/device/info/update`,
  //详情请求接口
  DEVICE_INFO_SHOW: `${BASE_URL}/work/device/info/show`,
  //安装查询请求接口
  DEVICE_TMP_LIST: `${BASE_URL}/work/device/tmp/list`,
  //安装查询请求接口
  DEVICE_TMP_DELETE: `${BASE_URL}/work/device/tmp/delete`,
  //激活请求接口
  DEVICE_TMP_SYNC: `${BASE_URL}/work/device/tmp/sync`,

  //设备规格
  //查询请求接口
  DEVICE_SPEC_LIST: `${BASE_URL}/work/device/spec/list`,
  //查询所有请求接口
  DEVICE_SPEC_LIST_ALL: `${BASE_URL}/work/device/spec/list/all`,
  //添加请求接口
  DEVICE_SPEC_ADD: `${BASE_URL}/work/device/spec/add`,
  //删除请求接口
  DEVICE_SPEC_DELETE: `${BASE_URL}/work/device/spec/delete`,
  //修改请求接口
  DEVICE_SPEC_UPDATE: `${BASE_URL}/work/device/spec/update`,
  //详情请求接口
  DEVICE_SPEC_SHOW: `${BASE_URL}/work/device/spec/show`,
  //设备类型
  //查询请求接口
  DEVICE_TYPE_LIST: `${BASE_URL}/work/device/type/list`,
  //查询所有请求接口
  DEVICE_TYPE_LIST_ALL: `${BASE_URL}/work/device/type/list/all`,
  //添加请求接口
  DEVICE_TYPE_ADD: `${BASE_URL}/work/device/type/add`,
  //删除请求接口
  DEVICE_TYPE_DELETE: `${BASE_URL}/work/device/type/delete`,
  //修改请求接口
  DEVICE_TYPE_UPDATE: `${BASE_URL}/work/device/type/update`,
  //详情请求接口
  DEVICE_TYPE_SHOW: `${BASE_URL}/work/device/type/show`,

  //应用管理
  //查询请求接口
  APP_INFO_LIST: `${BASE_URL}/work/app/info/list`,
  //添加请求接口
  APP_INFO_ADD: `${BASE_URL}/work/app/info/add`,
  //删除请求接口
  APP_INFO_DELETE: `${BASE_URL}/work/app/info/delete`,
  //修改请求接口
  APP_INFO_UPDATE: `${BASE_URL}/work/app/info/update`,
  //详情请求接口
  APP_INFO_SHOW: `${BASE_URL}/work/app/info/show`,
  //刷新
  APP_REFRESH_SECRET: `${BASE_URL}/work/app/info/refresh/secret`,

  //商店信息维护
  //查询请求接口
  ENTERPRISE_INFO_LIST: `${BASE_URL}/work/enterprise/info/list`,
  //添加请求接口
  ENTERPRISE_INFO_ADD: `${BASE_URL}/work/enterprise/info/add`,
  //删除请求接口
  ENTERPRISE_INFO_DELETE: `${BASE_URL}/work/enterprise/info/delete`,
  //修改请求接口
  ENTERPRISE_INFO_UPDATE: `${BASE_URL}/work/enterprise/info/update`,
  //详情请求接口
  ENTERPRISE_INFO_SHOW: `${BASE_URL}/work/enterprise/info/show`,
  //企业人员信息维护
  //查询请求接口
  ENTERPRISE_USER_LIST: `${BASE_URL}/work/enterprise/user/info/list`,
  //添加请求接口
  ENTERPRISE_USER_ADD: `${BASE_URL}/work/enterprise/user/info/add`,
  //删除请求接口
  ENTERPRISE_USER_DELETE: `${BASE_URL}/work/enterprise/user/info/delete`,
  //修改请求接口
  ENTERPRISE_USER_UPDATE: `${BASE_URL}/work/enterprise/user/info/update`,
  //详情请求接口
  ENTERPRISE_USER_SHOW: `${BASE_URL}/work/enterprise/user/info/show`,

  //企业白名单信息维护
  //查询请求接口
  ENTERPRISE_WHITE_LIST: `${BASE_URL}/work/enterprise/white/info/list`,
  //添加请求接口
  ENTERPRISE_WHITE_ADD: `${BASE_URL}/work/enterprise/white/info/add`,
  //删除请求接口
  ENTERPRISE_WHITE_DELETE: `${BASE_URL}/work/enterprise/white/info/delete`,
  //修改请求接口
  ENTERPRISE_WHITE_UPDATE: `${BASE_URL}/work/enterprise/white/info/update`,
  //详情请求接口
  ENTERPRISE_WHITE_SHOW: `${BASE_URL}/work/enterprise/white/info/show`,

  //企业黑名单信息维护
  //查询请求接口
  ENTERPRISE_BLACK_LIST: `${BASE_URL}/work/enterprise/black/info/list`,
  //添加请求接口
  ENTERPRISE_BLACK_ADD: `${BASE_URL}/work/enterprise/black/info/add`,
  //删除请求接口
  ENTERPRISE_BLACK_DELETE: `${BASE_URL}/work/enterprise/black/info/delete`,
  //修改请求接口
  ENTERPRISE_BLACK_UPDATE: `${BASE_URL}/work/enterprise/black/info/update`,
  //详情请求接口
  ENTERPRISE_BLACK_SHOW: `${BASE_URL}/work/enterprise/black/info/show`,


  //文件上传接口
  API_FILE_UPLOAD: `${BASE_URL}/api/file/upload`,
  //访客预约请求接口
  API_ORDER_INFO_ADD: `${BASE_URL}/api/order/info/add`,
  //查询请求接口
  ORDER_INFO_LIST: `${BASE_URL}/work/order/info/list`,
  //添加请求接口
  ORDER_INFO_ADD: `${BASE_URL}/work/order/info/add`,
  //删除请求接口
  ORDER_INFO_DELETE: `${BASE_URL}/work/order/info/delete`,
  //修改请求接口
  ORDER_INFO_UPDATE: `${BASE_URL}/work/order/info/update`,
  //详情请求接口
  ORDER_INFO_SHOW: `${BASE_URL}/work/order/info/show`,
  //办理请求接口
  ORDER_INFO_HANDLE: `${BASE_URL}/work/order/info/handle`,
  //完成请求接口
  ORDER_INFO_FINISH: `${BASE_URL}/work/order/info/finish`,

  //查询请求接口
  VISITOR_LOG_LIST: `${BASE_URL}/work/visitor/log/list`,
  //添加请求接口
  VISITOR_LOG_ADD: `${BASE_URL}/work/visitor/log/add`,
  //删除请求接口
  VISITOR_LOG_DELETE: `${BASE_URL}/work/visitor/log/delete`,
  //修改请求接口
  VISITOR_LOG_UPDATE: `${BASE_URL}/work/visitor/log/update`,
  //详情请求接口
  VISITOR_LOG_SHOW: `${BASE_URL}/work/visitor/log/show`,

  //远程人员同步请求接口
  CMD_DEVICE_USER: `${BASE_URL}/work/cmd/device/user`,
  //远程开门请求接口
  CMD_DEVICE_OPEN: `${BASE_URL}/work/cmd/device/open`,

};
