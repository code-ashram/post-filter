export enum STATUS {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  ARCHIVED = 'archived',
}

export enum PERIOD {
  ALL_TIME = 0,
  WEEK = 7,
  MONTH = 30,
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
    createdTime: '2023-11-21',
    status: STATUS.ARCHIVED
  },
  {
    id: 3,
    title: 'Hear the tale of sadness and genocide',
    createdTime: '2023-12-07',
    status: STATUS.ARCHIVED
  },
  {
    id: 4,
    title: 'Where the species disappeared',
    createdTime: '2023-10-02',
    status: STATUS.PUBLISHED
  },
  {
    id: 5,
    title: 'And the trees could no longer breathe',
    createdTime: '2023-11-16',
    status: STATUS.PUBLISHED
  },
  {
    id: 6,
    title: 'Asphyx',
    createdTime: '2023-11-28',
    status: STATUS.PUBLISHED
  },
  {
    id: 7,
    title: 'And the trees could no longer breathe',
    createdTime: '2023-12-07',
    status: STATUS.PUBLISHED
  },
  {
    id: 8,
    title: 'And the trees could no longer breathe',
    createdTime: '2023-10-15',
    status: STATUS.DRAFT
  },
  {
    id: 9,
    title: 'A drama of collective suicide',
    createdTime: '2023-11-14',
    status: STATUS.DRAFT
  },
  {
    id: 10,
    title: 'As we let our children suffer',
    createdTime: '2023-12-05',
    status: STATUS.DRAFT
  }
]

export default mockData
