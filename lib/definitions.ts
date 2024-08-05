export interface Post {
  prompt: string,
  tag: string
}

export interface Prompt {
  _id: string,
  creator: {
    _id: string,
    email: string,
    username: string,
    image: string,

  },
  prompt: string,
  tag: string,
}
