/*══════════════════════════════════════════════════════

▓██   ██▓ ▄▄▄       ██ ▄█▀▄▄▄      
▒██  ██▒▒████▄     ██▄█▒▒████▄    
▒██ ██░▒██  ▀█▄  ▓███▄░▒██  ▀█▄  
░ ▐██▓░░██▄▄▄▄██ ▓██ █▄░██▄▄▄▄██ 
░ ██▒▓░ ▓█   ▓██▒▒██▒ █▄▓█   ▓██▒
 ██▒▒▒  ▒▒   ▓▒█░▒ ▒▒ ▓▒▒▒   ▓▒█░
▓██ ░▒░   ▒   ▒▒ ░░ ░▒ ▒░ ▒   ▒▒ ░
▒ ▒ ░░    ░   ▒   ░ ░░ ░  ░   ▒   
░ ░           ░  ░░  ░        ░  ░
░ ░                               

🕊️ Thank you for using 🌙 MAHIRU BOT
👑 Developed by: T A H A — Shadow Monarch

══════════════════════════════════════════════════════*/

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// 🧙 Set Owner Number
let gg = process.env.MODS || "923004204338"; // T A H A (Default)

// 🌐 Global Settings
global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://TahaUser:TahaPass@cluster.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "mahiru-session";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCAYZ930Rq1EFiRNRJuSeGGrKljCnOb8-U";

global.packname = process.env.PACKNAME || `🕊️ Mahiru MD`;
global.author = process.env.AUTHOR || "✨ by: 𝗧 𝗔 𝗛 𝗔";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// 🌟 Polished Messages
global.mess = {
  jobdone: "✅ *Task completed successfully!*",
  useradmin: "❌ _Unauthorized Access_\n👑 This Command Can Only Be Used By *Group Admins*.",
  botadmin: "🕊️ _Admin Permission Required_\n✨ I Need To Be *Admin* To Execute This Command.",
  botowner: "❌ _Unauthorized Access_\n👑 This Command Can Only Be Used By *Mʏ Mᴀꜱᴛᴇʀ* ✨🕊️",
  grouponly: "👥 _Group Only Command_\nThis command only works in *Group Chats*.",
  privateonly: "💬 _Private Chat Only_\nPlease use this command in *Private Chat*.",
  botonly: "🤖 _Bot Only_\nThis command is only for internal *Bot use*.",
  waiting: "⏳ _Please wait... Processing your request..._",
  nolink: "🔗 _Missing Link_\nPlease provide a valid *link*, Master.",
  error: "❌ _Oops! Something went wrong._",
  banned: `⛔ _You are BANNED from using Mahiru Bot._\n\nType *${prefa}owner* or *${prefa}support* to appeal your ban.`,
  bangc: "🚫 _This Group is Banned_\nMAHIRU BOT cannot operate in this group.",
  nonsfw: "🔞 _NSFW Not Enabled_\nDon't be a perv! This is not an NSFW group.",
};
