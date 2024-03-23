# AutoFarmCatizen

![Catizen logo](https://catizen.ai/static/images/index-logo-mobile.png)

## Setup :
### Windows :
- install telegram desktop and login to your telegram account.
- after login go to settings > advanced > experimental settings > enable webview inspecting.
- reopen your telegram.
- open catizen webview.
- press ```ctrl+shift+i``` to open console.
- paste ```fetch('https://raw.githubusercontent.com/RGB-Outl4w/AutoFarmCatizen/rel/release_AutoFarmCatizen_telegramwebviewscript.js').then(response => response.text()).then(script => eval(script));``` , if paste dont work , type ```allow pasting``` on console and paste again.

### On Mac :
- install telegram desktop and login to your telegram account.
- after login go to settings > advanced > experimental settings > enable webview inspecting.
- reopen your telegram.
- open catizen webview.
- open savari > develop > your macbook device > telegram > game.catizen.ai, it will open web inspector telegram.
- paste ```fetch('https://raw.githubusercontent.com/RGB-Outl4w/AutoFarmCatizen/rel/release_AutoFarmCatizen_telegramwebviewscript.js').then(response => response.text()).then(script => eval(script));``` , if paste dont work , type ```allow pasting``` on console and paste again.

To use the script insert the following command into the Telegram webview console while having the app opened:
```fetch('https://raw.githubusercontent.com/RGB-Outl4w/AutoFarmCatizen/rel/release_AutoFarmCatizen_telegramwebviewscript.js').then(response => response.text()).then(script => eval(script));```

## What this script does:
* Automatically merges cats for you
* Automatically opens airdrops with cats


Known issues:
  * ~~The application sometimes crashes (devs' problem) and stops merging your cats, keeping you at the same progress. I have no current solution for this, the only hope is that the devs fix it on their side.~~ (seems to be fixed in the [main](https://github.com/RGB-Outl4w/Catizenfarm/blob/rel/release_AutoFarmCatizen_telegramwebviewscript.js) version)
