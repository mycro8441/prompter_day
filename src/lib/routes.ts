import { client } from './client'

export const getNews = async (job: string) => {
  const { data } = await client.get('/news/' + job)
  return data
}
export const getQuiz = async () => {
  const { data } = await client.get('/quiz/list')
  return data
}
export const getQuote = async () => {
  const { data } = await client.get('/wise-say')
  return data
}
export const getAIHistory = async () => {
  const { data } = await client.get('/AI/history')
  return data
}
export const getCalendar = async () => {
  const { data } = await client.get('/calender/list')
  return data
}
export const getPlan = async () => {
  const { data } = await client.get('/plan/list')
  return data
}

export const makePlan = async (message: string, color: string) => {
  const { data } = await client.post('/calender/generate', {
    message: message,
    color: color
  })
  return data
}
export const makeTarget = async () => {
  const { data } = await client.post('/plan/target')
  return data
}
export const setProfileImg = async () => {
  const { data } = await client.post('/mypage/profile_img')
  return data
}

export const getJobs = async () => {
  const { data } = await client.get('/jobs')
  return data
}
export const getJobByCode = async (code: string) => {
  const { data } = await client.get('/job/' + code)
  return data
}
export const sendChat = async (
  uid: string,
  message: string,
  jobName: string
) => {
  const { data } = await client.post(
    '/AI/chat' +
      (uid === null ? `?job=${jobName}` : `?uid=${uid}&job=${jobName}`),
    {
      message: message
    }
  )

  return data
}
