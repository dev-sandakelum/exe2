export type Subject = {
  id: number;
  name: string;
  created_at: string;
  subject_code: string;
};

export type LoadTopics = {
  id: number;
  title: string;
  description: string;
  subject: string;
}[];

export interface LoadCards {
  subject : string;
  topic: number;
  title: string;
  description: string;
  content: string;
  author: string;
  type: string;
  path: string;
}[];

export type LoadUser = {
  id: string;
  username: string;
  email: string;
  full_name: string;
  avatar_url: string;
}[];
