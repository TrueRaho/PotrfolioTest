export interface GithubRepository {
  stargazerCount: number;
  description: string;
  homepageUrl: string;
  languages: {
    color: string;
    name: string;
  }[];
  name: string;
  nameWithOwner: string;
  url: string;
  forkCount: number;
  repositoryTopics: string[];
}

export interface ViewApiResponse {
  total: string;
}

export interface TagCounts {
  [tag: string]: number;
}
