interface ISocialAccount {
  name: string;
  url: string;
  icon: string;
}

export interface IProfileCard {
  name: string;
  lastname: string;
  avatar: string;
  bio: string;
  curriculum: string;
  social_accounts: ISocialAccount[];
}

export interface IProfileSection {
  position: string;
  description: string;
}

export interface IProfileProject {
  name: string;
  description: string;
  webpage: string;
  logo: string;
}
