class Github {
    constructor() {
      this.client_id = 'MDQ6VXNlcjQ0NTgzNzY1';
      this.client_secret = '6df89a7ced1e7a77d8a7bb3f2f949f9b851ac205';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }