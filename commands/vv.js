const { adams } = require("../Ibrahim/adams");
const axios = require('axios');
const ytSearch = require('yt-search');

// Command for downloading audio (MP3)
adams({
  nomCom: "play2",  // Changed to a unique command name
  aliases: ["song", "audio", "mp3"],
  categorie: "Search",
  reaction: "🎵"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    return repondre("Please provide a video name.");
  }

  const query = arg.join(" ");

  try {
    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(query);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return repondre('No video found for the specified query.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    // Send a fast response to indicate downloading
    const fastResponse = {
      text: `*BMB XMD is downloading ${firstVideo.title}*`,
      contextInfo: {
        externalAdReply: {
          title: firstVideo.title,
          body: "Bwm xmd downloader",
          mediaType: 1,
          thumbnailUrl: "https://files.catbox.moe/5xm3mi.jpg",
          sourceUrl: "https://whatsapp.com/channel/0029Vb2eknR59PwL1OK4wR24",
          renderLargerThumbnail: false,
          showAdAttribution: true,
        },
      },
    };
    await zk.sendMessage(dest, fastResponse, { quoted: ms });

    // Function to get download data from APIs
    const getDownloadData = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error.message);
        return { success: false };
      }
    };

    // List of APIs to try for MP3 download
    const apis = [
      `https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://www.dark-yasiya-api.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://api.giftedtech.web.id/api/download/dlmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
      `https://api.dreaded.site/api/ytdl/audio?url=${encodeURIComponent(videoUrl)}`
    ];

    let downloadData;
    for (const api of apis) {
      downloadData = await getDownloadData(api);
      if (downloadData && downloadData.success) break;
    }

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.success) {
      return repondre('Failed to retrieve download URL from all sources. Please try again later.');
    }

    const downloadUrl = downloadData.result.download_url;
    const videoDetails = downloadData.result;

    // Prepare the audio message payload
    const audioPayload = {
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      contextInfo: {
        externalAdReply: {
          title: videoDetails.title,
          body: `🎶 ${videoDetails.title} | Download complete`,
          mediaType: 1,
          sourceUrl: 'https://whatsapp.com/channel/0029Vb2eknR59PwL1OK4wR24',
          thumbnailUrl: firstVideo.thumbnail,
          renderLargerThumbnail: true,
          showAdAttribution: true,
        },
      },
    };

    // Send the downloaded audio to the user
    await zk.sendMessage(dest, audioPayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error.message);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});




adams({
  nomCom: "song2",  // Changed to a unique command name
  aliases: ["song", "audio", "mp3"],
  categorie: "Search",
  reaction: "🎵"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    return repondre("Please provide a video name.");
  }

  const query = arg.join(" ");

  try {
    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(query);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return repondre('No video found for the specified query.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    // Send a fast response to indicate downloading
    const fastResponse = {
      text: `*BMB XMD is downloading ${firstVideo.title}*`,
      contextInfo: {
        externalAdReply: {
          title: firstVideo.title,
          body: "BMB XMD downloader",
          mediaType: 1,
          thumbnailUrl: "https://files.catbox.moe/5xm3mi.jpg",
          sourceUrl: "https://whatsapp.com/channel/0029Vb2eknR59PwL1OK4wR24",
          renderLargerThumbnail: false,
          showAdAttribution: true,
        },
      },
    };
    await zk.sendMessage(dest, fastResponse, { quoted: ms });

    // Function to get download data from APIs
    const getDownloadData = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error.message);
        return { success: false };
      }
    };

    // List of APIs to try for MP3 download
    const apis = [
      `https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://www.dark-yasiya-api.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://api.giftedtech.web.id/api/download/dlmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
      `https://api.dreaded.site/api/ytdl/audio?url=${encodeURIComponent(videoUrl)}`
    ];

    let downloadData;
    for (const api of apis) {
      downloadData = await getDownloadData(api);
      if (downloadData && downloadData.success) break;
    }

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.success) {
      return repondre('Failed to retrieve download URL from all sources. Please try again later.');
    }

    const downloadUrl = downloadData.result.download_url;
    const videoDetails = downloadData.result;

    // Prepare the audio message payload
    const audioPayload = {
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      contextInfo: {
        externalAdReply: {
          title: videoDetails.title,
          body: `🎶 ${videoDetails.title} | Download complete`,
          mediaType: 1,
          sourceUrl: 'https://whatsapp.com/channel/0029Vb2eknR59PwL1OK4wR24',
          thumbnailUrl: firstVideo.thumbnail,
          renderLargerThumbnail: true,
          showAdAttribution: true,
        },
      },
    };

    // Send the downloaded audio to the user
    await zk.sendMessage(dest, audioPayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error.message);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});



// Command for downloading video (MP4)
adams({
  nomCom: "video2",  // Changed to a unique command name
  aliases: ["vide", "mp4"],
  categorie: "Search",
  reaction: "🎬"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    return repondre("Please provide a video name.");
  }

  const query = arg.join(" ");

  try {
    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(query);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return repondre('No video found for the specified query.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    // Send a fast response to indicate downloading
    const fastResponse = {
      text: `*BMB is downloading ${firstVideo.title}*`,
      contextInfo: {
        externalAdReply: {
          title: firstVideo.title,
          body: "Bwm xmd downloader",
          mediaType: 1,
          thumbnailUrl: firstVideo.thumbnail,
          sourceUrl: "https://whatsapp.com/channel/0029Vb2eknR59PwL1OK4wR24",
          renderLargerThumbnail: true,
          showAdAttribution: true,
        },
      },
    };
    await zk.sendMessage(dest, fastResponse, { quoted: ms });

    // Function to get download data from APIs
    const getDownloadData = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error.message);
        return { success: false };
      }
    };

    // List of APIs to try for MP4 download
    const apis = [
      `https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://www.dark-yasiya-api.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://api.giftedtech.web.id/api/download/dlmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
      `https://api.dreaded.site/api/ytdl/video?url=${encodeURIComponent(videoUrl)}`
    ];

    let downloadData;
    for (const api of apis) {
      downloadData = await getDownloadData(api);
      if (downloadData && downloadData.success) break;
    }

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.success) {
      return repondre('Failed to retrieve download URL from all sources. Please try again later.');
    }

    const downloadUrl = downloadData.result.download_url;
    const videoDetails = downloadData.result;

    // Prepare the video message payload
    const videoPayload = {
      video: { url: downloadUrl },
      mimetype: 'video/mp4',
      contextInfo: {
        externalAdReply: {
          title: videoDetails.title,
          body: `🎬 ${videoDetails.title} | Download complete`,
          mediaType: 2,  // MediaType 2 indicates video
          sourceUrl: 'https://whatsapp.com/channel/0029Vb2eknR59PwL1OK4wR24',
          thumbnailUrl: firstVideo.thumbnail,
          renderLargerThumbnail: true,
          showAdAttribution: true,
        },
      },
    };

    // Send the downloaded video to the user
    await zk.sendMessage(dest, videoPayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error.message);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});
