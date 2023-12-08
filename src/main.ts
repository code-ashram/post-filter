import './style.css'
import mockData, { PERIOD, Post, STATUS } from './mockData.ts'

// const filterPosts = (period: PERIOD, title: string): Post[] => mockData.filter((post) =>
//   period === PERIOD.ALL_TIME
//     ? true
//     : post.title.toLowerCase().includes(title.toLowerCase()) && new Date(post.createdTime) > new Date(new Date().setDate(new Date().getDate() - period)))
//
// console.log(filterPosts(PERIOD.ALL_TIME, 'And'))

// const filterPosts = (title: string) => mockData.filter((post): Post[] => {
//   return post.title.toLowerCase().includes(title.toLowerCase())
// })

// const filterPosts = (status: STATUS): Post[] => mockData.filter((post) => {
//   return post.status === status
// })

// const filterPosts = (title: string, status: STATUS): Post[] => mockData.filter((post) => {
//   return post.title.toLowerCase().includes(title.toLowerCase()) && post.status === status
// })

// const filterPosts = (period: PERIOD): Post[] => mockData.filter((post) => {
//   let days: number
//
//   switch (period) {
//     case PERIOD.MONTH:
//       days = 1
//       break
//     case PERIOD.WEEK:
//       days = 7
//       break
//     default:
//       return true
//   }
//
//   const time = new Date().setDate(new Date().getDate() - days)
//
//   return new Date(time) < new Date(post.createdTime)
// })
//
// console.log(filterPosts(PERIOD.WEEK))

const filterPosts = (period: PERIOD, title: string, status: STATUS): Post[] => mockData.filter((post) => {
  let isAvailable: boolean
  const time = new Date(new Date().setDate(new Date().getDate() - period))

  switch (period) {
    case PERIOD.MONTH:
      isAvailable = new Date(post.createdTime) > time
      break
    case PERIOD.WEEK:
      isAvailable = new Date(post.createdTime) > time
      break
    default:
      isAvailable = true
  }

  return isAvailable && post.title.toLowerCase().includes(title.toLowerCase()) && post.status === status
})

console.log(filterPosts(PERIOD.ALL_TIME, "And", STATUS.PUBLISHED))

// const filterPosts = (period: PERIOD): Post[] => mockData.filter((post) => {
//   const time = new Date(new Date().setDate(new Date().getDate() - period))
//
//   return period === PERIOD.ALL_TIME ? true : new Date(time) < new Date(post.createdTime)
// })

// const filterPosts = (period: PERIOD): Post[] => mockData.filter((post) => {
//   if (period === PERIOD.ALL_TIME) return true
//
//   const time = new Date().setDate(new Date().getDate() - period)
//
//   return new Date(time) < new Date(post.createdTime)
// })


