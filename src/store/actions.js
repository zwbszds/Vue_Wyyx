//间接操作数据
//引入接口请求函数
import {
  reqMsite,
  reqFindData,
  reqNavData,

} from '../api'

//引入常量
import {
  RECEIVE_MSITE,
  RECEIVE_FINDDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  RECEIVE_NAVINDEX,
  RECEIVE_NAVDETAIL


} from './mutation-types'

export default {
  //获取主页数据
  async getMsite ({commit},cb) {
    const result = await reqMsite()
    if(result.code===0) {
      const msite = result.data

      commit(RECEIVE_MSITE, {msite})
      cb && cb()
    }
  },
  //获取识物数据
  async getFindData ({commit}) {
    const result = await reqFindData()
    if(result.code===0) {
      const findData = result.data
      console.log(findData);

      commit(RECEIVE_FINDDATA, {findData})
    }
  },
  //获取导航页数据
  async getNavData ({commit},cb) {
    const result = await reqNavData()
    if(result.code===0) {
      const navData = result.data
      console.log(navData);

      commit(RECEIVE_NAVDATA, {navData})
      cb && cb()
    }
  },


  setNavIndex ({commit}, index) {

    commit(RECEIVE_NAVINDEX, {index})
  },
  //获取详情数据
  getNavDetail({commit},cb){
    commit(RECEIVE_NAVDETAIL)
    cb && cb()
  }

}
