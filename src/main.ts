import './style.css'
import mockData from './mockData.ts'

const filterPosts = (title: string) => {
  return mockData.filter((post) => post.title.toLowerCase().includes(title.toLowerCase()))
}

console.log(filterPosts('And'))

