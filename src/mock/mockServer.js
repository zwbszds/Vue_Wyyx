import Mock from 'mockjs'
import HomeData from './datahome.json'
import TopicData from './datatopic.json'
import NavData from './datanav.json'


Mock.mock('/msite', {
  code: 0,
  data: HomeData
})
Mock.mock('/findData', {
  code: 0,
  data: TopicData
})
Mock.mock('/navData', {
  code: 0,
  data: NavData.categoryL1List
})
