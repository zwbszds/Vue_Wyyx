//直接操作数据
import {
  RECEIVE_MSITE,
  RECEIVE_FINDDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVLIST,
  RECEIVE_NAVINDEX,
  RECEIVE_NAVDETAIL

}from './mutation-types'
export default {
  [RECEIVE_MSITE](state,{msite}) {

    state.msite = msite
  },
  [RECEIVE_FINDDATA](state,{findData}) {

    state.findData = findData
  },



  [RECEIVE_NAVDATA](state,{navData}){
    state.navData = navData

  },

  [RECEIVE_NAVINDEX](state,{index}){
    state.navIndex = index
  },
  [RECEIVE_NAVDETAIL](state){
    state.navDetail = state.navData[state.navIndex]
  }
}
