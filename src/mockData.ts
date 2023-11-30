export enum STATUS {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  ARCHIVED = 'archived',
}

export enum PERIOD {
  ALL_TIME ,
  MONTH =  30,
  WEEK = 7,
}

export type Post = {
  id: number,
  title: string,
  createdTime: string
  status: STATUS
}

const mockData: Post[] = [
  {
    id: 1,
    title: 'Behold my final testimony',
    createdTime: '2023-10-20',
    status: STATUS.ARCHIVED
  },
  {
    id: 2,
    title: 'I\'m the survivor of my race',
    createdTime: '2023-10-21',
    status: STATUS.ARCHIVED
  },
  {
    id: 3,
    title: 'Hear the tale of sadness and genocide',
    createdTime: '2023-11-24',
    status: STATUS.ARCHIVED
  },
  {
    id: 4,
    title: 'Where the species disappeared',
    createdTime: '2023-11-25',
    status: STATUS.PUBLISHED
  },
  {
    id: 5,
    title: 'And the trees could no longer breathe',
    createdTime: '2023-11-26',
    status: STATUS.PUBLISHED
  },
  {
    id: 6,
    title: '',
    createdTime: '2023-11-29',
    status: STATUS.PUBLISHED
  },
  {
    id: 7,
    title: 'And the trees could no longer breathe',
    createdTime: '2023-11-30',
    status: STATUS.PUBLISHED
  },
  {
    id: 8,
    title: 'And the trees could no longer breathe',
    createdTime: '2023-11-30',
    status: STATUS.DRAFT
  },
  {
    id: 9,
    title: 'A drama of collective suicide',
    createdTime: '2023-11-30',
    status: STATUS.DRAFT
  },
  {
    id: 10,
    title: 'As we let our children suffer',
    createdTime: '2023-11-30',
    status: STATUS.DRAFT
  }
]

export default mockData
