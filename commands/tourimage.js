const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  "nomCom": "play1",
  "categorie": "Search",
  "reaction": "📹"
}, async (_0x52d7a8, _0x5e30f8, _0x4adfde) => {
  const {
    ms: _0x2f583a,
    repondre: _0x4370b9,
    arg: _0x1d2dc0
  } = _0x4adfde;
  if (!_0x1d2dc0[0x0]) {
    _0x4370b9("Please insert a song name.");
    return;
  }
  try {
    let _0x391b10 = _0x1d2dc0.join(" ");
    let _0x15f831 = [];
    const _0xb29d1e = await yts(_0x391b10);
    _0x15f831 = _0xb29d1e.videos;
    if (_0x15f831 && _0x15f831.length > 0x0) {
      const _0xaa5d0a = _0x15f831[0x0].url;
      const _0x1085ba = await fetch("https://api.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0xaa5d0a) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x202853 = await _0x1085ba.json();
      if (_0x202853.status === 0xc8 && _0x202853.success) {
        const _0x43562c = _0x202853.result.download_url;
        const _0x474d1b = {
          "image": {
            "url": _0x15f831[0x0].thumbnail
          },
          "caption": "*B.M.B-MD SONG PLAY*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x202853.result.title + "\n│⿻ *Quality:* " + _0x202853.result.type + "\n│⿻ *Duration:* " + _0x15f831[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x15f831[0x0].views + "\n│⿻ *Uploaded:* " + _0x15f831[0x0].ago + "\n│⿻ *Artist:* " + _0x15f831[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0xaa5d0a + "\n\n╭────────────────◆\n│ *_𝙘𝙤𝙙𝙚 𝙗𝙮 ✯B.m.b-tech✯._*\n╰────────────────◆"
        };
        await _0x5e30f8.sendMessage(_0x52d7a8, _0x474d1b, {
          "quoted": _0x2f583a
        });
        await _0x5e30f8.sendMessage(_0x52d7a8, {
          "audio": {
            "url": _0x43562c
          },
          "mimetype": "audio/mp4"
        }, {
          "quoted": _0x2f583a
        });
        _0x4370b9("𝙚𝙣𝙟𝙤𝙮 𝙨𝙞𝙢𝙥𝙡𝙚 𝙡𝙞𝙛𝙚༆");
      } else {
        _0x4370b9("Failed to download audio. Please try again later.");
      }
    } else {
      _0x4370b9("No audio found.");
    }
  } catch (_0x1c6c45) {
    console.error("Error from API:", _0x1c6c45);
    _0x4370b9("no possible audio found ❌.");
  }
});
zokou({
  "nomCom": "song1",
  "categorie": "Search",
  "reaction": "💿"
}, async (_0x5e9f38, _0x28a4f2, _0x278c3e) => {
  const {
    ms: _0x2bfcd4,
    repondre: _0x118721,
    arg: _0x2db3c0
  } = _0x278c3e;
  if (!_0x2db3c0[0x0]) {
    _0x118721("Please insert a song name.");
    return;
  }
  try {
    let _0x113308 = _0x2db3c0.join(" ");
    let _0x21eb15 = [];
    const _0x27bde6 = await yts(_0x113308);
    _0x21eb15 = _0x27bde6.videos;
    if (_0x21eb15 && _0x21eb15.length > 0x0) {
      const _0x2d3f70 = _0x21eb15[0x0].url;
      const _0x302a16 = await fetch("https://api.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0x2d3f70) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x10254d = await _0x302a16.json();
      if (_0x10254d.status === 0xc8 && _0x10254d.success) {
        const _0x368d5e = _0x10254d.result.download_url;
        const _0x54215d = {
          "image": {
            "url": _0x21eb15[0x0].thumbnail
          },
          "caption": "*B.M.B-MD SONG PLAY*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x10254d.result.title + "\n│⿻ *Quality:* " + _0x10254d.result.type + "\n│⿻ *Duration:* " + _0x21eb15[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x21eb15[0x0].views + "\n│⿻ *Uploaded:* " + _0x21eb15[0x0].ago + "\n│⿻ *Artist:* " + _0x21eb15[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x2d3f70 + "\n\n╭────────────────◆\n│ *_𝙘𝙤𝙙𝙚 𝙗𝙮 B.m.b-tech✯._*\n╰────────────────◆"
        };
        await _0x28a4f2.sendMessage(_0x5e9f38, _0x54215d, {
          "quoted": _0x2bfcd4
        });
        await _0x28a4f2.sendMessage(_0x5e9f38, {
          "document": {
            "url": _0x368d5e
          },
          "mimetype": "audio/mp4"
        }, {
          "quoted": _0x2bfcd4
        });
        _0x118721("Download Success...");
      } else {
        _0x118721("Failed to download audio. Please try again later.");
      }
    } else {
      _0x118721("No audio found.");
    }
  } catch (_0x4e3594) {
    console.error("Error from API:", _0x4e3594);
    _0x118721("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  "nomCom": "video1",
  "categorie": "Search",
  "reaction": "♻️"
}, async (_0x371cc7, _0x1702d1, _0x2c5680) => {
  const {
    ms: _0x48c423,
    repondre: _0x15d8c7,
    arg: _0x2d1742
  } = _0x2c5680;
  if (!_0x2d1742[0x0]) {
    _0x15d8c7("Please insert a song/video name.");
    return;
  }
  try {
    let _0xde59da = _0x2d1742.join(" ");
    let _0x1ecedf = [];
    const _0x414b97 = await yts(_0xde59da);
    _0x1ecedf = _0x414b97.videos;
    if (_0x1ecedf && _0x1ecedf.length > 0x0) {
      const _0x3fe689 = _0x1ecedf[0x0].url;
      const _0x14633a = await fetch("https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x3fe689) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x33e1ab = await _0x14633a.json();
      if (_0x33e1ab.status === 0xc8 && _0x33e1ab.success) {
        const _0x2a3f0b = _0x33e1ab.result.download_url;
        const _0x415060 = {
          "image": {
            "url": _0x1ecedf[0x0].thumbnail
          },
          "caption": "*B.M.B-MD SONG PLAY*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x33e1ab.result.title + "\n│⿻ *Quality:* " + _0x33e1ab.result.type + "\n│⿻ *Duration:* " + _0x1ecedf[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x1ecedf[0x0].views + "\n│⿻ *Uploaded:* " + _0x1ecedf[0x0].ago + "\n│⿻ *Artist:* " + _0x1ecedf[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x3fe689 + "\n\n╭────────────────◆\n│ *_𝙘𝙤𝙙𝙚 𝙗𝙮 B.m.b-tech✰._*\n╰────────────────◆"
        };
        await _0x1702d1.sendMessage(_0x371cc7, _0x415060, {
          "quoted": _0x48c423
        });
        await _0x1702d1.sendMessage(_0x371cc7, {
          "video": {
            "url": _0x2a3f0b
          },
          "mimetype": "video/mp4"
        }, {
          "quoted": _0x48c423
        });
        _0x15d8c7("Download Success...");
      } else {
        _0x15d8c7("Failed to download the video. Please try again later.");
      }
    } else {
      _0x15d8c7("No videos found.");
    }
  } catch (_0x4e4641) {
    console.error("Error from API:", _0x4e4641);
    _0x15d8c7("An error occurred while searching or downloading the video.");
  }
});
zokou({
  "nomCom": "videodoc1",
  "categorie": "Search",
  "reaction": "🎥"
}, async (_0x583300, _0x309e9b, _0x5c8d59) => {
  const {
    ms: _0x41c5ed,
    repondre: _0x1b7312,
    arg: _0x5f3de6
  } = _0x5c8d59;
  if (!_0x5f3de6[0x0]) {
    _0x1b7312("Please insert a song/video name.");
    return;
  }
  try {
    let _0x57d160 = _0x5f3de6.join(" ");
    let _0x2b061e = [];
    const _0x46e82e = await yts(_0x57d160);
    _0x2b061e = _0x46e82e.videos;
    if (_0x2b061e && _0x2b061e.length > 0x0) {
      const _0x68417d = _0x2b061e[0x0].url;
      const _0x31b3f = await fetch("https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x68417d) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0xf58ba1 = await _0x31b3f.json();
      if (_0xf58ba1.status === 0xc8 && _0xf58ba1.success) {
        const _0x443908 = _0xf58ba1.result.download_url;
        const _0x123e5e = {
          "image": {
            "url": _0x2b061e[0x0].thumbnail
          },
          "caption": "*B.M.B-MD SONG PLAY*\n\n╭───────────────◆\n│⿻ *Title:* " + _0xf58ba1.result.title + "\n│⿻ *Quality:* " + _0xf58ba1.result.type + "\n│⿻ *Duration:* " + _0x2b061e[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x2b061e[0x0].views + "\n│⿻ *Uploaded:* " + _0x2b061e[0x0].ago + "\n│⿻ *Artist:* " + _0x2b061e[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x68417d + "\n\n╭────────────────◆\n│ *𝙘𝙤𝙙𝙚 𝙗𝙮 ✯B.m.b-tech*\n╰────────────────◆"
        };
        await _0x309e9b.sendMessage(_0x583300, _0x123e5e, {
          "quoted": _0x41c5ed
        });
        await _0x309e9b.sendMessage(_0x583300, {
          "document": {
            "url": _0x443908
          },
          "mimetype": "video/mp4"
        }, {
          "quoted": _0x41c5ed
        });
        _0x1b7312("Download Success...");
      } else {
        _0x1b7312("Failed to download the video. Please try again later.");
      }
    } else {
      _0x1b7312("No videos found.");
    }
  } catch (_0x5614e2) {
    console.error("Error from API:", _0x5614e2);
    _0x1b7312("An error occurred while searching or downloading the video.");
  }
});
