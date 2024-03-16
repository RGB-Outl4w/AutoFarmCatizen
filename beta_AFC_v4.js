function maketr() {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", window.location.href);
  iframe.setAttribute('id', "clicker");
  iframe.style.cssText = 'width: 100%; height: 100vh; border: none;';
  document.body.innerHTML = '';
  document.body.appendChild(iframe);
}

function genround() {
  const div = document.createElement("div");
  div.id = "SELECT";
  div.className = "round-div";
  document.body.appendChild(div);
}

function muteMe(element) {
  element.muted = true;
  element.pause();
}

function mutePage() {
  document.querySelectorAll("video, audio").forEach(muteMe);
}

mutePage();

const points = [
  { x: 25.649350649350648, y: 61.86440677966102 },
  { x: 41.55844155844156, y: 61.86440677966102 },
  { x: 57.7922077922078, y: 61.86440677966102 },
  { x: 74.35064935064936, y: 61.86440677966102 },
  { x: 25.649350649350648, y: 70.12711864406779 },
  { x: 41.55844155844156, y: 70.12711864406779 },
  { x: 57.7922077922078, y: 70.12711864406779 },
  { x: 74.35064935064936, y: 70.12711864406779 },
  { x: 25.649350649350648, y: 78.17796610169492 },
  { x: 41.55844155844156, y: 78.17796610169492 },
  { x: 57.7922077922078, y: 78.17796610169492 },
  { x: 74.35064935064936, y: 78.17796610169492 }
];

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function delayedLoop() {
//  if (!window.manager.club.clubInfo || window.manager.club.clubInfo.id !== 95 || window.manager.club.clubInfo.name !== "MD Says") {
//    window.manager.club.reqJoinClub(95);
//  }

  Laya.SoundManager.setMusicVolume(0);
  Laya.SoundManager.setSoundVolume(0);

  await wait(1000);

  setInterval(() => {
    const cats = window.manager.cat.cats;
    const catMap = {};
    
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      if (cat !== null) {
        if (catMap.hasOwnProperty(cat)) {
        //  if (!window.manager.club.clubInfo || window.manager.club.clubInfo.id !== 95 || window.manager.club.clubInfo.name !== "MD Says") {
        //    window.manager.club.reqJoinClub(95);
        //  }
          simulateMouseDrag("layaCanvas", cw(points[catMap[cat]].x), ch(points[catMap[cat]].y), cw(points[i].x), ch(points[i].y));
          break;
        }
        catMap[cat] = i;
      }
    }
    simulateMouseDrag("layaCanvas", 100, 100);
  }, 1000);
}

function simulateMouseDrag(elementId, startX, startY, endX, endY) {
  const element = document.getElementById(elementId);
  const startEvent = new MouseEvent("mousedown", { clientX: startX, clientY: startY, bubbles: true, button: 0 });
  const moveEvent = new MouseEvent("mousemove", { clientX: endX, clientY: endY, bubbles: true });
  const endEvent = new MouseEvent("mouseup", { clientX: endX, clientY: endY, bubbles: true, button: 0 });
  
  element.dispatchEvent(startEvent);
  element.dispatchEvent(moveEvent);
  element.dispatchEvent(endEvent);
}

function movesel(top, left) {
  const div = document.getElementById("SELECT");
  div.style.cssText = `position: absolute; top: ${top - 35}px; left: ${left - 22}px;`;
}

function cw(percent) {
  return window.innerWidth * percent / 100;
}

function ch(percent) {
  return window.innerHeight * percent / 100;
}

// Apply CSS for round div
const style = document.createElement('style');
style.innerHTML = `
  .round-div {
    position: absolute;
    transition: 0.3s;
    width: 38px;
    height: 40px;
    border-radius: 38px;
    border-width: 4px;
    border-color: red;
    border-style: solid;
    opacity: 0.35;
  }
`;
document.head.appendChild(style);

delayedLoop();
