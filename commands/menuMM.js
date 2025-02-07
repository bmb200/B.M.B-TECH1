const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  "nomCom": "code",
  "aliases": ["session", "pair", "paircode", "qrcode"],
  "reaction": "🤦",
  "categorie": "General"
}, async (_0x5c58d3, _0x3cdb62, _0x5a5573) => {
  const {
    repondre: _0x5d3791,
    arg: _0x55f146
  } = _0x5a5573;
  try {
    if (!_0x55f146 || _0x55f146.length === 0x0) {
      return _0x5d3791("ᴇxᴀᴍᴘʟᴇ ᴜsɪɴɢ: .ᴄᴏᴅᴇ 2557565xxxx.");
    }
    await _0x5d3791("*ᴡᴀɪᴛ ʏᴏᴜʀ ᴄᴏᴅᴇ ɪs  ʏᴏᴜʀ sᴇᴄᴛᴇᴛ ᴅᴏɴᴛ sʜᴀʀᴇ ʏᴏᴜʀ ᴄᴏᴅᴇ🔑😎...*");
    const _0x5e4b2f = encodeURIComponent(_0x55f146.join(" "));
    const _0x1bd360 = "https://bmb-tech-scan-e30bcb8bd096.herokuapp.com/code?number=" + _0x5e4b2f;
    const _0x1bd97b = await axios.get(_0x1bd360);
    const _0x14b73d = _0x1bd97b.data;
    if (_0x14b73d && _0x14b73d.code) {
      const _0x269a29 = _0x14b73d.code;
      await _0x5d3791('' + _0x269a29);
      await _0x5d3791("ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴘᴀɪʀ ᴄᴏᴅᴇ, ᴄᴏᴘʏ ᴀɴᴅ ᴘᴀsᴛᴇ ᴀᴛ ᴛʜᴇ ʟɪɴᴋᴇᴅ ᴅᴇᴠɪᴄᴇs ᴏɴ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴏ ɪᴛ ғᴀsᴛᴇʀ.");
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (_0x4c3eca) {
    console.error("Error getting API response:", _0x4c3eca.message);
    _0x5d3791("Error getting response from API.");
  }
});