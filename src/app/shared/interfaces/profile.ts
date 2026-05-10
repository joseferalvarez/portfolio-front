interface SocialAccount {
  provider: string,
  url: string
}

interface Profile {
  avatarUrl: string,
  bio: string,
  blog: string,
  company: string,
  email: string,
  followers: number,
  following: number,
  followingUrl: string,
  hireable: boolean,
  githubUrl: string,
  id: number,
  location: string,
  login: string,
  name: string,
  organizationsUrl: string,
  publicGists: number,
  publicRepos: number,
  reposUrl: string,
  starredUrl: string,
  socialAccounts: SocialAccount[],
}