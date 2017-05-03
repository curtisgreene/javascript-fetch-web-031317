const app = "I don't do much.";
const token = 'dbacc38f9cab489640f6e53ca4e231b154678bde'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
