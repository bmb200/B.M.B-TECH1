const { zokou } = require("../framework/zokou");
const yts = require("yt-search");
const fetch = require("node-fetch");

zokou({
  nomCom: "play4",
  categorie: "Search",
  reaction: "🎵"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;
  
  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a song name.");
    return;
  }
  
  try {
    let songName = _0x11ce6f.join(" ");
    const searchResults = await yts(songName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const songDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎵 *Title:* ${json.result.title}\n📡 *Quality:* ${json.result.type}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, songDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { audio: { url: downloadUrl }, mimetype: "audio/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md Successfully downloaded!");
      } else {
        _0x3460c8("❌ Failed to download the audio. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No audio found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the audio.");
  }
});

zokou({
  nomCom: "song4",
  categorie: "Search",
  reaction: "🎵"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;

  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a song name.");
    return;
  }

  try {
    let songName = _0x11ce6f.join(" ");
    const searchResults = await yts(songName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const songDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎵 *Title:* ${json.result.title}\n📡 *Quality:* ${json.result.type}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, songDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { audio: { url: downloadUrl }, mimetype: "audio/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md Successfully downloaded!");
      } else {
        _0x3460c8("❌ Failed to download the audio. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No audio found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the audio.");
  }
});

zokou({
  nomCom: "video4",
  categorie: "Search",
  reaction: "🎥"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;

  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a video name.");
    return;
  }

  try {
    let videoName = _0x11ce6f.join(" ");
    const searchResults = await yts(videoName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const videoDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎥 *Title:* ${json.result.title}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, videoDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md Successfully downloaded the video!");
      } else {
        _0x3460c8("❌ Failed to download the video. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No video found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the video.");
  }
});

zokou({
  nomCom: "videodoc4",
  categorie: "Search",
  reaction: "🎬"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;

  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a video name.");
    return;
  }

  try {
    let videoName = _0x11ce6f.join(" ");
    const searchResults = await yts(videoName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const videoDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎬 *Tconst { zokou } = require("../framework/zokou");
const yts = require("yt-search");
const fetch = require("node-fetch");

zokou({
  nomCom: "play4",
  categorie: "Search",
  reaction: "🎵"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;
  
  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a song name.");
    return;
  }
  
  try {
    let songName = _0x11ce6f.join(" ");
    const searchResults = await yts(songName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const songDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎵 *Title:* ${json.result.title}\n📡 *Quality:* ${json.result.type}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, songDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { audio: { url: downloadUrl }, mimetype: "audio/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md Successfully downloaded!");
      } else {
        _0x3460c8("❌ Failed to download the audio. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No audio found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the audio.");
  }
});

zokou({
  nomCom: "song4",
  categorie: "Search",
  reaction: "🎵"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;

  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a song name.");
    return;
  }

  try {
    let songName = _0x11ce6f.join(" ");
    const searchResults = await yts(songName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const songDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎵 *Title:* ${json.result.title}\n📡 *Quality:* ${json.result.type}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, songDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { audio: { url: downloadUrl }, mimetype: "audio/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md Successfully downloaded!");
      } else {
        _0x3460c8("❌ Failed to download the audio. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No audio found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the audio.");
  }
});

zokou({
  nomCom: "video4",
  categorie: "Search",
  reaction: "🎥"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;

  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a video name.");
    return;
  }

  try {
    let videoName = _0x11ce6f.join(" ");
    const searchResults = await yts(videoName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const videoDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎥 *Title:* ${json.result.title}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, videoDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md Successfully downloaded the video!");
      } else {
        _0x3460c8("❌ Failed to download the video. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No video found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the video.");
  }
});

zokou({
  nomCom: "videodoc4",
  categorie: "Search",
  reaction: "🎬"
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const { ms: _0x37be60, repondre: _0x3460c8, arg: _0x11ce6f } = _0x6c2a22;

  if (!_0x11ce6f[0]) {
    _0x3460c8("Please insert a video name.");
    return;
  }

  try {
    let videoName = _0x11ce6f.join(" ");
    const searchResults = await yts(videoName);
    const videos = searchResults.videos;

    if (videos.length > 0) {
      const videoUrl = videos[0].url;
      const response = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted_api_kt5gd63gjd8`);
      const json = await response.json();

      if (json.status === 200 && json.success) {
        const downloadUrl = json.result.download_url;
        const videoDetails = {
          image: { url: videos[0].thumbnail },
          caption: `🎬 *Title:* ${json.result.title}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, videoDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { document: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md  Successfully downloaded the video!");
      } else {
        _0x3460c8("❌ Failed to download the video. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No video found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the video.");
  }
});itle:* ${json.result.title}\n⏳ *Duration:* ${videos[0].timestamp}\n👀 *Views:* ${videos[0].views}\n📅 *Uploaded:* ${videos[0].ago}\n🎤 *Artist:* ${videos[0].author.name}\n🔗 *Direct YouTube Link:* ${videoUrl}`
        };

        await _0x5e783c.sendMessage(_0x208fbe, videoDetails, { quoted: _0x37be60 });
        await _0x5e783c.sendMessage(_0x208fbe, { document: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: _0x37be60 });

        _0x3460c8("B.m.b-Md  Successfully downloaded the video!");
      } else {
        _0x3460c8("❌ Failed to download the video. Please try again later.");
      }
    } else {
      _0x3460c8("❌ No video found.");
    }
  } catch (error) {
    console.error("Error from API:", error);
    _0x3460c8("⚠️ An error occurred while searching or downloading the video.");
  }
});
