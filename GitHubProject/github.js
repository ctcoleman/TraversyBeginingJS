class GitHub {
  constructor() {
    this.auth_token = {
      headers: {
        authorization: "token [entertokennumberhere]"
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
