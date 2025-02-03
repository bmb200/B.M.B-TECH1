"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "💯", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *B.M.B-MD* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *B.M.B *';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/szs9t8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="💯"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *LUKAS MD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *lukas*'
      let varmess=z+d
      var img='https://files.catbox.moe/3kdkf6.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
