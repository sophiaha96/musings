export default interface IPost {
  chapter?: number;
  date: string;
  id: number;
  title: string;
  subtitle: string;
  body: string;
}

export const defaultPost: IPost =
{
  chapter: 0,
  date: '',
  id: 0,
  title: '',
  subtitle: '',
  body: ''
}

