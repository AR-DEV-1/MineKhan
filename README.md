# 🌟 Customizing MineKhan - The Ultimate Minecraft Experience

Welcome to the incredible world of MineKhan, where Minecraft meets education in a truly exceptional way! Explore, build, and learn while having a blast. 🌍⛏️

## 🚀 Embark on Your Adventure

Dive into the MineKhan universe and unlock endless possibilities:

- **Khan Academy Magic**: [Discover MineKhan on Khan Academy](https://www.khanacademy.org/computer-programming/minekhan/5647155001376768)
- **GitHub Awesomeness**: [Check out our GitHub Repository](https://willard21.github.io/MineKhan/dist/)

## 🌐 Join the Multiverse

Become part of our multiplayer community and immerse yourself in a world of excitement:

- **Willard's Multiplayer Server**: [Join the Adventure](https://willard.fun/login)
- **Live Game Action**: [Play MineKhan Live](https://willard.fun/minekhan)
- We're continuously enhancing the game, so expect a few bugs here and there. 🐛

## 💬 Join the Conversation

Share your brilliance and collaborate with fellow enthusiasts:

- **Replit Brainstorm**: [Contribute and Share Ideas on Replit](https://repl.it/talk/share/MineKhan-Minecraft-for-Khan-Academy/87382)
- **Discord Delight**: [Connect with the MineKhan Community on Discord](https://discord.gg/j3SzCQU)

## 🌟 Enhance the Project

Become a MineKhan wizard by diving into the project's inner workings:

1. Clone or download the project.
2. Navigate to the project directory using your terminal.
3. Run `npm install` to get the necessary dependencies.
4. Execute `npm run build` to create a stunning MineKhan experience in the `dist` folder.
5. Launch a local server by running `node index.js` (localhost:4000) or opening the HTML file.

## 🔨 Crafting C Code to WASM

Unleash the power of C with MineKhan's WebAssembly (WASM) magic:

1. Install emscripten.
2. Run `emcc src/c/caves.c -o test.js -O3 -Os -sEXPORTED_FUNCTIONS=_getCaves -sERROR_ON_UNDEFINED_SYMBOLS=0`. This produces a JS file and a .wasm file.
3. Bid farewell to the JS file.
4. Convert the .wasm file to base64 (online tools can help with this).
5. Paste the base64 content into the `workers/Caves.js` file.
