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
