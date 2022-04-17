const {Client, Intents, ReactionCollector, MessageManager, TeamMember, CommandInteraction} = require('discord.js');
const client = new Client({intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING]}); 
const prefix = "dc!";
const cooldown = new Set();

client.once('ready', () =>{
  console.log("ready");
});

client.on('messageCreate', async message =>{
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const MAX_REACTIONS = 3
    

  

  if(cooldown.has(command)) {
    message.reply('command on cooldown, please wait 15 minutes')
  } else {
    if(command == "deadchat"){
      if(message.member.roles.cache.get('957654036176322590')) return message.reply('You have been blacklisted!');
      const sentMessage = await message.channel.send("**revive the chat?**");
      await sentMessage.react('✅'); 
       
      const filter = (reaction, user) => {
        return reaction.emoji.name === '✅' && !user.bot;
      };
      
      const collector = sentMessage.createReactionCollector({ filter,
        max: MAX_REACTIONS, 
      });
      
      collector.on('collect', (reaction, user) => {
        console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
      });


      const DeadchatSongs = [
        "https://www.youtube.com/watch?v=sgdPlDG1-8k",
        "https://www.youtube.com/watch?v=nBteO-bU78Y",
        "https://www.youtube.com/watch?v=PvzBWFGEz8M",
        "https://www.youtube.com/watch?v=lGFEqEFJ410",
        "https://www.youtube.com/watch?v=Wx08V5jPEwg",
        "https://www.youtube.com/watch?v=wrX_t7h8vy8",
        "https://www.youtube.com/watch?v=UnIhRpIT7nc",
      ];
    
      const song = DeadchatSongs[Math.floor(Math.random() * DeadchatSongs.length)];

      const DeadchatResponses = [
        "Smile, Sweet, Sister, Sadistic, Surprise, Service ***SETH***",
        "one piece is peak",
        "bleach is mid",
        "RUMBLING, RUMBLING, ITS COMING RUMBLING, RUMBLING",
        "JS > py",
        "persona peak ngl",
        "Give up on your dreams and die",
        "MID ANIME MID ANIME MID ANIME, MID MID MID MID, MID MID,MID MID MID, ONE PIECE BETTER, NARUTO BETTER",
        "This ping was sponsored by ***RAID SHADOW LEGENDS***",
        "if youre seeing this, im out of topics",
        "What if the real One Piece was the friends we made along the way",
        "bop bee booooo",
        "your MOTHER",
        "dbz mid",
        "seven deadly frames mid",
        "L + no runes + maidenless + scarlet rot + blood loss + you leveled dex",
        "ゴ STANDO POWER ゴ",
        "umai, umai, umai, umai, umai... UMAI",
        "ゴ Ohoho,  so you're approaching me? ゴ",
        "mentos is MID",
        "ally is hot",
        "Guys don't look up Pokemon number 591, worst mistake of my life",
        "do you know the choppa six dolla?",
        "dreamSMP is MID",
        "i can see all of your reactions",
        "is he smoking a piece of shit??",
        "'Thats too racist' - Yukan while i was writing this",
        "jellymid",
        "hi, thanks for checking in im **still a piece of garbage**",
        "should we abuse the trials or not?",
        "L + Woman",
        "I enjoy consuming the tears of emo orphans",
        "```! maidens```",
        "luna said i couldnt add one that said 'kys' :(",
        "thout unfit even to graft",
        "there was an ol' farmer that lived on a ro-",
        `a song that i personally recommend, ${song}`,
        "nuking the server in 3... 2... 1...",
        "*nya nya!!~~ uwuwu owowo*",
        "blood build >",
        "why are these topics so bland?",
        "mouse and keyboard or controller?",
        "whats your favorite adventure game?",
        "whats your favorite souls-type game?",
        "what is one thing youd like to see happen in this server?",
        "Arashi ga sugita ato ni, Kataru ni mo ochite iku, Memai wo furihodoite, Ichi ni san de odoridasu, Shi go roku de mo odoridasu, Itsu made futari de iru no ka na, Oishiku dekitara itadakimasu, Shiranai mama de mo ii no ka na, Honto no kimochi wa himitsu da yo",
        "amogus twerk",
        "everyone, ping @Demi#2457",
        "stop making arson jokes, theyre cringe",
        
      
      ];
      const responses = DeadchatResponses[Math.floor(Math.random() * DeadchatResponses.length)];




      collector.on('end', (collected, reason) => { 
        if (reason === 'limit')
          return message.channel.send(`<@&907031895102087179> ${responses}`);
          
      });
    
  
  
      cooldown.add(command);
      setTimeout(() => {
        cooldown.delete(command)
      }, 900000); 

  

      
   

    }
    
  

    

  }


if(command == 'feedback'){
  
          if(!message.member.roles.cache.get("772129150114201620")) return;
          const argument = message.content.slice(prefix.length).trim().split(/\"+(.+)\"+\s+/)
          const Title = argument[1]
          const Feedback = argument[2]
          const require = (`${Title}, ${Feedback}`)

          if(!Title, !Feedback) return message.channel.send('Please provide a valid Title and Body.');
          
          message.guild.channels.cache.get('817659114515464203').send(`||title:|| ${Title} ||feedback:|| ${Feedback}`)
          message.channel.send("successfully sent feedback")

          
          
    }
  function getarg(argument){
      if(argument != null){
          const matches = argument.match(/^\"?(.+)\"$/)
          if(!matches) return;
          const Title = matches[1]
          return Title;
      }
    
      
};


  



if(command == 'forcevote'){
  let ForcevotecommandAdmin = message.member.roles.cache.get('817169073720262687');
  if (!ForcevotecommandAdmin) return message.reply('you do not have access to this command!');

    const sentMessage = await message.channel.send("**revive the chat?**");
  await sentMessage.react('✅'); 
   
  const filter = (reaction, user) => {
    return reaction.emoji.name === '✅' && !user.bot;
  };
  
  const collector = sentMessage.createReactionCollector({ filter,
    max: MAX_REACTIONS, 
  });
  
  collector.on('collect', (reaction, user) => {
    console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
  });


  const DeadchatSongs = [
    "https://www.youtube.com/watch?v=sgdPlDG1-8k",
    "https://www.youtube.com/watch?v=nBteO-bU78Y",
    "https://www.youtube.com/watch?v=PvzBWFGEz8M",
    "https://www.youtube.com/watch?v=lGFEqEFJ410",
    "https://www.youtube.com/watch?v=Wx08V5jPEwg",
    "https://www.youtube.com/watch?v=wrX_t7h8vy8",
    "https://www.youtube.com/watch?v=UnIhRpIT7nc",
  ];

  const song = DeadchatSongs[Math.floor(Math.random() * DeadchatSongs.length)];

  const DeadchatResponses = [
    "Smile, Sweet, Sister, Sadistic, Surprise, Service ***SETH***",
        "one piece is peak",
        "bleach is mid",
        "RUMBLING, RUMBLING, ITS COMING RUMBLING, RUMBLING",
        "JS > py",
        "persona peak ngl",
        "Give up on your dreams and die",
        "MID ANIME MID ANIME MID ANIME, MID MID MID MID, MID MID,MID MID MID, ONE PIECE BETTER, NARUTO BETTER",
        "This ping was sponsored by ***RAID SHADOW LEGENDS***",
        "if youre seeing this, im out of topics",
        "What if the real One Piece was the friends we made along the way",
        "bop bee booooo",
        "your MOTHER",
        "dbz mid",
        "seven deadly frames mid",
        "L + no runes + maidenless + scarlet rot + blood loss + you leveled dex",
        "ゴ STANDO POWER ゴ",
        "umai, umai, umai, umai, umai... UMAI",
        "ゴ Ohoho,  so you're approaching me? ゴ",
        "mentos is MID",
        "ally is hot",
        "Guys don't look up Pokemon number 591, worst mistake of my life",
        "do you know the choppa six dolla?",
        "dreamSMP is MID",
        "i can see all of your reactions",
        "is he smoking a piece of shit??",
        "'Thats too racist' - Yukan while i was writing this",
        "jellymid",
        "hi, thanks for checking in im **still a piece of garbage**",
        "should we abuse the trials or not?",
        "L + Woman",
        "I enjoy consuming the tears of emo orphans",
        "```! maidens```",
        "luna said i couldnt add one that said 'kys' :(",
        "thout unfit even to graft",
        "there was an ol' farmer that lived on a ro-",
        `a song that i personally recommend, ${song}`,
        "nuking the server in 3... 2... 1...",
        "*nya nya!!~~ uwuwu owowo*",
        "blood build >",
        "why are these topics so bland?",
        "mouse and keyboard or controller?",
        "whats your favorite adventure game?",
        "whats your favorite souls-type game?",
        "what is one thing youd like to see happen in this server?",
        "Arashi ga sugita ato ni, Kataru ni mo ochite iku, Memai wo furihodoite, Ichi ni san de odoridasu, Shi go roku de mo odoridasu, Itsu made futari de iru no ka na, Oishiku dekitara itadakimasu, Shiranai mama de mo ii no ka na, Honto no kimochi wa himitsu da yo",
        "amogus twerk",
        "everyone, ping @Demi#2457",
        "stop making arson jokes, theyre cringe",
  ];
  const responses = DeadchatResponses[Math.floor(Math.random() * DeadchatResponses.length)];




  collector.on('end', (collected, reason) => { 
    if (reason === 'limit')
      return message.channel.send(`<@&907031895102087179> ${responses}`);


      

      
  });


  

};


if(command == 'topic'){
  const prefix = 'dc!';
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  if(message.member.roles.cache.get('957654036176322590')) return message.reply('You have been blacklisted!');

  const DeadchatSongs = [
    "https://www.youtube.com/watch?v=sgdPlDG1-8k",
    "https://www.youtube.com/watch?v=nBteO-bU78Y",
    "https://www.youtube.com/watch?v=PvzBWFGEz8M",
    "https://www.youtube.com/watch?v=lGFEqEFJ410",
    "https://www.youtube.com/watch?v=Wx08V5jPEwg",
    "https://www.youtube.com/watch?v=wrX_t7h8vy8",
    "https://www.youtube.com/watch?v=UnIhRpIT7nc",
  ];

  const song = DeadchatSongs[Math.floor(Math.random() * DeadchatSongs.length)];

  const DeadchatResponses = [
    "Smile, Sweet, Sister, Sadistic, Surprise, Service ***SETH***",
        "one piece is peak",
        "bleach is mid",
        "RUMBLING, RUMBLING, ITS COMING RUMBLING, RUMBLING",
        "JS > py",
        "persona peak ngl",
        "Give up on your dreams and die",
        "MID ANIME MID ANIME MID ANIME, MID MID MID MID, MID MID,MID MID MID, ONE PIECE BETTER, NARUTO BETTER",
        "This ping was sponsored by ***RAID SHADOW LEGENDS***",
        "if youre seeing this, im out of topics",
        "What if the real One Piece was the friends we made along the way",
        "bop bee booooo",
        "your MOTHER",
        "dbz mid",
        "seven deadly frames mid",
        "L + no runes + maidenless + scarlet rot + blood loss + you leveled dex",
        "ゴ STANDO POWER ゴ",
        "umai, umai, umai, umai, umai... UMAI",
        "ゴ Ohoho,  so you're approaching me? ゴ",
        "mentos is MID",
        "ally is hot",
        "Guys don't look up Pokemon number 591, worst mistake of my life",
        "do you know the choppa six dolla?",
        "dreamSMP is MID",
        "i can see all of your reactions",
        "is he smoking a piece of shit??",
        "'Thats too racist' - Yukan while i was writing this",
        "jellymid",
        "hi, thanks for checking in im **still a piece of garbage**",
        "should we abuse the trials or not?",
        "L + Woman",
        "I enjoy consuming the tears of emo orphans",
        "```! maidens```",
        "luna said i couldnt add one that said 'kys' :(",
        "thout unfit even to graft",
        "there was an ol' farmer that lived on a ro-",
        `a song that i personally recommend, ${song}`,
        "nuking the server in 3... 2... 1...",
        "*nya nya!!~~ uwuwu owowo*",
        "blood build >",
        "why are these topics so bland?",
        "mouse and keyboard or controller?",
        "whats your favorite adventure game?",
        "whats your favorite souls-type game?",
        "what is one thing youd like to see happen in this server?",
        "Arashi ga sugita ato ni, Kataru ni mo ochite iku, Memai wo furihodoite, Ichi ni san de odoridasu, Shi go roku de mo odoridasu, Itsu made futari de iru no ka na, Oishiku dekitara itadakimasu, Shiranai mama de mo ii no ka na, Honto no kimochi wa himitsu da yo",
        "amogus twerk",
        "everyone, ping @Demi#2457",
        "stop making arson jokes, theyre cringe",

  ];
  const responses = DeadchatResponses[Math.floor(Math.random() * DeadchatResponses.length)];

  return message.channel.send(`${responses}`);


}


 if(command == 'ratio'){
      const sentMessage2 = await message.channel.send('ratio bozo');
      await sentMessage2.react('👍');
      await sentMessage2.react('👎');
    };


});














client.login('OTUzMzMyNTQ1NDY0OTg3NzU4.YjDCHg.XDbiqoqCAPJ3Mu63eK6l90puj64');