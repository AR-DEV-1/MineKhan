
# Customizing MineKhan
# 
# 🔨 MineKhan - Minecraft for Khan Academy

Experience the magic of Minecraft in an educational setting on Khan Academy! 🌍⛏️

## 🌐 Explore MineKhan

- Khan Academy Link: [MineKhan on Khan Academy](https://www.khanacademy.org/computer-programming/minekhan/5647155001376768)
- GitHub Repository: [GitHub Release](https://willard21.github.io/MineKhan/dist/)

## 🎮 Multiplayer Adventure

- Join the adventure on [Willard's Multiplayer Server](https://willard.fun/login)
- Play the game live at [MineKhan Game](https://willard.fun/minekhan)
- This is the most up-to-date version, and I'm actively coding in production on this version. Please be patient with any occasional bugs. 🐛

## 💬 Join the Discussion

- Contribute and share your ideas on [Replit](https://repl.it/talk/share/MineKhan-Minecraft-for-Khan-Academy/87382)
- Connect with the MineKhan community on [Discord](https://discord.gg/j3SzCQU)

## 🛠️ Building the Project

To build the project locally:

1. Clone or download the project.
2. Navigate to the project directory using your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm run build` to build the project into the `dist` folder.
5. To start a local server, run `node index.js` (localhost:4000) or open the HTML file.

## 🧱 Compiling C Code to WASM

Compiling the `caves.c` file into WASM:

1. Install emscripten.
2. Run `emcc src/c/caves.c -o test.js -O3 -Os -sEXPORTED_FUNCTIONS=_getCaves -sERROR_ON_UNDEFINED_SYMBOLS=0`. This will output a JS file and a .wasm file.
3. Delete the JS file.
4. Convert the .wasm file to base64 (you can find online tools for this).
5. Copy/paste the base64 content into the `workers/Caves.js` file.

