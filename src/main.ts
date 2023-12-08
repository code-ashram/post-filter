import './style.css'
import mockData, { PERIOD, Post, STATUS } from './mockData.ts'

const filterPosts = (period: PERIOD, title: string, status: STATUS): Post[] => mockData.filter((post) => {
  const isAvailable: boolean = period === PERIOD.ALL_TIME
    ? true
    : new Date(post.createdTime) > new Date(new Date().setDate(new Date().getDate() - period))

  return isAvailable && post.title.toLowerCase().includes(title.toLowerCase()) && post.status === status
})

console.log(filterPosts(PERIOD.ALL_TIME, "And", STATUS.PUBLISHED))
