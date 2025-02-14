const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

// Menu Command
zokou({ nomCom: "menu0", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, nomAuteurMessage } = commandeOptions;
    const { cm } = require(__dirname + "/../framework//zokou");

    let coms = {};
    let mode = (s.MODE.toLocaleLowerCase() === "yes") ? "public" : "private";

    // Grouping commands by category
    cm.forEach(com => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    // Set timezone and format time
    moment.tz.setDefault('Etc/GMT');
    const currentTime = moment().format('HH:mm:ss');
    const currentDate = moment().format('DD/MM/YYYY');

    // Context Info
    let infoMsg = `
╭══《 *${s.BOT}* 》════⊷❍
┃❍╭══════════⊷⊷
┃❍│▸ 𝗢𝘄𝗻𝗲𝗿 : ${s.OWNER_NAME}
┃❍│▸ 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${s.PREFIXE} ] 
┃❍│▸ 𝗠𝗼𝗱𝗲 : *${mode}*
┃❍│▸ 𝗗𝗮𝘁𝗲  : *${date}* 
┃❍│▸ 𝗥𝗮𝗺 : 𝟴/𝟭𝟯𝟮 𝗚𝗕
┃❍│▸ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : 𝗖𝗵𝗿𝗼𝗺𝗲 𝗟𝗶𝗻𝘂𝘅
┃❍│▸ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ʙᴡʙ ᴛᴇᴄʜ
┃❍╰══════════⊷⊷
╰════════════════⊷❍ `;

    // Generate Menu Content
    let menuMsg = `*ʙᴡʙ ᴛᴇᴄʜ*\n`;
    for (const cat in coms) {
        menuMsg += `
╭══「 *${cat}* 」═══⊷❍
┃╭════════════════⊷❍
${coms[cat].map(cmd => `┃│❍  ${cmd}`).join("\n")}
┃╰════════════════⊷❍
╰══════════════════⊷❍`;
    }
    menuMsg += `
> ʙᴡʙ ᴛᴇᴄʜ\n`;

    try {
        // Send Menu with Context Info
        await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    body: "©ʙᴡʙ ᴛᴇᴄʜ",
                    thumbnailUrl: "https://files.catbox.moe/ffk61d.jpg",
                    sourceUrl: "",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

        // Send Audio (Song) Below
        const audioUrl = ""; // URL of the audio file
        await zk.sendMessage(dest, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            ptt: true, // Send as voice note
        }, { quoted: ms });

    } catch (e) {
        console.error("🥵🥵 Menu error: ", e);
        repondre("🥵🥵 An error occurred: " + e);
    }
});
