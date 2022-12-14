import axios from '../../axios'

// 我的云上课堂信息
export const listMyClassroom = params => {
  return axios({
    url: '/classroom-api/listMyClassroom',
    methods: 'get',
    params
  })
}

// 根据课堂id显示课堂详情页
export const classroomDetails = params => {
  return axios({
    url: '/classroom-api/view/' + params,
    methods: 'get'
  })
}

export const getBookTreeData = id => {
  return axios({
    url: '/resourceCenter-api/getBookTreeData/' + id,
    methods: 'get'
  })
}

export const viewClassroomInfo = params => {
  return axios({
    url: '/classroom-api/viewClassroomInfo/' + params,
    methods: 'get'
  })
}

/** *
 * 修改课堂时，查询基本信息
 * @param params
 * @returns {*|Promise|Promise<any>}
 */
export const viewClassroomBaseInfo = params => {
  return axios({
    url: '/classroom-api/viewClassroomBaseInfo',
    methods: 'get',
    params
  })
}

// 开始课堂
export const startClassroom = params => {
  return axios({
    url: '/classroom-api/start?ctId=' + params,
    methods: 'get'
  })
}

// 结束课堂
export const endClassroom = params => {
  return axios({
    url: '/classroom-api/end?ctId=' + params,
    methods: 'get'
  })
}

// 将某个成员设为助教
export const deleteClassroom = data => {
  return axios({
    url: '/classroom-api/deleteClassroom?ctId=' + data,
    method: 'post',
    data
  })
}

// 获取所有课堂创建年份
export const getDates = data => {
  return axios({
    url: '/classroom-api/getDates?type=' + data.type,
    method: 'get'
  })
}

// 查看课程内容，滑动到最下面时，触发此接口
export const viewChapter = data => {
  return axios({
    url: '/classroom-api/empirical/log/viewChapter',
    method: 'post',
    data
  })
}
// 查看视频，观看到最后面时，触发此接口
export const viewVideo = data => {
  return axios({
    url: '/classroom-api/empirical/log/viewVideo',
    method: 'post',
    data
  })
}
// 查看音频，聆听到最后面时，触发此接口
export const viewAudio = data => {
  return axios({
    url: '/classroom-api/empirical/log/viewAudio',
    method: 'post',
    data
  })
}
