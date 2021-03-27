export default interface IPost {
  chapter?: number
  category?: string[]
  date: string
  id: number
  title: string
  subtitle: string
  body: string
}

export const defaultPost: IPost =
{
  chapter: 0,
  category: [''],
  date: '',
  id: 0,
  title: '',
  subtitle: '',
  body: ''
}

