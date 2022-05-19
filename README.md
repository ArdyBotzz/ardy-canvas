## Installation

```bash
$ npm install ardy-canvas
```

## Example GoodBye

```js
const ArCanvas = require("ardy-canvas"),
const  fs = require('fs');

const image = await new ArCanvas.Goodbye()
    .setUsername("Ardy")
    .setGuildName("RubyzTeam")
    .setGuildIcon("https://i.ibb.co/CsKdbvw/Ardy.jpg")
    .setMemberCount("3")
    .setAvatar("https://i.ibb.co/CsKdbvw/Ardy.jpg")
    .setBackground("https://i.postimg.cc/mzgmWvy0/photo-1558637845-c8b7ead71a3e.jpg")
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/swelkom.png', data)
 
```

## Credits

Made by [LINZ](https://github.com/Not-found-squad)  
Thanks to [LEN](https://github.com/lenz-cmd)  
Recode By [Ardy](https://github.com/ArdyBotzz)  
# knights-canvas
