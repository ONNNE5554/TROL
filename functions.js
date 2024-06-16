import { Database } from 'st.db';
import { Database as ReplitDB } from "quick.replit";
import { getRandomDarkHexCode, createRouletteImage } from "roulette-image";
const is_replit = process.env.REPL_ID && process.env.REPL_SLUG && process.env.REPL_OWNER;
const shuruhatik = `█▀ █░█ █░█ █▀█ █░█ █░█ ▄▀█ ▀█▀ █ █▄▀\n▄█ █▀█ █▄█ █▀▄ █▄█ █▀█ █▀█ ░█░ █ █░█`
export const config = is_replit ? new ReplitDB() : new Database("./config.yml");
export const settings = is_replit ? new Database("./config.yml") : config;
function disabledMultipleButtons(mm, specific_custom_id, username, is_leave = false) {
  mm.components.forEach(async (a, i) => {
    a.components.forEach(async (b, e) => {
      if (specific_custom_id && mm.components[i].components[e].custom_id.includes(specific_custom_id)) {
        mm.components[i].components[e].disabled = is_leave ? false : true
        if (username) mm.components[i].components[e].label = is_leave ? `${+mm.components[i].components[e].custom_id.split("_")[1] + 1}` : username;
      } else if (!specific_custom_id) {
        mm.components[i].components[e].disabled = true
      }
      if (e + 1 == a.components.length && mm.components.length == i + 1) {
        return mm.components
      }
    })
  })
}
function getMultipleButtons(all_buttons) {
  let components = [];
  for (let i = 0; i < all_buttons.length; i += 5) {
    let component = { components: [], type: 1 }
    for (let btn of all_buttons.slice(i, i + 5)) {
      component.components.push(btn);
    }
    components.push(component);
  }
  return components;
}

