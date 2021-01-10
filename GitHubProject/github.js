class GitHub {
  constructor() {
    this.auth_token = {
      headers: {
        authorization: "token 705f9484e7b3dec220bb70ace42e0b9608da0ef3"
      }
    }

    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`,
      this.auth_token
    )

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count.sort}`,
      this.auth_token
    )

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}