"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✌️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://github.com/bmb-1/B.M.B_TZ.git';
  const img = 'https://files.catbox.moe/rpea5k.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `HELLO WHATSAPP USER
THIS IS B.M.B-MD .\n SUPPORT OUR CHANNEL BY VIEW AND FOLLOW, https://whatsapp.com/channel/0029VawO6hgF6sn7k3SuVU3z
╭─────────────────────➳
│╭────────────────────➳
││ 🗼 *REPOSITORY:* ${data.html_url}
││ 🌟 *STARS:* ${repoInfo.stars}
││ 🧧 *FORKS:* ${repoInfo.forks}
││ 📅 *RELEASE DATE:* ${releaseDate}
││🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
││ 👨‍💻 *OWNER:* *king lukas*
││ 💞 *THEME:* *b.m.b*
││ 🥰 *B.M.B-MD*
│╰────────────────────➳`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
