


<a><img src='https/LyHic3i.gif'/></a>



<img align="center" height="auto"
src="https://cardivo.vercel.app/api?name=JOEL%20MD%20V5&description=🥂THE%20WORLD%20BEST%20WHATSAPP%20BOT%★%20CREATED%20BY%20JOEL%20TECH%20432%20KING%20OF%20KINGS%20OWNER%20OF%20JOEL%20MD%20WA%20BOT♥️&image=https://files.catbox.moe/3czn61.jpg?v=4&backgroundColor=%23ecf0f1&github=joeljamestech&pattern=leaf&colorPattern=%23eaeaea"/>








**ғᴏʀᴋ ᴛʜɪs ʀᴇᴘᴏ**





ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴏᴛᴛᴏᴍ ʙᴇʟʟᴏᴡ ᴛᴏ ғᴏʀᴋ ᴛʜɪs ʀᴇᴘᴏ , sᴛᴀʀ 🌟 ᴛʜᴇ ʀᴇᴘᴏ ɪғ ʏᴏᴜ ʟɪᴋᴇ ᴛʜɪs ʙᴏᴛ



<a href='hthub.com/joeljamestech2/JOEL-XMD/fork' target="_blank"><img alt='joel' src='https://img.shields.io/badge/FORK REPO-h?color=navy&style=for-the-badge&logo=visualstudiocode'/></a></p>



**ɢᴇᴛ sᴇssɪᴏɴ ɪᴅ**







ɪғ ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ʏᴏᴜʀ sᴇssɪᴏɴ_ɪᴅ sᴏ ᴜ ᴄᴀɴ ɢᴇᴛ ɪᴛ ᴄʟɪᴄᴋ ᴏɴ sᴇssɪᴏɴ_ɪᴅ ʙᴜᴛᴛᴏɴ ᴀɴᴅ ᴘᴀsᴛᴇ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴇxᴀᴍᴘʟᴇ:+2557145950xx ᴛʜᴇɴ ʏᴏᴜ ᴄᴀɴ ɢᴇᴛ ʏᴏᴜʀ sᴇssɪᴏɴ_ɪᴅ




<a href='https://session-site-navy.vercel.app' target="_blank"><img alt='joel' src='https://img.shields.io/badge/PAIR CODE-h?color=navy&style=for-the-badge&logo=visualstudiocode'/></a></p>

**ᴅᴇᴘʟᴏʏ ᴡᴏʀᴋ_ғʟᴏᴡs**








```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start

```


