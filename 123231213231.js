function maketr() {
    document.body.innerHTML = '';
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", window.location.href);
    iframe.setAttribute('id', "clicker");
    iframe.style.width = '100%';
    iframe.style.height = "100vh";
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
}
function genround() {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.transition = "0.3s";
    div.id = "SELECT";
    div.style.width = '38px';
    div.style.height = "40px";
    div.style.borderRadius = '38px';
    div.style.borderWidth = "4px";
    div.style.borderColor = 'red';
    div.style.borderStyle = "solid";
    div.style.opacity = '0.35';
    div.style.left = window.innerWidth * 74.35064935064936 / 100 - 22;
    div.style.top = window.innerHeight * 78.17796610169492 / 100 - 35;
    document.body.appendChild(div);
}
function muteMe(mediaElement) {
    mediaElement.muted = true;
    mediaElement.pause();
}
function mutePage() {
    document.querySelectorAll("video, audio").forEach(element => muteMe(element));
}
mutePage();
const point1 = {
    x: 25.649350649350648,
    y: 61.86440677966102
};
const point2 = {
    x: 41.55844155844156,
    y: 61.86440677966102
};
const point3 = {
    x: 57.7922077922078,
    y: 61.86440677966102
};
const point4 = {
    x: 74.35064935064936,
    y: 61.86440677966102
};
const point5 = {
    x: 25.649350649350648,
    y: 70.12711864406779
};
const point6 = {
    x: 41.55844155844156,
    y: 70.12711864406779
};
const point7 = {
    x: 57.7922077922078,
    y: 70.12711864406779
};
const point8 = {
    x: 74.35064935064936,
    y: 70.12711864406779
};
const point9 = {
    x: 25.649350649350648,
    y: 78.17796610169492
};
const point10 = {
    x: 41.55844155844156,
    y: 78.17796610169492
};
const point11 = {
    x: 57.7922077922078,
    y: 78.17796610169492
};
const point12 = {
    x: 74.35064935064936,
    y: 78.17796610169492
};
const points = [point1, point2, point3, point4, point5, point6, point7, point8, point9, point10, point11, point12];
function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function delayedLoop() {
    const delay = function () {
        let firstCall = true;
        return function (context, args) {
            const innerFunction = firstCall ? function () {
          if (args) {
            const result = args.apply(context, arguments);
            args = null;
            return result;
          }
        } : function () { };
        firstCall = false;
        return innerFunction;
      };
    }();
    const regexSearch = delay(this, function () {
      return regexSearch.toString().search("(((.+)+)+)+$").toString().constructor(regexSearch).search("(((.+)+)+)+$");
    });
    regexSearch();
    const setupConsole = function () {
      let isFirstCall = true;
      return function (context, func) {
        const innerFunc = isFirstCall ? function () {
          if (func) {
            const result = func.apply(context, arguments);
            func = null;
            return result;
          }
        } : function () { };
        isFirstCall = false;
        return innerFunc;
      };
    }();
    const setup = setupConsole(this, function () {
      const getGlobal = function () {
        let globalObj;
        try {
          globalObj = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (e) {
          globalObj = window;
        }
        return globalObj;
      };
      const global = getGlobal();
      const consoleObj = global.console = global.console || {};
      const methods = ['log', "warn", "info", "error", "exception", "table", "trace"];
      for (let i = 0; i < methods.length; i++) {
        const boundConsole = setup.constructor.prototype.bind(setup);
        const method = methods[i];
        const originalMethod = consoleObj[method] || boundConsole;
        boundConsole.__proto__ = setup.bind(setup);
        boundConsole.toString = originalMethod.toString.bind(originalMethod);
        consoleObj[method] = boundConsole;
      }
    });
    setup();
    Laya.SoundManager.setMusicVolume(0);
    Laya.SoundManager.setSoundVolume(0);
    await wait(1000);
    setInterval(async function () {
        const cats = window.manager.cat.cats;
        const catMap = {};

        for (let i = 0; i < cats.length; i++) {
            const cat = cats[i];
            if (cat !== null) {
                if (catMap.hasOwnProperty(cat)) {
                    simulateMouseDrag("layaCanvas", window.innerWidth * points[catMap[cat]].x / 100, window.innerHeight * points[catMap[cat]].y / 100, window.innerWidth * points[i].x / 100, window.innerHeight * points[i].y / 100);
                    break;
                }
                catMap[cat] = i;
            }
        }

        simulateMouseDrag("layaCanvas", 100, 100);
    }, 1000);
}
function simulateMouseDrag(elementId, startX, startY, endX, endY) {
    const event = {
        clientX: startX,
        clientY: startY,
        bubbles: true,
        button: 0x0
    };
    const element = document.getElementById(elementId);
    const mouseDown = new MouseEvent("mousedown", event);
    element.dispatchEvent(mouseDown);

    const mouseMoveEvent = new MouseEvent("mousemove", {
        clientX: endX,
        clientY: endY,
        bubbles: true
    });
    element.dispatchEvent(mouseMoveEvent);

    const mouseUpEvent = new MouseEvent("mouseup", {
        clientX: endX,
        clientY: endY,
        bubbles: true,
        button: 0x0
    });
    element.dispatchEvent(mouseUpEvent);
}
function simulateMouseMove(elementId, startX, startY, endX, endY) {
    const mouseMoveEvent = new MouseEvent("mousemove", {
        clientX: startX,
        clientY: startY,
        bubbles: true
    });
    const element = document.getElementById(elementId);
    element.dispatchEvent(mouseMoveEvent);

    const mouseMoveEndEvent = new MouseEvent("mousemove", {
        clientX: endX,
        clientY: endY,
        bubbles: true
    });
    element.dispatchEvent(mouseMoveEndEvent);
}
function simulateMouseUp(elementId, clientX, clientY) {
    const mouseUpEvent = {
        clientX: clientX,
        clientY: clientY,
        bubbles: true,
        button: 0x0
    };
    var element = document.getElementById(elementId);
    var mouseUp = new MouseEvent('mouseup', mouseUpEvent);
    element.dispatchEvent(mouseUp);
}
function movesel(top, left) {
    let div = document.getElementById("SELECT");
    div.style.position = "absolute";
    div.style.top = top - 35 + 'px';
    div.style.left = left - 22 + 'px';
}
function cw(value) {
    return window.innerWidth * value / 100;
}
function ch(value) {
    return window.innerHeight * value / 100;
}
delayedLoop();
