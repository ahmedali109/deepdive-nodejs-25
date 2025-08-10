const axios = require("axios");
const fs = require("fs");
const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.question("Enter Github Username : ", async (username) => {
  try {
    const url = `https://api.github.com/users/${username}/repos`;

    const response = await axios.get(url, {
      headers: { "User-Agent": "node.js" },
    });

    const repos = response.data.map((repo) => repo.name);

    if (repos.length === 0) {
      console.log("No Repos found");
      return;
    } else {
      const file = `${username}.txt`;
      fs.writeFileSync(file, repos.join("\n"), "utf-8");
      console.log("Repos name saved successfully");
    }
  } catch (e) {
    throw new Error(e.message);
  } finally {
    rl.close();
  }
});
