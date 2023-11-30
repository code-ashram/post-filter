export enum STATUS {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  ARCHIVED = 'archived',
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
    createdTime: '20230-06-06',
    status: STATUS.ARCHIVED
  },
  {
    id: 2,
    title: 'I\'m the survivor of my race',
    createdTime: '20230-06-07',
    status: STATUS.ARCHIVED
  },
  {
    id: 3,
    title: 'Hear the tale of sadness and genocide',
    createdTime: '20230-06-08',
    status: STATUS.ARCHIVED
  },
  {
    id: 4,
    title: 'Where the species disappeared',
    createdTime: '20230-06-15',
    status: STATUS.PUBLISHED
  },
  {
    id: 5,
    title: 'And the trees could no longer breathe',
    createdTime: '20230-06-16',
    status: STATUS.PUBLISHED
  },
  {
    id: 6,
    title: '',
    createdTime: '20230-06-17',
    status: STATUS.PUBLISHED
  },
  {
    id: 7,
    title: 'And the trees could no longer breathe',
    createdTime: '20230-06-27',
    status: STATUS.PUBLISHED
  },
  {
    id: 8,
    title: 'And the trees could no longer breathe',
    createdTime: '20230-06-28',
    status: STATUS.DRAFT
  },
  {
    id: 9,
    title: 'A drama of collective suicide',
    createdTime: '20230-06-29',
    status: STATUS.DRAFT
  },
  {
    id: 10,
    title: 'As we let our children suffer',
    createdTime: '20230-07-06',
    status: STATUS.DRAFT
  }
]

export default mockData
