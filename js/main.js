function buildIOSMeta() {
    for (var n, i, r = [{
        name: "viewport",
        content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
    }, {
        name: "apple-mobile-web-app-capable",
        content: "yes"
    }, {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
    }], t = 0; t < r.length; t++)
        n = document.createElement("meta"),
        n.name = r[t].name,
        n.content = r[t].content,
        i = window.document.head.querySelector('meta[name="' + n.name + '"]'),
        i && i.parentNode.removeChild(i),
        window.document.head.appendChild(n)
}
function hideIOSFullscreenPanel() {
    document.querySelector(".xxx-ios-fullscreen-message").style.display = "none";
    document.querySelector(".xxx-ios-fullscreen-scroll").style.display = "none";
    document.querySelector(".xxx-game-iframe-full").classList.remove("xxx-game-iframe-iphone-se")
}
function buildIOSFullscreenPanel() {
    var n = "";
    n += '<div class="xxx-ios-fullscreen-message">';
    n += '<div class="xxx-ios-fullscreen-swipe">';
    n += "<\/div>";
    n += "<\/div>";
    n += '<div class="xxx-ios-fullscreen-scroll">';
    n += "<\/div>";
    document.body.insertAdjacentHTML("beforeend", n)
}
function showIOSFullscreenPanel() {
    document.querySelector(".xxx-ios-fullscreen-message").style.display = "none";
    document.querySelector(".xxx-ios-fullscreen-scroll").style.display = "none"
}
function __iosResize() {
    if (window.scrollTo(0, 0),
    console.log(window.devicePixelRatio),
    console.log(window.innerWidth),
    console.log(window.innerHeight),
    platform.product === "iPhone")
        switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
            case 568:
                window.innerHeight === 320 || document.querySelector(".xxx-game-iframe-full").classList.add("xxx-game-iframe-iphone-se");
                break;
            case 667:
                window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
            case 736:
                window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 724:
                window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
        }
}
function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}
function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (n) {
        return !0
    }
}
function isIOSLessThen13() {
    var n = platform.os
      , t = n.family.toLowerCase()
      , i = parseFloat(n.version);
    return t === "ios" && i < 13 ? !0 : !1
}
function isTablet() {
    var n = navigator.userAgent.toLowerCase();
    return n.indexOf("ipad") !== -1 ? !0 : n.indexOf("android") > -1 && n.indexOf("mobile") === -1 ? !0 : !1
}
function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}
function isIpad() {
    var n = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
      , t = navigator.userAgent.includes("Intel Mac OS X");
    return n && t
}
function isMobile() {
    return isIpad() ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}
function isIOS() {
    var n, t;
    if (isIpad())
        return !0;
    for (n = ["iPad", "iPhone", "iPod", "Mac"]; n.length; ) {
        let i = navigator?.userAgentData?.platform || navigator?.platform;
        if (i = i.toLowerCase(),
        t = n.pop(),
        i && i.includes(t.toLowerCase()))
            return !0
    }
    return !1
}
function trace(n) {
    console.log(n)
}
function getSize(n) {
    var u, e = n.toLowerCase(), f = window.document, t = f.documentElement, i, r;
    return window["inner" + n] === undefined ? u = t["client" + n] : window["inner" + n] != t["client" + n] ? (i = f.createElement("body"),
    i.id = "vpw-test-b",
    i.style.cssText = "overflow:scroll",
    r = f.createElement("div"),
    r.id = "vpw-test-d",
    r.style.cssText = "position:absolute;top:-1000px",
    r.innerHTML = "<style>@media(" + e + ":" + t["client" + n] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}<\/style>",
    i.appendChild(r),
    t.insertBefore(i, f.head),
    u = r["offset" + n] == 7 ? t["client" + n] : window["inner" + n],
    t.removeChild(i)) : u = window["inner" + n],
    u
}
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function getIOSWindowHeight() {
    var n = document.documentElement.clientWidth / window.innerWidth;
    return window.innerHeight * n
}
function getHeightOfIOSToolbars() {
    var n = (window.orientation === 0 ? screen.height : screen.width) - getIOSWindowHeight();
    return n > 1 ? n : 0
}
function sizeHandler() {
    var i, r, f, h;
    if (window.scrollTo(0, 1),
    $("#canvas")) {
        i = platform.name !== null && platform.name.toLowerCase() === "safari" ? getIOSWindowHeight() : getSize("Height");
        r = getSize("Width");
        s_bFocus && _checkOrientation(r, i);
        f = Math.min(i / CANVAS_HEIGHT, r / CANVAS_WIDTH);
        s_bLandscape = r > i ? !0 : !1;
        var n = Math.round(CANVAS_WIDTH * f)
          , t = Math.round(CANVAS_HEIGHT * f)
          , e = 0;
        t < i ? (e = i - t,
        t += e,
        n += e * (CANVAS_WIDTH / CANVAS_HEIGHT)) : n < r && (e = r - n,
        n += e,
        t += e * (CANVAS_HEIGHT / CANVAS_WIDTH));
        var u = i / 2 - t / 2
          , o = r / 2 - n / 2
          , s = CANVAS_WIDTH / n;
        (o * s < -EDGEBOARD_X || u * s < -EDGEBOARD_Y) && (f = Math.min(i / (CANVAS_HEIGHT - EDGEBOARD_Y * 2), r / (CANVAS_WIDTH - EDGEBOARD_X * 2)),
        n = Math.round(CANVAS_WIDTH * f),
        t = Math.round(CANVAS_HEIGHT * f),
        u = (i - t) / 2,
        o = (r - n) / 2,
        s = CANVAS_WIDTH / n);
        s_iOffsetX = -1 * o * s;
        s_iOffsetY = -1 * u * s;
        u >= 0 && (s_iOffsetY = 0);
        o >= 0 && (s_iOffsetX = 0);
        s_oGame && s_oGame.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oCardSelection !== null && s_oCardSelection.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oMenu !== null && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone && s_oStage ? (canvas = document.getElementById("canvas"),
        s_oStage.canvas.width = n * 2,
        s_oStage.canvas.height = t * 2,
        canvas.style.width = n + "px",
        canvas.style.height = t + "px",
        h = Math.min(n / CANVAS_WIDTH, t / CANVAS_HEIGHT),
        s_iScaleFactor = h * 2,
        s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", n + "px"),
        $("#canvas").css("height", t + "px")) : s_oStage && (s_oStage.canvas.width = n,
        s_oStage.canvas.height = t,
        s_iScaleFactor = Math.min(n / CANVAS_WIDTH, t / CANVAS_HEIGHT),
        s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        u < 0 ? $("#canvas").css("top", u + "px") : (u = (i - t) / 2,
        $("#canvas").css("top", u + "px"));
        $("#canvas").css("left", o + "px");
        fullscreenHandler()
    }
}
function _checkOrientation(n, t) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (n > t ? $(".orientation-msg-container").attr("data-orientation") === "landscape" ? ($(".orientation-msg-container").css("display", "none"),
    s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()) : $(".orientation-msg-container").attr("data-orientation") === "portrait" ? ($(".orientation-msg-container").css("display", "none"),
    s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()))
}
function isSquaredRatio() {
    var n = CANVAS_WIDTH - 2 * s_iOffsetX, t = CANVAS_HEIGHT - 2 * s_iOffsetY, i;
    return i = n > t ? n / t : t / n,
    i < 4 / 3 ? !0 : !1
}
function smartResize(n, t, i) {
    if (n.getBounds() !== null) {
        var u = CANVAS_WIDTH - 2 * s_iOffsetX - t
          , f = CANVAS_HEIGHT - 2 * s_iOffsetY - i
          , r = inRectResize(n, u, f);
        n.scaleX = n.scaleY = 1;
        r < 1 && (n.scaleX = n.scaleY = r)
    }
}
function inRectResize(n, t, i) {
    function u(n, t) {
        return t / n
    }
    if (n.getBounds() !== null && n.getBounds() !== undefined) {
        var f = u(n.getBounds().width, t)
          , e = u(n.getBounds().height, i)
          , r = Math.min(f, e);
        return n.scaleX = n.scaleY = r,
        r
    }
}
function createBitmap(n, t, i) {
    var u = new createjs.Bitmap(n)
      , r = new createjs.Shape;
    return t && i ? r.graphics.beginFill("#fff").drawRect(0, 0, t, i) : r.graphics.beginFill("#ff0").drawRect(0, 0, n.width, n.height),
    u.hitArea = r,
    u
}
function createSprite(n, t, i, r, u, f) {
    var e, o;
    return e = t !== null ? new createjs.Sprite(n,t) : new createjs.Sprite(n),
    o = new createjs.Shape,
    o.graphics.beginFill("#000000").drawRect(-i, -r, u, f),
    e.hitArea = o,
    e
}
function pad(n, t, i) {
    return i = i || "0",
    n = n + "",
    n.length >= t ? n : new Array(t - n.length + 1).join(i) + n
}
function randomFloatBetween(n, t, i) {
    return typeof i == "undefined" && (i = 2),
    parseFloat(Math.min(n + Math.random() * (t - n), t).toFixed(i))
}
function rotateVector2D(n, t) {
    var i = t.getX() * Math.cos(n) + t.getY() * Math.sin(n)
      , r = t.getX() * -Math.sin(n) + t.getY() * Math.cos(n);
    t.set(i, r)
}
function tweenVectorsOnX(n, t, i) {
    return n + i * (t - n)
}
function shuffle(n) {
    for (var t = n.length, r, i; 0 !== t; )
        i = Math.floor(Math.random() * t),
        t -= 1,
        r = n[t],
        n[t] = n[i],
        n[i] = r;
    return n
}
function bubbleSort(n) {
    var i, t, r;
    do
        for (i = !1,
        t = 0; t < n.length - 1; t++)
            n[t] > n[t + 1] && (r = n[t],
            n[t] = n[t + 1],
            n[t + 1] = r,
            i = !0);
    while (i)
}
function compare(n, t) {
    return n.index > t.index ? -1 : n.index < t.index ? 1 : 0
}
function easeLinear(n, t, i, r) {
    return i * n / r + t
}
function easeInQuad(n, t, i, r) {
    return i * (n /= r) * n + t
}
function easeInSine(n, t, i, r) {
    return -i * Math.cos(n / r * (Math.PI / 2)) + i + t
}
function easeInCubic(n, t, i, r) {
    return i * (n /= r) * n * n + t
}
function getTrajectoryPoint(n, t) {
    var i = new createjs.Point
      , r = (1 - n) * (1 - n)
      , u = n * n;
    return i.x = r * t.start.x + 2 * (1 - n) * n * t.traj.x + u * t.end.x,
    i.y = r * t.start.y + 2 * (1 - n) * n * t.traj.y + u * t.end.y,
    i
}
function formatTime(n) {
    var i, t, r;
    return n /= 1e3,
    i = Math.floor(n / 60),
    t = n - i * 60,
    t = parseFloat(t).toFixed(1),
    r = "",
    r += i < 10 ? "0" + i + ":" : i + ":",
    r + (t < 10 ? "0" + t : t)
}
function formatValue(n) {
    return TEXT_CURRENCY + n.toFixed(2)
}
function degreesToRadians(n) {
    return n * Math.PI / 180
}
function checkRectCollision(n, t) {
    var i, r;
    return i = getBounds(n, .9),
    r = getBounds(t, .98),
    calculateIntersection(i, r)
}
function calculateIntersection(n, t) {
    var u, f, i = {}, r = {};
    return i.cx = n.x + (i.hw = n.width / 2),
    i.cy = n.y + (i.hh = n.height / 2),
    r.cx = t.x + (r.hw = t.width / 2),
    r.cy = t.y + (r.hh = t.height / 2),
    u = Math.abs(i.cx - r.cx) - (i.hw + r.hw),
    f = Math.abs(i.cy - r.cy) - (i.hh + r.hh),
    u < 0 && f < 0 ? (u = Math.min(Math.min(n.width, t.width), -u),
    f = Math.min(Math.min(n.height, t.height), -f),
    {
        x: Math.max(n.x, t.x),
        y: Math.max(n.y, t.y),
        width: u,
        height: f,
        rect1: n,
        rect2: t
    }) : null
}
function getBounds(n, t) {
    var i = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    }, l, v, u, c, f, e, o, s, r, a, h;
    if (n instanceof createjs.Container) {
        for (i.x2 = -Infinity,
        i.y2 = -Infinity,
        l = n.children,
        v = l.length,
        c = 0; c < v; c++)
            u = getBounds(l[c], 1),
            u.x < i.x && (i.x = u.x),
            u.y < i.y && (i.y = u.y),
            u.x + u.width > i.x2 && (i.x2 = u.x + u.width),
            u.y + u.height > i.y2 && (i.y2 = u.y + u.height);
        i.x == Infinity && (i.x = 0);
        i.y == Infinity && (i.y = 0);
        i.x2 == Infinity && (i.x2 = 0);
        i.y2 == Infinity && (i.y2 = 0);
        i.width = i.x2 - i.x;
        i.height = i.y2 - i.y;
        delete i.x2;
        delete i.y2
    } else
        r = {},
        n instanceof createjs.Bitmap ? (a = n.sourceRect || n.image,
        r.width = a.width * t,
        r.height = a.height * t) : n instanceof createjs.Sprite ? n.spriteSheet._frames && n.spriteSheet._frames[n.currentFrame] && n.spriteSheet._frames[n.currentFrame].image ? (h = n.spriteSheet.getFrame(n.currentFrame),
        r.width = h.rect.width,
        r.height = h.rect.height,
        r.regX = h.regX,
        r.regY = h.regY) : (i.x = n.x || 0,
        i.y = n.y || 0) : (i.x = n.x || 0,
        i.y = n.y || 0),
        r.regX = r.regX || 0,
        r.width = r.width || 0,
        r.regY = r.regY || 0,
        r.height = r.height || 0,
        i.regX = r.regX,
        i.regY = r.regY,
        f = n.localToGlobal(0 - r.regX, 0 - r.regY),
        e = n.localToGlobal(r.width - r.regX, r.height - r.regY),
        o = n.localToGlobal(r.width - r.regX, 0 - r.regY),
        s = n.localToGlobal(0 - r.regX, r.height - r.regY),
        i.x = Math.min(Math.min(Math.min(f.x, e.x), o.x), s.x),
        i.y = Math.min(Math.min(Math.min(f.y, e.y), o.y), s.y),
        i.width = Math.max(Math.max(Math.max(f.x, e.x), o.x), s.x) - i.x,
        i.height = Math.max(Math.max(Math.max(f.y, e.y), o.y), s.y) - i.y;
    return i
}
function NoClickDelay(n) {
    this.element = n;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(n) {
    for (var t = n.length, r, i; t > 0; )
        i = Math.floor(Math.random() * t),
        t--,
        r = n[t],
        n[t] = n[i],
        n[i] = r;
    return n
}
function arrayUnique(n) {
    for (var i, t = n.concat(), r = 0; r < t.length; ++r)
        for (i = r + 1; i < t.length; ++i)
            t[r] === t[i] && t.splice(i--, 1);
    return t
}
function ctlArcadeResume() {
    s_oMain !== null && s_oMain.startUpdate()
}
function ctlArcadePause() {
    s_oMain !== null && s_oMain.stopUpdate()
}
function getParamValue(n) {
    for (var i, u = window.location.search.substring(1), r = u.split("&"), t = 0; t < r.length; t++)
        if (i = r[t].split("="),
        i[0] == n)
            return i[1]
}
function playSound(n, t, i) {
    return DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (s_aSounds[n].play(),
    s_aSounds[n].volume(t),
    s_aSounds[n].loop(i),
    s_aSounds[n]) : null
}
function stopSound(n) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && n.stop()
}
function setVolume(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].volume(t)
}
function setMute(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && n.mute(t)
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen,
    s_oInterface !== null && s_oInterface.resetFullscreenBut(),
    s_oMenu !== null && s_oMenu.resetFullscreenBut(),
    s_oCardSelection !== null && s_oCardSelection.resetFullscreenBut())
}
function CSpriteLibrary() {
    var t = {}, n, i, u, f, e, r;
    this.init = function(t, o, s) {
        n = {};
        i = 0;
        u = 0;
        f = t;
        e = o;
        r = s
    }
    ;
    this.addSprite = function(r, u) {
        if (t.hasOwnProperty(r))
            return !1;
        var f = new Image;
        return t[r] = n[r] = {
            szPath: u,
            oSprite: f,
            bLoaded: !1
        },
        i++,
        !0
    }
    ;
    this.getSprite = function(n) {
        return t.hasOwnProperty(n) ? t[n].oSprite : null
    }
    ;
    this._onSpritesLoaded = function() {
        i = 0;
        e.call(r)
    }
    ;
    this._onSpriteLoaded = function() {
        f.call(r);
        ++u === i && this._onSpritesLoaded()
    }
    ;
    this.loadSprites = function() {
        for (var t in n)
            n[t].oSprite.oSpriteLibrary = this,
            n[t].oSprite.szKey = t,
            n[t].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }
            ,
            n[t].oSprite.onerror = function(t) {
                var i = t.currentTarget;
                setTimeout(function() {
                    n[i.szKey].oSprite.src = n[i.szKey].szPath
                }, 500)
            }
            ,
            n[t].oSprite.src = n[t].szPath
    }
    ;
    this.setLoaded = function(n) {
        t[n].bLoaded = !0
    }
    ;
    this.isLoaded = function(n) {
        return t[n].bLoaded
    }
    ;
    this.getNumSprites = function() {
        return i
    }
}
function CPreloader() {
    var s, o, r, t, u, f, i, e, n;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    }
    ;
    this.unload = function() {
        n.removeAllChildren()
    }
    ;
    this._onImagesLoaded = function() {}
    ;
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    }
    ;
    this.attachSprites = function() {
        var c = new createjs.Shape, h;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(c);
        h = s_oSpriteLibrary.getSprite("200x200");
        i = createBitmap(h);
        i.regX = h.width * .5;
        i.regY = h.height * .5;
        i.x = CANVAS_WIDTH / 2;
        i.y = CANVAS_HEIGHT / 2 - 180;
        n.addChild(i);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(i.x - 100, i.y - 100, 200, 200, 10);
        n.addChild(e);
        i.mask = e;
        h = s_oSpriteLibrary.getSprite("progress_bar");
        t = createBitmap(h);
        t.x = CANVAS_WIDTH / 2 - h.width / 2;
        t.y = CANVAS_HEIGHT / 2 + 50;
        n.addChild(t);
        s = h.width;
        o = h.height;
        u = new createjs.Shape;
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, 1, o);
        n.addChild(u);
        t.mask = u;
        r = new createjs.Text("","30px " + PRIMARY_FONT,"#fff");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2 + 100;
        r.textBaseline = "alphabetic";
        r.textAlign = "center";
        n.addChild(r);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            n.removeChild(f)
        })
    }
    ;
    this.refreshLoader = function(n) {
        r.text = n + "%";
        n === 100 && (s_oMain._onRemovePreloader(),
        r.visible = !1,
        t.visible = !1);
        u.graphics.clear();
        var i = Math.floor(n * s / 100);
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, i, o)
    }
    ;
    this._init()
}
function CMain(n) {
    var t, i = 0, r = 0, u = STATE_LOADING, e, f, s, h, o;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = jQuery.browser.mobile;
        s_bMobile === !1 && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        seekAndDestroy() ? f = new CPreloader : f = new CPreloader
    }
    ;
    this.preloaderReady = function() {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && this._initSounds();
        this._loadImages();
        t = !0
    }
    ;
    this.soundLoaded = function() {
        i++;
        var n = Math.floor(i / r * 100);
        f.refreshLoader(n)
    }
    ;
    this._initSounds = function() {
        var n;
        for (Howler.mute(!s_bAudioActive),
        s_aSoundsInfo = [],
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        }),
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        }),
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "launch_ball",
            loop: !1,
            volume: 1,
            ingamename: "launch_ball"
        }),
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win_row",
            loop: !1,
            volume: 1,
            ingamename: "win_row"
        }),
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        }),
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        }),
        n = 1; n <= NUM_NUMBERS; n++)
            s_aSoundsInfo.push({
                path: "./sounds/numbers/",
                filename: n,
                loop: !1,
                volume: 1,
                ingamename: n
            });
        for (r += s_aSoundsInfo.length,
        s_aSounds = [],
        n = 0; n < s_aSoundsInfo.length; n++)
            this.tryToLoadSound(s_aSoundsInfo[n], !1)
    }
    ;
    this.tryToLoadSound = function(n, t) {
        setTimeout(function() {
            s_aSounds[n.ingamename] = new Howl({
                src: ["./sounds/" + n.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: n.loop,
                volume: n.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (s_aSounds[s_aSoundsInfo[t].ingamename]._sounds.length > 0 && n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[t], !0);
                            break
                        } else
                            document.querySelector("#block_game").style.display = "none"
                },
                onplayerror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[t].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[t].ingamename].play();
                                s_aSoundsInfo[t].ingamename === "soundtrack" && s_oGame !== null && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, t ? 200 : 0)
    }
    ;
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_select_card", "./sprites/bg_select_card.jpg");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_paytable", "./sprites/but_paytable.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_plus", "./sprites/but_plus.png");
        s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png");
        s_oSpriteLibrary.addSprite("plus_display", "./sprites/plus_display.png");
        s_oSpriteLibrary.addSprite("but_buy_cards", "./sprites/but_buy_cards.png");
        s_oSpriteLibrary.addSprite("but_buy_cards_disabled", "./sprites/but_buy_cards_disabled.png");
        s_oSpriteLibrary.addSprite("num_cards_panel", "./sprites/num_cards_panel.png");
        s_oSpriteLibrary.addSprite("num_balls_panel", "./sprites/num_balls_panel.png");
        s_oSpriteLibrary.addSprite("tube", "./sprites/tube.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("card_cell", "./sprites/card_cell.png");
        s_oSpriteLibrary.addSprite("but_gui", "./sprites/but_gui.png");
        s_oSpriteLibrary.addSprite("but_ball", "./sprites/but_ball.png");
        s_oSpriteLibrary.addSprite("board_cell", "./sprites/board_cell.png");
        s_oSpriteLibrary.addSprite("number_extract_bg", "./sprites/number_extract_bg.png");
        s_oSpriteLibrary.addSprite("ball_preview", "./sprites/ball_preview.png");
        s_oSpriteLibrary.addSprite("card_highlight", "./sprites/card_highlight.png");
        s_oSpriteLibrary.addSprite("display_small", "./sprites/display_small.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("card_bg", "./sprites/card_bg.png");
        s_oSpriteLibrary.addSprite("board_bg", "./sprites/board_bg.png");
        s_oSpriteLibrary.addSprite("board_bg_horiz", "./sprites/board_bg_horiz.png");
        s_oSpriteLibrary.addSprite("bg_credits", "./sprites/bg_credits.png");
        r += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    }
    ;
    this._onImagesLoaded = function() {
        i++;
        var n = Math.floor(i / r * 100);
        f.refreshLoader(n)
    }
    ;
    this._onAllImagesLoaded = function() {}
    ;
    this._onRemovePreloader = function() {
        f.unload();
        playSound("soundtrack", 1, !0);
        this.gotoMenu()
    }
    ;
    this.gotoMenu = function() {
        s = new CMenu;
        u = STATE_MENU
    }
    ;
    this.gotoGame = function() {
        o = new CGame(e);
        u = STATE_GAME;
        $(s_oMain).trigger("game_start")
    }
    ;
    this.gotoHelp = function() {
        h = new CHelp;
        u = STATE_HELP
    }
    ;
    this.stopUpdate = function() {
        t = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && Howler.mute(!0)
    }
    ;
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        t = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_bAudioActive && Howler.mute(!1);
        console.log("startUpdate")
    }
    ;
    this._update = function(n) {
        if (t !== !1) {
            var i = (new Date).getTime();
            s_iTimeElaps = i - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = i;
            s_iCntTime >= 1e3 && (s_iCurFps = s_iCntFps,
            s_iCntTime -= 1e3,
            s_iCntFps = 0);
            u === STATE_GAME && o.update();
            s_oStage.update(n)
        }
    }
    ;
    s_oMain = this;
    e = n;
    ENABLE_CHECK_ORIENTATION = !1;
    SHOW_CREDITS = n.show_credits;
    ENABLE_FULLSCREEN = e.fullscreen;
    s_bAudioActive = n.audio_enable_on_startup;
    this.initContainer()
}
function CTextButton(n, t, i, r, u, f, e, o, s) {
    var a, l, nt, tt, c, v, w, b, k, h, p, y, d, g = s;
    this._init = function(n, t, i, r, u, f, e, o) {
        a = !1;
        l = 1;
        c = [];
        v = [];
        d = createBitmap(i);
        nt = i.width;
        tt = i.height;
        h = new createjs.Container;
        h.x = n;
        h.y = t;
        h.regX = i.width / 2;
        h.regY = i.height / 2;
        s_bMobile || (h.cursor = "pointer");
        h.addChild(d, y);
        g.addChild(h);
        p = new CTLText(h,12,7,i.width - 20,i.height - 10,e,"center","#000",u,1,o,0,r,!0,!0,!1,!1);
        y = new CTLText(h,10,5,i.width - 20,i.height - 10,e,"center",f,u,1,o,0,r,!0,!0,!1,!1);
        this._initListener()
    }
    ;
    this.unload = function() {
        h.off("mousedown", w);
        h.off("pressup", b);
        g.removeChild(h)
    }
    ;
    this.setVisible = function(n) {
        h.visible = n
    }
    ;
    this.setAlign = function(n) {
        y.textAlign = n;
        p.textAlign = n
    }
    ;
    this.setTextX = function(n) {
        y.x = n;
        p.x = n
    }
    ;
    this.setScale = function(n) {
        h.scaleX = h.scaleY = n;
        l = n
    }
    ;
    this.enable = function() {
        a = !1;
        h.cursor = "pointer"
    }
    ;
    this.disable = function() {
        a = !0;
        h.cursor = "default"
    }
    ;
    this._initListener = function() {
        w = h.on("mousedown", this.buttonDown);
        b = h.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(n, t, i) {
        c[n] = t;
        v[n] = i
    }
    ;
    this.addEventListenerWithParams = function(n, t, i, r) {
        c[n] = t;
        v[n] = i;
        k = r
    }
    ;
    this.buttonRelease = function() {
        a || (playSound("click", 1, !1),
        h.scaleX = l,
        h.scaleY = l,
        c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(v[ON_MOUSE_UP], k))
    }
    ;
    this.buttonDown = function() {
        a || (h.scaleX = l * .9,
        h.scaleY = l * .9,
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN]))
    }
    ;
    this.setPosition = function(n, t) {
        h.x = n;
        h.y = t
    }
    ;
    this.tweenPosition = function(n, t, i, r, u, f, e) {
        createjs.Tween.get(h).wait(r).to({
            x: n,
            y: t
        }, i, u).call(function() {
            f !== undefined && f.call(e)
        })
    }
    ;
    this.changeText = function(n) {
        y.refreshText(n);
        p.refreshText(n)
    }
    ;
    this.setX = function(n) {
        h.x = n
    }
    ;
    this.setY = function(n) {
        h.y = n
    }
    ;
    this.getButtonImage = function() {
        return h
    }
    ;
    this.getX = function() {
        return h.x
    }
    ;
    this.getY = function() {
        return h.y
    }
    ;
    this.getSprite = function() {
        return h
    }
    ;
    this.getScale = function() {
        return h.scaleX
    }
    ;
    this._init(n, t, i, r, u, f, e, o)
}
function CTextSpritesheetBut(n, t, i, r, u, f, e, o, s) {
    var v = 1, c, p = !1, a, y, h, w, b, l;
    return this._init = function(n, t, i, r, u, f, e, o, s) {
        var tt, k, d, it;
        c = !1;
        a = [];
        y = [];
        l = createBitmap(i);
        tt = Math.ceil(e / 20);
        h = new createjs.Container;
        h.x = n;
        h.y = t;
        h.regX = i.width / 2;
        h.regY = i.height / 2;
        h.cursor = "pointer";
        o || (k = {
            images: [i],
            frames: {
                width: i.width / 2,
                height: i.height,
                regX: i.width / 4,
                regY: i.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        },
        d = new createjs.SpriteSheet(k),
        l = createSprite(d, "state_false", i.width / 4, i.height / 2, i.width / 2, i.height),
        it = 17,
        h.regX = 0,
        h.regY = 0);
        h.addChild(l);
        var g = 0
          , nt = 0
          , v = i.width / 2 - 20
          , p = i.height - 20;
        b = new CTLText(h,g - v / 2 + 2,nt - p / 2 + 2,v,p,e,"center","#000",u,1,4,0,r,!0,!0,!1,!1);
        w = new CTLText(h,g - v / 2,nt - p / 2,v,p,e,"center",f,u,1,4,0,r,!0,!0,!1,!1);
        s.addChild(h);
        this._initListener()
    }
    ,
    this.unload = function() {
        h.removeAllEventListeners();
        s.removeChild(h)
    }
    ,
    this.setVisible = function(n) {
        h.visible = n
    }
    ,
    this._initListener = function() {
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    }
    ,
    this.addEventListener = function(n, t, i) {
        a[n] = t;
        y[n] = i
    }
    ,
    this.buttonRelease = function() {
        c || p || (playSound("click", 1, !1),
        h.scaleX = 1 * v,
        h.scaleY = 1 * v,
        a[ON_MOUSE_UP] && a[ON_MOUSE_UP].call(y[ON_MOUSE_UP]))
    }
    ,
    this.buttonDown = function() {
        c || p || (h.scaleX = .9 * v,
        h.scaleY = .9 * v,
        a[ON_MOUSE_DOWN] && a[ON_MOUSE_DOWN].call(y[ON_MOUSE_DOWN]))
    }
    ,
    this.enable = function() {
        c = !1;
        h.cursor = "pointer";
        o || l.gotoAndStop("state_true")
    }
    ,
    this.disable = function() {
        c = !0;
        h.cursor = "default";
        o || l.gotoAndStop("state_false")
    }
    ,
    this.toggle = function() {
        c = !c;
        o || (c ? l.gotoAndStop("state_false") : l.gotoAndStop("state_true"))
    }
    ,
    this.setTextPosition = function() {}
    ,
    this.setText = function() {}
    ,
    this.setPosition = function(n, t) {
        h.x = n;
        h.y = t
    }
    ,
    this.setX = function(n) {
        h.x = n
    }
    ,
    this.setY = function(n) {
        h.y = n
    }
    ,
    this.getButtonImage = function() {
        return h
    }
    ,
    this.getX = function() {
        return h.x
    }
    ,
    this.getY = function() {
        return h.y
    }
    ,
    this.block = function(n) {
        p = n
    }
    ,
    this.setScale = function(n) {
        v = n;
        h.scaleX = n;
        h.scaleY = n
    }
    ,
    this.setScaleX = function(n) {
        l.scaleX = n
    }
    ,
    this._init(n, t, i, r, u, f, e, o, s),
    this
}
function CToggle(n, t, i, r, u) {
    var e, o, s, h, c, f;
    this._init = function(n, t, i, r) {
        o = [];
        s = [];
        var h = {
            images: [i],
            frames: {
                width: i.width / 2,
                height: i.height,
                regX: i.width / 4,
                regY: i.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        }
          , c = new createjs.SpriteSheet(h);
        e = r;
        f = createSprite(c, "state_" + e, i.width / 4, i.height / 2, i.width / 2, i.height);
        f.x = n;
        f.y = t;
        f.stop();
        f.cursor = "pointer";
        u.addChild(f);
        this._initListener()
    }
    ;
    this.unload = function() {
        f.off("mousedown", h);
        f.off("pressup", c);
        u.removeChild(f)
    }
    ;
    this._initListener = function() {
        h = f.on("mousedown", this.buttonDown);
        c = f.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(n, t, i) {
        o[n] = t;
        s[n] = i
    }
    ;
    this.setActive = function(n) {
        e = n;
        f.gotoAndStop("state_" + e)
    }
    ;
    this.buttonRelease = function() {
        f.scaleX = 1;
        f.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        f.gotoAndStop("state_" + e);
        o[ON_MOUSE_UP] && o[ON_MOUSE_UP].call(s[ON_MOUSE_UP], e)
    }
    ;
    this.buttonDown = function() {
        f.scaleX = .9;
        f.scaleY = .9;
        o[ON_MOUSE_DOWN] && o[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN])
    }
    ;
    this.setPosition = function(n, t) {
        f.x = n;
        f.y = t
    }
    ;
    this.setMask = function(n) {
        f.mask = n
    }
    ;
    this.getButtonImage = function() {
        return f
    }
    ;
    this._init(n, t, i, r)
}
function CGfxButton(n, t, i, r) {
    var e, f, o, s, h, u;
    return this._init = function(n, t, i, r) {
        e = !1;
        f = [];
        o = [];
        u = createBitmap(i);
        u.x = n;
        u.y = t;
        u.regX = i.width / 2;
        u.regY = i.height / 2;
        u.cursor = "pointer";
        r.addChild(u);
        this._initListener()
    }
    ,
    this.unload = function() {
        u.off("mousedown", s);
        u.off("pressup", h);
        r.removeChild(u)
    }
    ,
    this.setVisible = function(n) {
        u.visible = n
    }
    ,
    this._initListener = function() {
        s = u.on("mousedown", this.buttonDown);
        h = u.on("pressup", this.buttonRelease)
    }
    ,
    this.addEventListener = function(n, t, i) {
        f[n] = t;
        o[n] = i
    }
    ,
    this.buttonRelease = function() {
        e || (playSound("click", 1, !1),
        u.scaleX = 1,
        u.scaleY = 1,
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(o[ON_MOUSE_UP]))
    }
    ,
    this.buttonDown = function() {
        e || (u.scaleX = .9,
        u.scaleY = .9,
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(o[ON_MOUSE_DOWN]))
    }
    ,
    this.enable = function() {
        e = !1;
        u.cursor = "pointer"
    }
    ,
    this.disable = function() {
        e = !0;
        u.cursor = "default"
    }
    ,
    this.setPosition = function(n, t) {
        u.x = n;
        u.y = t
    }
    ,
    this.setX = function(n) {
        u.x = n
    }
    ,
    this.setY = function(n) {
        u.y = n
    }
    ,
    this.setMask = function(n) {
        u.mask = n
    }
    ,
    this.getButtonImage = function() {
        return u
    }
    ,
    this.getX = function() {
        return u.x
    }
    ,
    this.getY = function() {
        return u.y
    }
    ,
    this._init(n, t, i, r),
    this
}
function CToggleText(n, t, i, r, u, f, e, o, s, h, c) {
    var v, p, w, b, k, g, nt, a, y, l, d;
    this._init = function(n, t, i, r, u, f, e, o, s, h) {
        b = [];
        k = [];
        v = n;
        p = u;
        w = f;
        l = new createjs.Container;
        l.x = t;
        l.y = i;
        l.regX = p / 2;
        l.regY = w / 2;
        d.addChild(l);
        var g = {
            images: [r],
            frames: {
                width: p,
                height: w
            },
            animations: {
                on: [0],
                off: [1]
            }
        }
          , c = new createjs.SpriteSheet(g);
        a = v ? createSprite(c, "on", 0, 0, p, w) : createSprite(c, "off", 0, 0, p, w);
        a.stop();
        a.cursor = "pointer";
        l.addChild(a);
        y = new createjs.Text(e,h + "px " + o,s);
        y.textAlign = "center";
        y.shadow = new createjs.Shadow("#000",2,2,2);
        y.textBaseline = "middle";
        y.lineHeight = 24;
        y.x = p / 2 - 1;
        y.y = w / 2 + 2;
        l.addChild(y);
        this._initListener()
    }
    ;
    this.unload = function() {
        l.off("mousedown", g);
        l.off("pressup", nt);
        d.removeChild(a)
    }
    ;
    this.activate = function(n) {
        v = n;
        v ? a.gotoAndStop("on") : a.gotoAndStop("off")
    }
    ;
    this.setPosition = function(n, t) {
        l.x = n;
        l.y = t
    }
    ;
    this.setScale = function(n) {
        l.scaleX = l.scaleY = n
    }
    ;
    this._initListener = function() {
        g = l.on("mousedown", this.buttonDown);
        nt = l.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(n, t, i) {
        b[n] = t;
        k[n] = i
    }
    ;
    this.buttonRelease = function() {
        playSound("click", 1, !1);
        v = !v;
        v ? a.gotoAndStop("on") : a.gotoAndStop("off");
        b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(k[ON_MOUSE_UP], {
            active: v
        })
    }
    ;
    this.buttonDown = function() {
        b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    }
    ;
    this.getContainer = function() {
        return l
    }
    ;
    d = c;
    this._init(n, t, i, r, u, f, e, o, s, h)
}
function CMenu() {
    var h, u, i, f, c, e, l, n = null, a = null, o, s, r, t;
    this._init = function() {
        var l, v, y;
        h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(h);
        l = s_oSpriteLibrary.getSprite("but_play");
        o = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT - 150
        };
        u = new CGfxButton(o.x,o.y,l,s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (l = s_oSpriteLibrary.getSprite("audio_icon"),
        s = {
            x: CANVAS_WIDTH - l.height / 2 - 10,
            y: l.height / 2 + 10
        },
        f = new CToggle(s.x,s.y,l,s_bAudioActive,s_oStage),
        f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        setVolume("soundtrack", 1));
        SHOW_CREDITS ? (l = s_oSpriteLibrary.getSprite("but_fullscreen"),
        t = {
            x: 10 + l.width / 2,
            y: l.height / 2 + 10
        },
        c = new CGfxButton(t.x,t.y,l,s_oStage),
        c.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        r = {
            x: t.x + l.width + 10,
            y: t.y
        }) : (l = s_oSpriteLibrary.getSprite("but_fullscreen"),
        r = {
            x: 10 + l.width / 4,
            y: l.height / 2 + 10
        });
        v = window.document;
        y = v.documentElement;
        n = y.requestFullscreen || y.mozRequestFullScreen || y.webkitRequestFullScreen || y.msRequestFullscreen;
        a = v.exitFullscreen || v.mozCancelFullScreen || v.webkitExitFullscreen || v.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (n = !1);
        n && screenfull.isEnabled && (l = s_oSpriteLibrary.getSprite("but_fullscreen"),
        e = new CToggle(r.x,r.y,l,s_bFullscreen,s_oStage),
        e.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        i = new createjs.Shape;
        i.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(i);
        createjs.Tween.get(i).to({
            alpha: 0
        }, 1e3).call(function() {
            i.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.unload = function() {
        u.unload();
        u = null;
        i.visible = !1;
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (f.unload(),
        f = null);
        n && screenfull.isEnabled && e.unload();
        SHOW_CREDITS && c.unload();
        s_oStage.removeChild(h);
        h = null;
        s_oMenu = null
    }
    ;
    this.refreshButtonPos = function(i, h) {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && f.setPosition(s.x - i, h + s.y);
        n && screenfull.isEnabled && e.setPosition(r.x + i, r.y + h);
        SHOW_CREDITS && c.setPosition(t.x + i, t.y + h);
        u.setPosition(o.x, o.y - h)
    }
    ;
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ;
    this._onButPlayRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame()
    }
    ;
    this.resetFullscreenBut = function() {
        n && screenfull.isEnabled && e.setActive(s_bFullscreen)
    }
    ;
    this._onFullscreenRelease = function() {
        s_bFullscreen ? a.call(window.document) : n.call(window.document.documentElement);
        sizeHandler()
    }
    ;
    this._onCredits = function() {
        l = new CCreditsPanel
    }
    ;
    this.onExitCredits = function() {
        l = null
    }
    ;
    s_oMenu = this;
    this._init()
}
function CGame(n) {
    var w, nt, tt, u, it, b, l, h, rt, s, et, ft, t, r, k, d, f, ot, c, ut, a, g, e, i, o, v, y, p;
    this._init = function() {
        w = !1;
        nt = !0;
        tt = BANK;
        u = START_PLAYER_MONEY;
        rt = 0;
        h = 0;
        var n = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(n);
        e = new createjs.Container;
        e.x = 60;
        e.y = 160;
        s_oStage.addChild(e);
        i = new createjs.Container;
        i.x = CANVAS_WIDTH - 200;
        i.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(i);
        o = new createjs.Container;
        o.x = CANVAS_WIDTH / 2;
        o.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(o);
        a = new CNumberBoard(0,0,i);
        a.setVertical();
        f = new CInterface;
        ut = new CCardSelection(u,s_oStage);
        v = new CMsgBox(s_oSpriteLibrary.getSprite("msg_box"));
        v.addEventListener(ON_BUT_EXIT, f.enableGUI, f);
        v.addEventListener(ON_BUT_RECHARGE, this._onRecharge, this);
        p = new CMsgBox(s_oSpriteLibrary.getSprite("msg_box"));
        p.hideButtons();
        p.centerMessage();
        y = new CAreYouSurePanel(s_oStage);
        y.addEventListener(ON_BUT_YES, this.onConfirmExit, this);
        y.addEventListener(ON_BUT_NO, this.onRefuseExit, this);
        this.refreshButtonPos()
    }
    ;
    this.unload = function() {
        f.unload();
        c && c.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        ut.unload();
        y.unload();
        p.unload();
        v.unload();
        s_oGame = null
    }
    ;
    this.initGame = function(n, t, i, r, o) {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        it = n;
        b = t;
        u = i;
        l = r;
        f.refreshTotBet(l);
        f.refreshMoney(u);
        c = new CAnimBalls(0,0,b,e);
        this._generateNewCardSet();
        ft = WIN_OCCURRENCE[o];
        d = PAYTABLE_INFO[o];
        g = new CPaytablePanel(s_oStage);
        g.initPrizes(d);
        this.refreshButtonPos()
    }
    ;
    this.refreshButtonPos = function() {
        f.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        v.refreshButtonPos();
        p.refreshButtonPos();
        y.refreshButtonPos();
        g && g.refreshButtonPos();
        e.scaleX = e.scaleY = 1;
        e.x = 56 + s_iOffsetX;
        i.scaleX = i.scaleY = 1;
        a.setVertical();
        s_bLandscape ? (e.y = -60 + s_iOffsetY,
        e.scaleX = e.scaleY = .6,
        i.x = CANVAS_WIDTH - 16 - s_iOffsetX,
        i.y = s_iOffsetY + 84,
        i.scaleX = i.scaleY = .89,
        isSquaredRatio() || (a.setHorizontal(),
        i.x = CANVAS_WIDTH / 2,
        i.y = s_iOffsetY + 10,
        i.scaleX = i.scaleY = .6)) : (e.y = -90 + s_iOffsetY,
        i.x = 316 + s_iOffsetX,
        i.y = 312);
        t && this._setCardPos()
    }
    ;
    this._setCardPos = function() {
        var s, r, n, h, e;
        if (s_bLandscape) {
            if (isSquaredRatio()) {
                for (n = 0; n < t.length; n++)
                    r = CARD_POSITION["num_" + t.length],
                    t[n].setPos(r[n].x, r[n].y);
                var u = 40
                  , e = i.x - i.getBounds().width - s_iOffsetX - u
                  , c = CANVAS_HEIGHT - 2 * s_iOffsetY - 340;
                o.x = e / 2 + u / 2;
                inRectResize(o, e, c)
            } else {
                var f = t[0].getBounds().width
                  , u = 40
                  , l = t.length * f + u * (t.length - 1);
                for (n = 0; n < t.length; n++)
                    s = -l / 2 + f / 2 + (f + u) * n,
                    t[n].setPos(s, 0);
                o.x = CANVAS_WIDTH / 2;
                smartResize(o, 40, 344)
            }
            o.y = CANVAS_HEIGHT / 2 + 34
        } else {
            if (isSquaredRatio())
                for (n = 0; n < t.length; n++)
                    r = CARD_POSITION["num_" + t.length],
                    t[n].setPos(r[n].x, r[n].y);
            else {
                var f = t[0].getBounds().height
                  , u = 40
                  , a = t.length * f + u * (t.length - 1);
                for (n = 0; n < t.length; n++)
                    h = -a / 2 + f / 2 + (f + u) * n,
                    t[n].setPos(0, h)
            }
            e = CANVAS_WIDTH - i.x - s_iOffsetX;
            o.x = i.x + e / 2;
            o.y = CANVAS_HEIGHT / 2;
            inRectResize(o, e - 40, CANVAS_HEIGHT - s_iOffsetY * 2 - 280)
        }
    }
    ;
    this._resetGame = function() {
        w = !1;
        h = 0;
        c !== undefined && c.unload();
        c = new CAnimBalls(0,0,b,e);
        for (var n = 0; n < t.length; n++)
            t[n].reset();
        a.reset()
    }
    ;
    this._removeCards = function() {
        for (var n = 0; n < t.length; n++)
            t[n].unload()
    }
    ;
    this._onRecharge = function() {
        $(s_oMain).trigger("recharge")
    }
    ;
    this.setMoney = function(n) {
        u += n;
        f.refreshMoney(u);
        f.enableGUI();
        s_oCardSelection.setMoney(u)
    }
    ;
    this.startGame = function() {
        var v, h, y, i, p, g, it, o, a, e, n;
        if (u - l < 0) {
            this.showRechargePanel();
            return
        }
        if (nt || this._resetGame(),
        u -= l,
        tt += l,
        f.refreshMoney(u),
        nt = !1,
        $(s_oMain).trigger("bet_placed", l),
        s = 0,
        v = 1 + Math.floor(Math.random() * 100),
        tt < COIN_BETS[s_iCurCoinBet] * d[d.length - 1] && (v = ft + 1),
        v <= ft) {
            h = Math.floor(Math.random() * t.length);
            y = Math.floor(Math.random() * 3);
            switch (y) {
            case 0:
                p = Math.floor(Math.random() * CARD_ROWS);
                i = t[h].getRow(p);
                break;
            case 1:
                g = Math.floor(Math.random() * CARD_COLS);
                i = t[h].getCol(g);
                break;
            case 2:
                it = Math.floor(Math.random() * 2);
                i = t[h].getDiag(it)
            }
            for (bubbleSort(i),
            r = [],
            o = 0; o < i.length; o++)
                i[o] !== STAR_VALUE && r.push(i[o]);
            for (e = [],
            n = 0; n < NUM_NUMBERS; n++)
                e[n] = n + 1;
            for (a = r.length - 1; a >= 0; a--)
                e.splice(r[a] - 1, 1);
            this.setRandomNumberToExtract(e, b - r.length)
        } else
            do {
                for (e = [],
                n = 0; n < NUM_NUMBERS; n++)
                    e[n] = n + 1;
                r = [];
                this.setRandomNumberToExtract(e, b)
            } while (this._checkWin() === !0);
        shuffle(r);
        k = [];
        this.extractNextNumber();
        c.start(r);
        et = 0;
        w = !0
    }
    ;
    this._onCellClick = function(n) {
        var r = n.cardid
          , i = n.number;
        w && i !== STAR_VALUE && (this.isExtracted(i) ? t[r].findNumberExtracted(i) : p.showAndHide(sprintf(TEXT_WRONG_NUMBER, i)))
    }
    ;
    this.isExtracted = function(n) {
        return k === undefined || k === null ? !1 : k.indexOf(n) !== -1 ? !0 : !1
    }
    ;
    this._generateNewCardSet = function() {
        var i = CARD_POSITION["num_" + it], n, r;
        for (t = [],
        n = 0; n < it; n++)
            r = new CCard(i[n].x,i[n].y,i[n].scale,o,n),
            r.addEventListener(ON_CARD_NUM_CLICK, this._onCellClick, this),
            t.push(r)
    }
    ;
    this.setRandomNumberToExtract = function(n, t) {
        for (var u, i = 0; i < t; i++)
            u = Math.floor(Math.random() * n.length),
            r.push(n[u]),
            n.splice(u, 1)
    }
    ;
    this._checkWin = function() {
        for (var i, n = 0; n < t.length; n++)
            if (i = t[n].checkIfIsWinner(r),
            i)
                return !0;
        return !1
    }
    ;
    this.extractNextNumber = function() {
        var n;
        if (s === r.length) {
            for (w = !1,
            this._calculateWins(),
            f.enableGUI(),
            n = 0; n < t.length; n++)
                t[n].hideHighlight();
            rt++;
            rt === AD_SHOW_COUNTER && (rt = 0,
            $(s_oMain).trigger("show_interlevel_ad"));
            $(s_oMain).trigger("save_score", u);
            return
        }
        if (k.push(r[s]),
        c.extractNextBall(r[s], s + 1),
        a.numExtracted(r[s]),
        AUTOFILL_ENABLED)
            for (n = 0; n < t.length; n++)
                t[n].findNumberExtracted(r[s]);
        else
            playSound(r[s], 1, !1);
        s++
    }
    ;
    this._calculateWins = function() {
        var n, i;
        for (h = 0,
        n = 0; n < t.length; n++)
            i = t[n].getWinIndex(),
            i >= 0 && (h += COIN_BETS[s_iCurCoinBet] * d[i],
            t[n].initWinAnim());
        f.refreshWin(h);
        h > 0 && (u += h,
        f.refreshMoney(u),
        tt -= h,
        playSound("win", 1, !1))
    }
    ;
    this.showRechargePanel = function() {
        v.show(TEXT_GAMEOVER, !0)
    }
    ;
    this.onPaytable = function() {
        g.show()
    }
    ;
    this.onBuyNewCards = function() {
        this._resetGame();
        this._removeCards();
        this._resetGame();
        nt = !0;
        ut.setMoney(u);
        ut.show()
    }
    ;
    this.onExit = function() {
        createjs.Ticker.paused = !0;
        y.show()
    }
    ;
    this.onConfirmExit = function() {
        createjs.Ticker.paused = !1;
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", u);
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("show_interlevel_ad")
    }
    ;
    this.onRefuseExit = function() {
        createjs.Ticker.paused = !1
    }
    ;
    this.getCurNumCards = function() {
        return it
    }
    ;
    this.update = function() {}
    ;
    s_oGame = this;
    WIN_OCCURRENCE = n.win_occurrence;
    COIN_BETS = n.coin_bet;
    BANK = n.bank_money;
    START_PLAYER_MONEY = n.start_player_money;
    PAYTABLE_INFO = n.paytable;
    AD_SHOW_COUNTER = n.ad_show_counter;
    AUTOFILL_ENABLED = n.autofill_mode;
    TIME_EXTRACTION = n.time_extraction_autofill;
    TIME_EXTRACTION_MANUAL = n.time_extraction_manual;
    ot = this;
    this._init()
}
function CInterface() {
    var f, o, l, v, e, y, p, n, s, t, w, h, i = null, b = null, r, c, u, a;
    return this._init = function() {
        var g, d, nt, k;
        n = new createjs.Container;
        n.x = CANVAS_WIDTH / 2;
        s_oStage.addChild(n);
        k = s_oSpriteLibrary.getSprite("but_exit");
        r = {
            x: CANVAS_WIDTH - k.height / 2 - 10,
            y: k.height / 2 + 10
        };
        l = new CGfxButton(r.x,r.y,k,s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onExit, this);
        g = 10;
        s_bMobile && !isTablet() && (g = 30);
        k = s_oSpriteLibrary.getSprite("but_paytable");
        u = {
            x: r.x - k.width - g,
            y: r.y
        };
        w = new CGfxButton(u.x,u.y,k,s_oStage);
        w.addEventListener(ON_MOUSE_UP, this._onPaytable, this);
        DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (c = {
            x: u.x - k.width - g,
            y: u.y
        },
        k = s_oSpriteLibrary.getSprite("audio_icon"),
        o = new CToggle(c.x,c.y,k,s_bAudioActive,s_oStage),
        o.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        a = {
            x: c.x - k.width / 2,
            y: c.y
        }) : a = {
            x: u.x - k.width - g,
            y: u.y
        };
        d = window.document;
        nt = d.documentElement;
        i = nt.requestFullscreen || nt.mozRequestFullScreen || nt.webkitRequestFullScreen || nt.msRequestFullscreen;
        b = d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (i = !1);
        i && screenfull.isEnabled && (k = s_oSpriteLibrary.getSprite("but_fullscreen"),
        h = new CToggle(a.x,a.y,k,s_bFullscreen,s_oStage),
        h.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        k = s_oSpriteLibrary.getSprite("but_settings");
        f = new CGUIExpandible(r.x,r.y,k,s_oStage);
        f.addButton(l);
        f.addButton(w);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && f.addButton(o);
        i && screenfull.isEnabled && f.addButton(h);
        v = new CDisplayText(-425,0,s_oSpriteLibrary.getSprite("plus_display"),formatValue(START_PLAYER_MONEY),TEXT_MONEY,30,n);
        y = new CDisplayText(v.getX() + 230,0,s_oSpriteLibrary.getSprite("display_small"),"",TEXT_TOT_BET,30,n);
        k = s_oSpriteLibrary.getSprite("but_buy_cards");
        t = new CGfxButton(y.getX() + 175,41,k,n);
        t.addEventListener(ON_MOUSE_UP, this._onButBuy, this);
        p = new CDisplayText(t.getX() + 48,0,s_oSpriteLibrary.getSprite("display_small"),"",TEXT_COIN,30,n);
        e = new CDisplayText(p.getX() + 135,0,s_oSpriteLibrary.getSprite("display_small"),formatValue(0),TEXT_WIN,30,n);
        k = s_oSpriteLibrary.getSprite("but_generic");
        s = new CTextSpritesheetBut(e.getX() + 197,41,k,TEXT_START,PRIMARY_FONT,"#ffffff",50,!1,n);
        s.addEventListener(ON_MOUSE_UP, this._onButPlay, this);
        s.enable();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ,
    this.unload = function() {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (o.unload(),
        o = null);
        i && screenfull.isEnabled && h.unload();
        t.unload();
        l.unload();
        s_oInterface = null
    }
    ,
    this.refreshButtonPos = function() {
        smartResize(n, 20, 0);
        var t = n.scaleX;
        n.y = CANVAS_HEIGHT - 90 * t - s_iOffsetY;
        f.refreshPos()
    }
    ,
    this.refreshMoney = function(n) {
        v.changeText(formatValue(n))
    }
    ,
    this.refreshTotBet = function(n) {
        y.changeText(formatValue(n));
        p.changeText(formatValue(COIN_BETS[s_iCurCoinBet]))
    }
    ,
    this.refreshWin = function(n) {
        e.changeText(formatValue(n));
        n > 0 && e.setHighlight()
    }
    ,
    this.enableGUI = function() {
        s.enable();
        t.enable();
        var n = s_oSpriteLibrary.getSprite("but_buy_cards");
        t.getButtonImage().image = n
    }
    ,
    this.disableGUI = function() {
        s.disable();
        t.disable();
        var n = s_oSpriteLibrary.getSprite("but_buy_cards_disabled");
        t.getButtonImage().image = n
    }
    ,
    this._onButPlay = function() {
        this.disableGUI();
        e.changeText(formatValue(0));
        e.stopHighlight();
        s_oGame.startGame()
    }
    ,
    this._onButBuy = function() {
        s_oGame.onBuyNewCards()
    }
    ,
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ,
    this._onExit = function() {
        s_oGame.onExit()
    }
    ,
    this._onPaytable = function() {
        s_oGame.onPaytable()
    }
    ,
    this.resetFullscreenBut = function() {
        i && screenfull.isEnabled && h.setActive(s_bFullscreen)
    }
    ,
    this._onFullscreenRelease = function() {
        s_bFullscreen ? b.call(window.document) : i.call(window.document.documentElement);
        sizeHandler()
    }
    ,
    s_oInterface = this,
    this._init(),
    this
}
function CAnimBalls(n, t, i, r) {
    var l, rt, ut, ft, o, h, p, w, b, k, it, u, f, a, d, v, g, nt, s, et, c, y, e, tt;
    this._init = function(n, t, i) {
        var f, s, h, a, r, v;
        rt = ANIMATION_SPEED;
        ft = 7;
        l = i;
        k = 1;
        e = new createjs.Container;
        e.x = n;
        e.y = t;
        tt.addChild(e);
        c = new createjs.Container;
        e.addChild(c);
        f = s_oSpriteLibrary.getSprite("ball");
        s = f.width / NUM_DIFFERENT_BALLS;
        o = f.height;
        h = {
            images: [f],
            frames: {
                width: s,
                height: o,
                regX: s / 2,
                regY: o / 2
            },
            animations: {
                cyan: [0],
                orange: [1],
                yellow: [2],
                grey: [3],
                green: [4]
            }
        };
        g = new createjs.SpriteSheet(h);
        a = s_oSpriteLibrary.getSprite("tube");
        r = createBitmap(a);
        r.x = -48;
        r.y = 24;
        v = (new createjs.Graphics).beginFill("rgba(255,0,0,0.01)").drawRoundRectComplex(r.x, r.y + 301, 296, 80, 0, 40, 40, 0);
        d = new createjs.Shape(v);
        u = [];
        ut = o;
        y = new createjs.Container;
        e.addChild(y);
        e.addChild(r);
        e.addChild(d);
        this.initBalls();
        c.visible = !1
    }
    ;
    this.unload = function() {
        clearTimeout(it);
        tt.removeChild(e)
    }
    ;
    this.reset = function(n) {
        l = n;
        s.text = "0/" + l
    }
    ;
    this.initBalls = function() {
        for (var w, a, n, t, k, d = s_oSpriteLibrary.getSprite("tube"), p = d.height - o - o / 2, r = 0; r < 7; r++)
            w = Math.floor(Math.random() * NUM_DIFFERENT_BALLS),
            u[r] = new CBallExtracted(0,p,i,o,w,32,3,g,c),
            p -= o;
        b = u[0].getY();
        var n = s_oSpriteLibrary.getSprite("ball_preview")
          , i = n.width / NUM_DIFFERENT_BALLS
          , tt = {
            images: [n],
            frames: {
                width: i,
                height: n.height,
                regX: i / 2,
                regY: n.height / 2
            },
            animations: {
                cyan: [0],
                orange: [1],
                yellow: [2],
                grey: [3],
                green: [4]
            }
        };
        nt = new createjs.SpriteSheet(tt);
        f = [];
        h = i;
        a = new CBallExtracted(50 - h / 2,122 + n.height / 2,h,n.height,u[0].getColor(),80,5,nt,y);
        f.push(a);
        n = s_oSpriteLibrary.getSprite("number_extract_bg");
        t = createBitmap(n);
        t.x = 40;
        t.y = 112;
        e.addChild(t);
        k = (new createjs.Graphics).beginFill("rgba(255,255,255,0.01)").drawCircle(t.x + n.width / 2, t.y + n.height / 2, 92);
        v = new createjs.Shape(k);
        e.addChild(v);
        s = new createjs.Text("0/" + l," 24px " + PRIMARY_FONT,"#fff");
        s.x = 150;
        s.y = 304;
        s.textAlign = "center";
        s.textBaseline = "middle";
        e.addChild(s);
        a.setMask(v)
    }
    ;
    this.start = function(n) {
        var t, i;
        for (c.visible = !0,
        a = [],
        t = 0; t < n.length; t++)
            a.push(n[t]);
        for (t = 0; t < u.length; t++)
            i = this.getColorByNum(a.shift()),
            u[t].setSprite(i)
    }
    ;
    this.extractNextBall = function(n, t) {
        var i, c, a, v, r, e;
        for (p = 0,
        playSound("launch_ball", 1, !1),
        i = 0; i < u.length; i++)
            u[i].getY() > b ? (u[i].setMask(d),
            e = u[i].getX() + o,
            u[i].moveX(e, this.placeNewBall, this)) : (c = u[i].getY() + o,
            a = "",
            c > b && (a = n),
            u[i].moveY(c, a, this.placeNewBall, this));
        for (w = 0,
        v = this.getColorByNum(n),
        f[f.length - 1].setSprite(v),
        f[f.length - 1].setText(n),
        r = 0; r < f.length; r++)
            e = f[r].getX() + h,
            f[r].moveX(e, this.placeNewPreviewBall, this);
        s.text = t + "/" + l
    }
    ;
    this.placeNewBall = function() {
        var t;
        if (p++,
        p === u.length) {
            var n = s_oSpriteLibrary.getSprite("ball")
              , i = this.getColorByNum(a.shift())
              , r = new CBallExtracted(0,u[u.length - 1].getY() - n.height,n.width / NUM_DIFFERENT_BALLS,n.height,i,32,3,g,c);
            u.push(r);
            u[0].getX() > o * 3 ? (u[0].unload(),
            u.splice(0, 1)) : k++;
            t = AUTOFILL_ENABLED ? TIME_EXTRACTION : TIME_EXTRACTION_MANUAL[s_oGame.getCurNumCards() - 1];
            it = setTimeout(function() {
                s_oGame !== null && s_oGame.extractNextNumber()
            }, t)
        }
    }
    ;
    this.placeNewPreviewBall = function() {
        if (w++,
        w === f.length) {
            var n = s_oSpriteLibrary.getSprite("ball_preview")
              , t = new CBallExtracted(50 - h / 2,122 + n.height / 2,n.width / NUM_DIFFERENT_BALLS,n.height,u[k].getColor(),80,5,nt,y);
            t.setMask(v);
            f.push(t);
            f[0].getX() > h && (f[0].unload(),
            f.splice(0, 1))
        }
    }
    ;
    this.getColorByNum = function(n) {
        return Math.floor((n - 1) / 15)
    }
    ;
    et = this;
    tt = r;
    this._init(n, t, i)
}
function CCardSelection(n, t) {
    var b, f, i, c, a, l, k, ft, et, ht, lt, ot, ct, yt, v, tt, y, p, w, d, g, it, rt, ut, at, st, nt = null, pt = null, u, vt, e, o, s, r, h;
    this._init = function(n) {
        var ri, ni, ti, t, bt, kt;
        b = n;
        i = s_iCurNumCards;
        a = NUM_EXTRACTIONS[s_iCurNumToExtract];
        f = COIN_BETS[s_iCurCoinBet] * i;
        c = 0;
        u = new createjs.Container;
        u.on("click", function() {});
        vt.addChild(u);
        ri = createBitmap(s_oSpriteLibrary.getSprite("bg_select_card"));
        u.addChild(ri);
        var dt = CANVAS_WIDTH / 2
          , gt = 150
          , l = 900
          , wt = 100;
        ht = new CTLText(u,dt - l / 2,gt,l,wt,100,"center","#fff",PRIMARY_FONT,1,0,0,TEXT_SELECT_CARD,!0,!0,!1,!1);
        ht.setOutline(4);
        lt = new CTLText(u,dt - l / 2,gt,l,wt,100,"center","#ffc103",PRIMARY_FONT,1,0,0,TEXT_SELECT_CARD,!0,!0,!1,!1);
        e = new createjs.Container;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT - 90;
        u.addChild(e);
        yt = new CDisplayText(-510,0,s_oSpriteLibrary.getSprite("plus_display"),formatValue(b),TEXT_MONEY,30,e);
        v = new CDisplayText(-180,0,s_oSpriteLibrary.getSprite("display_small"),formatValue(COIN_BETS[s_iCurCoinBet]),TEXT_COIN,30,e);
        t = s_oSpriteLibrary.getSprite("but_plus");
        p = new CTextSpritesheetBut(v.getX() + 170,v.getY() + 41,t,TEXT_PLUS,PRIMARY_FONT,"#ffffff",70,!1,e);
        s_iCurCoinBet === COIN_BETS.length - 1 ? p.disable() : p.enable();
        p.addEventListener(ON_MOUSE_UP, this._onButBetPlusRelease, this);
        t = s_oSpriteLibrary.getSprite("but_plus");
        w = new CTextSpritesheetBut(v.getX() - 48,v.getY() + 41,t,TEXT_MIN,PRIMARY_FONT,"#ffffff",70,!1,e);
        s_iCurCoinBet === 0 ? w.disable() : w.enable();
        w.setScaleX(-1);
        w.addEventListener(ON_MOUSE_UP, this._onButBetMinRelease, this);
        tt = new CDisplayText(50,0,s_oSpriteLibrary.getSprite("plus_display"),formatValue(f),TEXT_TOT_BET,30,e);
        at = new CTextButton(402,41,s_oSpriteLibrary.getSprite("but_gui"),TEXT_PLAY,PRIMARY_FONT,"#ffffff",50,0,e);
        at.addEventListener(ON_MOUSE_UP, this._onButPlay, this);
        h = new createjs.Container;
        h.x = CANVAS_WIDTH / 2 - 250;
        h.y = CANVAS_HEIGHT / 2 - 10;
        u.addChild(h);
        o = new createjs.Container;
        o.y = -100;
        h.addChild(o);
        t = s_oSpriteLibrary.getSprite("num_cards_panel");
        ni = createBitmap(t);
        ni.regX = t.width / 2;
        ni.regY = t.height / 2;
        o.addChild(ni);
        var dt = 0
          , gt = -64
          , l = 400
          , wt = 34
          , ui = new CTLText(o,dt - l / 2,gt - wt / 2,l,wt,34,"center","#fff",PRIMARY_FONT,1,0,0,TEXT_SELECT_NUM_CARDS,!0,!0,!0,!1);
        y = new createjs.Text(i," 44px " + PRIMARY_FONT,"#fff");
        y.y = 34;
        y.textAlign = "center";
        y.textBaseline = "middle";
        o.addChild(y);
        t = s_oSpriteLibrary.getSprite("but_plus");
        d = new CTextSpritesheetBut(156,35,t,TEXT_PLUS,PRIMARY_FONT,"#ffffff",70,!1,o);
        d.enable();
        d.addEventListener(ON_MOUSE_UP, this._onButCardPlusRelease, this);
        t = s_oSpriteLibrary.getSprite("but_plus");
        g = new CTextSpritesheetBut(-164,35,t,TEXT_MIN,PRIMARY_FONT,"#ffffff",70,!1,o);
        g.enable();
        g.setScaleX(-1);
        g.addEventListener(ON_MOUSE_UP, this._onButCardMinRelease, this);
        s = new createjs.Container;
        s.y = 100;
        h.addChild(s);
        t = s_oSpriteLibrary.getSprite("num_balls_panel");
        ti = createBitmap(t);
        ti.regX = t.width / 2;
        ti.regY = t.height / 2;
        s.addChild(ti);
        var dt = 0
          , gt = -44
          , l = 400
          , wt = 34
          , fi = new CTLText(s,dt - l / 2,gt - wt / 2,l,wt,34,"center","#fff",PRIMARY_FONT,1,0,0,TEXT_SELECT_NUM_BALLS,!0,!0,!0,!1)
          , ii = 24
          , r = s_oSpriteLibrary.getSprite("but_ball");
        it = new CToggleText(s_iCurNumToExtract === 0 ? !0 : !1,-150,ii,r,r.width / 2,r.height,NUM_EXTRACTIONS[0],PRIMARY_FONT,"#ffffff",50,s);
        it.addEventListener(ON_MOUSE_UP, this._onButNumBall1Release, this);
        rt = new CToggleText(s_iCurNumToExtract === 1 ? !0 : !1,0,ii,r,r.width / 2,r.height,NUM_EXTRACTIONS[1],PRIMARY_FONT,"#ffffff",50,s);
        rt.addEventListener(ON_MOUSE_UP, this._onButNumBall2Release, this);
        ut = new CToggleText(s_iCurNumToExtract === 2 ? !0 : !1,150,ii,r,r.width / 2,r.height,NUM_EXTRACTIONS[2],PRIMARY_FONT,"#ffffff",50,s);
        ut.addEventListener(ON_MOUSE_UP, this._onButNumBall3Release, this);
        this._initCards();
        t = s_oSpriteLibrary.getSprite("but_exit");
        k = {
            x: CANVAS_WIDTH - t.height / 2 - 10,
            y: t.height / 2 + 10
        };
        ct = new CGfxButton(k.x,k.y,t,u);
        ct.addEventListener(ON_MOUSE_UP, this._onExit, this);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (ft = {
            x: k.x - t.width - 10,
            y: k.y
        },
        t = s_oSpriteLibrary.getSprite("audio_icon"),
        ot = new CToggle(ft.x,ft.y,t,s_bAudioActive,u),
        ot.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        bt = window.document;
        kt = bt.documentElement;
        nt = kt.requestFullscreen || kt.mozRequestFullScreen || kt.webkitRequestFullScreen || kt.msRequestFullscreen;
        pt = bt.exitFullscreen || bt.mozCancelFullScreen || bt.webkitExitFullscreen || bt.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (nt = !1);
        nt && screenfull.isEnabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"),
        et = {
            x: t.width / 4 + 6,
            y: t.height / 2 + 10
        },
        st = new CToggle(et.x,et.y,t,s_bFullscreen,u),
        st.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkIfCanPlay();
        this._setButtonsStates();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.refreshButtonPos = function(n, t) {
        var i, u;
        s_bLandscape ? (i = s_iOffsetY + 6,
        u = 100,
        lt.setY(i + u / 2),
        ht.setY(i + u / 2),
        h.x = CANVAS_WIDTH / 2 - 300,
        h.y = CANVAS_HEIGHT / 2 - 10,
        o.x = 0,
        o.y = -100,
        s.x = 0,
        s.y = 100,
        r.x = CANVAS_WIDTH / 2 + 300,
        r.y = CANVAS_HEIGHT / 2 - 20) : (i = 150,
        u = 100,
        lt.setY(i + u / 2),
        ht.setY(i + u / 2),
        h.x = CANVAS_WIDTH / 2,
        h.y = 380,
        o.x = -230,
        o.y = 0,
        s.x = 230,
        s.y = 4,
        r.x = CANVAS_WIDTH / 2,
        r.y = CANVAS_HEIGHT / 2 + 170);
        smartResize(h, 20, 0);
        e.y = CANVAS_HEIGHT - 90 - s_iOffsetY;
        smartResize(e, 20, 0);
        smartResize(r, 20, 250);
        ct.setPosition(k.x - n, t + k.y);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && ot.setPosition(ft.x - n, t + ft.y);
        nt && screenfull.isEnabled && st.setPosition(et.x + n, et.y + t)
    }
    ;
    this.unload = function() {
        p.unload();
        w.unload();
        d.unload();
        g.unload();
        it.unload();
        rt.unload();
        ut.unload();
        at.unload();
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (ot.unload(),
        ot = null);
        nt && screenfull.isEnabled && st.unload();
        ct.unload();
        u.removeAllEventListeners();
        vt.removeChild(u);
        s_oCardSelection = null
    }
    ;
    this.setMoney = function(n) {
        b = n;
        yt.changeText(formatValue(n));
        this._setButtonsStates()
    }
    ;
    this._initCards = function() {
        var i, f;
        r = new createjs.Container;
        r.x = CANVAS_WIDTH / 2 + 250;
        r.y = CANVAS_HEIGHT / 2 - 16;
        u.addChild(r);
        i = s_oSpriteLibrary.getSprite("msg_box");
        f = createBitmap(i);
        f.regX = i.width / 2;
        f.regY = i.height / 2;
        r.addChild(f);
        var s = 370
          , h = 34
          , v = new CTLText(r,0 - s / 2,-300 - h / 2,s,h,34,"center","#ffc103",PRIMARY_FONT,1,0,0,TEXT_PAYTABLE,!0,!0,!1,!1)
          , i = s_oSpriteLibrary.getSprite("card_cell")
          , n = i.width / 5
          , a = {
            images: [i],
            frames: {
                width: n,
                height: n,
                regX: n / 2,
                regY: n / 2
            },
            animations: {
                state_empty: [0],
                state_extracted: [1],
                state_highlight: [2],
                state_star_empty: [3],
                state_star_highlight: [4]
            }
        }
          , t = new createjs.SpriteSheet(a)
          , e = 170
          , o = 190;
        l = [];
        l[0] = new CPaytableCard(-e,-o,n,0,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_DIAGONAL]);
        l[1] = new CPaytableCard(0,-o,n,1,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_COLUMN]);
        l[2] = new CPaytableCard(e,-o,n,2,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_ROW]);
        l[3] = new CPaytableCard(-e,0,n,0,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_2_ROWS]);
        l[4] = new CPaytableCard(0,0,n,1,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_3_ROWS]);
        l[5] = new CPaytableCard(e,0,n,2,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_4_ROWS]);
        l[6] = new CPaytableCard(0,o,n,2,t,r,PAYTABLE_WIN_SCHEME[WIN_TYPE_BINGO]);
        this.initPrizes(PAYTABLE_INFO[c])
    }
    ;
    this.initPrizes = function(n) {
        for (var t = 0; t < l.length; t++)
            l[t].setMsg(TEXT_PAYTABLE_PRIZES[t] + ": x" + n[t])
    }
    ;
    this._checkIfEnoughMoney = function() {
        return b < f ? !1 : !0
    }
    ;
    this._checkIfCanPlay = function() {
        var n = this._checkIfEnoughMoney();
        n || (s_iCurCoinBet = 0,
        i = MIN_CARDS,
        v.changeText(formatValue(COIN_BETS[s_iCurCoinBet])),
        f = COIN_BETS[s_iCurCoinBet] / COIN_BETS[0] * COIN_BETS[0] * i,
        y.text = i,
        tt.changeText(formatValue(f)),
        this._checkIfEnoughMoney() === !1 && s_oGame.showRechargePanel())
    }
    ;
    this._setButtonsStates = function() {
        this._setBetButtonsStates();
        this._setCardButtonsStates()
    }
    ;
    this._setBetButtonsStates = function() {
        if (p.enable(),
        w.enable(),
        s_iCurCoinBet === 0 && w.disable(),
        s_iCurCoinBet === COIN_BETS.length - 1 && p.disable(),
        s_iCurCoinBet < COIN_BETS.length - 1) {
            var n = s_iCurCoinBet + 1
              , t = COIN_BETS[n] / COIN_BETS[0] * COIN_BETS[0] * i;
            b < t && p.disable()
        }
    }
    ;
    this._setCardButtonsStates = function() {
        if (d.enable(),
        g.enable(),
        i === MIN_CARDS && g.disable(),
        i === MAX_CARDS && d.disable(),
        i < MAX_CARDS) {
            var n = i + 1
              , t = COIN_BETS[s_iCurCoinBet] / COIN_BETS[0] * COIN_BETS[0] * n;
            b < t && d.disable()
        }
    }
    ;
    this._onButBetPlusRelease = function() {
        s_iCurCoinBet++;
        v.changeText(formatValue(COIN_BETS[s_iCurCoinBet]));
        f = COIN_BETS[s_iCurCoinBet] / COIN_BETS[0] * COIN_BETS[0] * i;
        tt.changeText(formatValue(f));
        this._setButtonsStates()
    }
    ;
    this._onButBetMinRelease = function() {
        s_iCurCoinBet--;
        v.changeText(formatValue(COIN_BETS[s_iCurCoinBet]));
        f = COIN_BETS[s_iCurCoinBet] / COIN_BETS[0] * COIN_BETS[0] * i;
        tt.changeText(formatValue(f));
        this._setButtonsStates()
    }
    ;
    this._onButCardPlusRelease = function() {
        i++;
        y.text = i;
        f = COIN_BETS[s_iCurCoinBet] / COIN_BETS[0] * COIN_BETS[0] * i;
        tt.changeText(formatValue(f));
        this._setButtonsStates()
    }
    ;
    this._onButCardMinRelease = function() {
        i--;
        y.text = i;
        f = COIN_BETS[s_iCurCoinBet] / COIN_BETS[0] * COIN_BETS[0] * i;
        tt.changeText(formatValue(f));
        this._setButtonsStates()
    }
    ;
    this._onButNumBall1Release = function() {
        a !== NUM_EXTRACTIONS[0] ? (a = NUM_EXTRACTIONS[0],
        rt.activate(!1),
        ut.activate(!1)) : it.activate(!0);
        c = 0;
        this.initPrizes(PAYTABLE_INFO[c])
    }
    ;
    this._onButNumBall2Release = function() {
        a !== NUM_EXTRACTIONS[1] ? (a = NUM_EXTRACTIONS[1],
        it.activate(!1),
        ut.activate(!1)) : rt.activate(!0);
        c = 1;
        this.initPrizes(PAYTABLE_INFO[c])
    }
    ;
    this._onButNumBall3Release = function() {
        a !== NUM_EXTRACTIONS[2] ? (a = NUM_EXTRACTIONS[2],
        rt.activate(!1),
        it.activate(!1)) : ut.activate(!0);
        c = 2;
        this.initPrizes(PAYTABLE_INFO[c])
    }
    ;
    this._onButPlay = function() {
        if (this._checkIfEnoughMoney() === !1) {
            s_oGame.showRechargePanel();
            return
        }
        s_iCurNumCards = i;
        s_iCurNumToExtract = c;
        this.hide();
        s_oGame.initGame(i, a, b, f, c)
    }
    ;
    this._onRecharge = function() {
        $(s_oMain).trigger("recharge")
    }
    ;
    this.show = function() {
        u.visible = !0
    }
    ;
    this.hide = function() {
        u.visible = !1
    }
    ;
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ;
    this._onExit = function() {
        s_oGame.onExit()
    }
    ;
    this.resetFullscreenBut = function() {
        nt && screenfull.isEnabled && st.setActive(s_bFullscreen)
    }
    ;
    this._onFullscreenRelease = function() {
        s_bFullscreen ? pt.call(window.document) : nt.call(window.document.documentElement);
        sizeHandler()
    }
    ;
    vt = t;
    s_oCardSelection = this;
    this._init(n)
}
function CCard(n, t, i, r, u) {
    var a, w, g = -1, v, y, e, f, b, k, l, d, o, p, tt = [], h, c, s, nt;
    this._init = function(n, t, i) {
        var k, tt, rt, d, g, r, l, b;
        for (o = [],
        p = [],
        h = !1,
        w = u,
        v = null,
        k = [],
        tt = 1,
        y = [],
        rt = 15,
        r = 0; r < CARD_COLS; r++)
            for (k[r] = [],
            l = 0; l < rt; l++)
                k[r].push(tt),
                tt++;
        for (e = [],
        r = 0; r < CARD_ROWS; r++)
            for (e[r] = [],
            l = 0; l < CARD_COLS; l++)
                e[r][l] = LABEL_EMPTY;
        for (e[STAR_COORD.row][STAR_COORD.col] = LABEL_STAR,
        r = 0; r < CARD_COLS; r++)
            shuffle(k[r]);
        for (r = 0; r < CARD_COLS; r++)
            r === STAR_COORD.col ? k[r].splice(4) : k[r].splice(5);
        for (r = 0; r < CARD_COLS; r++)
            bubbleSort(k[r]);
        s = new createjs.Container;
        s.scaleX = s.scaleY = i;
        s.x = n;
        s.y = t;
        nt.addChild(s);
        b = s_oSpriteLibrary.getSprite("card_bg");
        d = createBitmap(b);
        d.regX = b.width / 2;
        d.regY = b.height / 2;
        s.addChild(d);
        g = new createjs.Container;
        g.y = 60;
        s.addChild(g);
        b = s_oSpriteLibrary.getSprite("card_cell");
        a = b.width / 5;
        var et = {
            images: [b],
            frames: {
                width: a,
                height: a,
                regX: a / 2,
                regY: a / 2
            },
            animations: {
                state_empty: [0],
                state_extracted: [1],
                state_highlight: [2],
                state_star_empty: [3],
                state_star_highlight: [4]
            }
        }
          , ot = new createjs.SpriteSheet(et)
          , ut = a * (CARD_COLS - 1)
          , ft = a * (CARD_ROWS - 1);
        for (f = [],
        r = 0; r < CARD_ROWS; r++)
            for (f[r] = [],
            l = 0; l < CARD_COLS; l++) {
                var n = -ut / 2 + l * (ut / (CARD_COLS - 1))
                  , t = -ft / 2 + r * (ft / (CARD_ROWS - 1))
                  , it = new CCardCell(n,t,ot,g,e[r][l],a,k[l][0],AUTOFILL_ENABLED);
                it.addEventListener(ON_NUM_CLICK, this._onCellClick, this);
                f[r][l] = it;
                e[r][l] === LABEL_EMPTY ? (e[r][l] = k[l][0],
                k[l].splice(0, 1)) : (e[r][l] = STAR_VALUE,
                it.setValue(STAR_VALUE))
            }
        this.initRows();
        this.initCols();
        this.initDiags();
        this.initCoordinates();
        b = s_oSpriteLibrary.getSprite("card_highlight");
        c = createBitmap(b);
        c.regX = b.width / 2;
        c.regY = b.height / 2;
        c.visible = !1;
        s.addChild(c)
    }
    ;
    this.unload = function() {
        for (var t, n = 0; n < f.length; n++)
            for (t = 0; t < f[n].length; t++)
                f[n][t].unload();
        nt.removeChild(s)
    }
    ;
    this.addEventListener = function(n, t, i, r) {
        o[n] = t;
        p[n] = i;
        tt = r
    }
    ;
    this._onCellClick = function(n) {
        o[ON_CARD_NUM_CLICK] && o[ON_CARD_NUM_CLICK].call(p[ON_CARD_NUM_CLICK], {
            cardid: w,
            number: n
        })
    }
    ;
    this.initRows = function() {
        var n, t;
        for (b = [],
        n = 0; n < CARD_ROWS; n++)
            for (b[n] = [],
            t = 0; t < CARD_COLS; t++)
                b[n].push(parseInt(e[n][t]))
    }
    ;
    this.initCols = function() {
        var n, t;
        for (k = [],
        n = 0; n < CARD_ROWS; n++)
            for (k[n] = [],
            t = 0; t < CARD_COLS; t++)
                k[n].push(parseInt(e[t][n]))
    }
    ;
    this.initDiags = function() {
        var n, t;
        for (l = [],
        l[0] = [],
        l[1] = [],
        n = 0; n < CARD_ROWS; n++)
            for (t = 0; t < CARD_COLS; t++)
                n === t && l[0].push(e[n][t]),
                CARD_COLS - n - 1 === t && l[1].push(e[n][t])
    }
    ;
    this.initCoordinates = function() {
        var n, t;
        for (d = [],
        n = 0; n < CARD_ROWS; n++)
            for (t = 0; t < CARD_COLS; t++)
                d[e[n][t]] = {
                    row: n,
                    col: t
                }
    }
    ;
    this.reset = function() {
        var n, t;
        for (g !== -1 && (clearInterval(g),
        g = -1),
        v = null,
        h = !1,
        y = [],
        c.visible = !1,
        n = 0; n < f.length; n++)
            for (t = 0; t < f[n].length; t++)
                e[n][t] === STAR_VALUE ? f[n][t].gotoAndStop("state_star_empty") : f[n][t].gotoAndStop("state_empty")
    }
    ;
    this.hideHighlight = function() {
        c.visible = !1
    }
    ;
    this.checkIfIsWinner = function(n) {
        for (var u, i, r, t = 0; t < b.length; t++) {
            for (u = 0,
            i = 0; i < b[t].length; i++)
                for (r = 0; r < n.length; r++)
                    n[r] === b[t][i] && u++;
            if (t === STAR_COORD.row) {
                if (u === 4)
                    return !0
            } else if (u === 5)
                return !0
        }
        for (t = 0; t < k.length; t++) {
            for (u = 0,
            i = 0; i < k[t].length; i++)
                for (r = 0; r < n.length; r++)
                    n[r] === k[t][i] && u++;
            if (t === STAR_COORD.col) {
                if (u === 4)
                    return !0
            } else if (u === 5)
                return !0
        }
        for (t = 0; t < l.length; t++) {
            for (u = 0,
            i = 0; i < l[t].length; i++)
                for (r = 0; r < n.length; r++)
                    n[r] === l[t][i] && u++;
            if (u === 4)
                return !0
        }
        return !1
    }
    ;
    this.findNumberExtracted = function(n) {
        for (var i, r = !1, u = 0, f = 0, t = 0; t < e.length; t++)
            for (i = 0; i < e[t].length; i++)
                if (e[t][i] === n) {
                    r = !0;
                    u = t;
                    f = i;
                    break
                }
        r && this._checkWins(u, f)
    }
    ;
    this._checkWins = function(n, t) {
        var c, u, e, n, i, r;
        f[n][t].gotoAndStop("state_extracted");
        var s = !1
          , l = this.getRow(n)
          , i = this.checkLineFills(l);
        if (i && (s = !0,
        y.push(n),
        h || (v = WIN_TYPE_ANY_ROW,
        this.highlightLine(i)),
        h = !0,
        o[ON_CARD_LINE_COMPLETED] && o[ON_CARD_LINE_COMPLETED].call(p[ON_CARD_LINE_COMPLETED], {
            cardid: w,
            type: WIN_TYPE_ANY_ROW,
            laneindex: n
        })),
        c = this.getCol(t),
        i = this.checkLineFills(c),
        i && (h || (v = WIN_TYPE_COLUMN,
        this.highlightLine(i)),
        h = !0,
        o[ON_CARD_LINE_COMPLETED] && o[ON_CARD_LINE_COMPLETED].call(p[ON_CARD_LINE_COMPLETED], {
            cardid: w,
            type: WIN_TYPE_COLUMN,
            laneindex: t
        })),
        n === t && (u = this.getDiag(0),
        i = this.checkLineFills(u),
        i && (h || (v = WIN_TYPE_DIAGONAL,
        this.highlightLine(i)),
        h = !0,
        o[ON_CARD_LINE_COMPLETED] && o[ON_CARD_LINE_COMPLETED].call(p[ON_CARD_LINE_COMPLETED], {
            cardid: w,
            type: WIN_TYPE_DIAGONAL,
            laneindex: 0
        }))),
        CARD_COLS - n - 1 === t && (u = this.getDiag(1),
        i = this.checkLineFills(u),
        i && (h || (v = WIN_TYPE_DIAGONAL,
        this.highlightLine(i)),
        h = !0,
        o[ON_CARD_LINE_COMPLETED] && o[ON_CARD_LINE_COMPLETED].call(p[ON_CARD_LINE_COMPLETED], {
            cardid: w,
            type: WIN_TYPE_DIAGONAL,
            laneindex: 1
        }))),
        s && y.length >= 2) {
            for (this.removePreviousCombo(),
            e = 0; e < y.length; e++)
                n = y[e],
                i = this.getRow(n),
                this.highlightLine(i);
            switch (y.length) {
            case 2:
                r = WIN_TYPE_ANY_2_ROWS;
                break;
            case 3:
                r = WIN_TYPE_ANY_3_ROWS;
                break;
            case 4:
                r = WIN_TYPE_ANY_4_ROWS;
                break;
            case 5:
                r = WIN_TYPE_BINGO
            }
            v = r;
            o[ON_CARD_LINE_COMPLETED] && o[ON_CARD_LINE_COMPLETED].call(p[ON_CARD_LINE_COMPLETED], {
                cardid: w,
                type: r,
                laneindex: n
            })
        }
    }
    ;
    this.initWinAnim = function() {
        c.visible = !0;
        var n = this;
        g = setInterval(function() {
            n._playWinAnim()
        }, 300)
    }
    ;
    this._playWinAnim = function() {
        c.visible = !c.visible
    }
    ;
    this.checkLineFills = function(n) {
        for (var i, r, t = 0; t < n.length; t++)
            if (i = d[n[t]].row,
            r = d[n[t]].col,
            f[i][r].getCurrentAnimation() !== "state_extracted" && f[i][r].getCurrentAnimation() !== "state_star_empty" && f[i][r].getCurrentAnimation() !== "state_highlight" && f[i][r].getCurrentAnimation() !== "state_star_highlight")
                return null;
        return n
    }
    ;
    this.highlightLine = function(n) {
        for (var i, r, t = 0; t < n.length; t++)
            i = d[n[t]].row,
            r = d[n[t]].col,
            i === STAR_COORD.row && r === STAR_COORD.col ? f[i][r].gotoAndStop("state_star_highlight") : f[i][r].gotoAndStop("state_highlight")
    }
    ;
    this.removePreviousCombo = function() {
        for (var t, n = 0; n < f.length; n++)
            for (t = 0; t < f[n].length; t++)
                f[n][t].getCurrentAnimation() === "state_highlight" && f[n][t].gotoAndStop("state_extracted"),
                f[n][t].getCurrentAnimation() === "state_star_highlight" && f[n][t].gotoAndStop("state_star_empty")
    }
    ;
    this.printGrid = function() {
        for (var t, n = 0; n < CARD_ROWS; n++)
            for (t = 0; t < CARD_COLS; t++)
                trace("_aGrid[" + n + "][" + t + "]: " + e[n][t])
    }
    ;
    this.setPos = function(n, t) {
        s.x = n;
        s.y = t
    }
    ;
    this.getBounds = function() {
        return s.getBounds()
    }
    ;
    this.getRow = function(n) {
        return b[n]
    }
    ;
    this.getCol = function(n) {
        return k[n]
    }
    ;
    this.getDiag = function(n) {
        return l[n]
    }
    ;
    this.getRowHighlighted = function() {
        return y.length
    }
    ;
    this.getWinIndex = function() {
        var n;
        switch (v) {
        case WIN_TYPE_DIAGONAL:
            n = 0;
            break;
        case WIN_TYPE_COLUMN:
            n = 1;
            break;
        case WIN_TYPE_ANY_ROW:
            n = 2;
            break;
        case WIN_TYPE_ANY_2_ROWS:
            n = 3;
            break;
        case WIN_TYPE_ANY_3_ROWS:
            n = 4;
            break;
        case WIN_TYPE_ANY_4_ROWS:
            n = 5;
            break;
        case WIN_TYPE_BINGO:
            n = 6;
            break;
        default:
            n = -1
        }
        return n
    }
    ;
    nt = r;
    this._init(n, t, i)
}
function CCardCell(n, t, i, r, u, f, e, o) {
    var h, a, v = [], c, s, l;
    this._init = function(n, t, i, r, u, e, o) {
        if (h = [],
        a = [],
        c = e,
        s = new createjs.Container,
        s.x = n,
        s.y = t,
        r.addChild(s),
        l = createSprite(i, "state_" + u, f / 2, f / 2, f, f),
        s.addChild(l),
        u === LABEL_EMPTY) {
            var v = new createjs.Text(c," 64px " + PRIMARY_FONT,"#000");
            v.y = 6;
            v.textAlign = "center";
            v.textBaseline = "middle";
            s.addChild(v)
        }
        if (!o)
            s.on("click", this._onCellClick, this)
    }
    ;
    this.unload = function() {
        o || s.removeAllEventListeners();
        r.removeChild(s)
    }
    ;
    this.addEventListener = function(n, t, i, r) {
        h[n] = t;
        a[n] = i;
        v = r
    }
    ;
    this._onCellClick = function() {
        h[ON_NUM_CLICK] && h[ON_NUM_CLICK].call(a[ON_NUM_CLICK], c)
    }
    ;
    this.gotoAndStop = function(n) {
        l.gotoAndStop(n)
    }
    ;
    this.getCurrentAnimation = function() {
        return l.currentAnimation
    }
    ;
    this.setValue = function(n) {
        c = n
    }
    ;
    this._init(n, t, i, r, u, e, o)
}
function CMsgBox(n) {
    var i, e, o, h, r, t, s, u, f;
    return this._init = function(n) {
        i = [];
        e = [];
        t = new createjs.Container;
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        t.alpha = 0;
        t.visible = !1;
        t.on("click", function() {}, this);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.addChild(h);
        r = new createjs.Container;
        t.addChild(r);
        o = createBitmap(n);
        o.regX = n.width / 2;
        o.regY = n.height / 2;
        r.addChild(o);
        s = new CTLText(t,-250,-250,500,250,100,"center","#fff",PRIMARY_FONT,1,0,0," ",!0,!0,!0,!1);
        u = new CTextButton(0,150,s_oSpriteLibrary.getSprite("but_gui"),TEXT_EXIT,PRIMARY_FONT,"#ffffff",50,0,r);
        u.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f = new CTextButton(0,100,s_oSpriteLibrary.getSprite("but_gui"),TEXT_RECHARGE,PRIMARY_FONT,"#ffffff",50,0,r);
        f.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
        s_oStage.addChild(t)
    }
    ,
    this.unload = function() {
        s_oStage.removeChild(t);
        u.unload();
        f.unload();
        t.removeAllEventListeners()
    }
    ,
    this.refreshButtonPos = function() {
        smartResize(r, 40, 40)
    }
    ,
    this.addEventListener = function(n, t, r) {
        i[n] = t;
        e[n] = r
    }
    ,
    this.show = function(n, i) {
        playSound("game_over", 1, !1);
        s.refreshText(n);
        t.visible = !0;
        createjs.Tween.get(t).to({
            alpha: 1
        }, 500);
        i ? (u.setPosition(0, 200),
        f.setVisible(!0)) : (u.setPosition(0, 150),
        f.setVisible(!1))
    }
    ,
    this.showAndHide = function(n) {
        s.refreshText(n);
        t.visible = !0;
        var i = this;
        createjs.Tween.get(t).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).wait(500).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn).call(function() {
            i.hide()
        })
    }
    ,
    this.centerMessage = function() {
        s.setY(-125)
    }
    ,
    this.hideButtons = function() {
        u.setVisible(!1);
        f.setVisible(!1)
    }
    ,
    this.hide = function() {
        t.visible = !1
    }
    ,
    this._onExit = function() {
        this.hide();
        i[ON_BUT_EXIT] && i[ON_BUT_EXIT].call(e[ON_BUT_EXIT])
    }
    ,
    this._onRecharge = function() {
        this.hide();
        i[ON_BUT_RECHARGE] && i[ON_BUT_RECHARGE].call(e[ON_BUT_RECHARGE])
    }
    ,
    this._init(n),
    this
}
function CNumberBoard(n, t, i) {
    var u = 5, f = NUM_NUMBERS / u, c = 28, e, r, s, o, h;
    this._init = function(n, t) {
        s = new createjs.Container;
        s.x = n;
        s.y = t;
        h.addChild(s);
        var i = s_oSpriteLibrary.getSprite("board_bg");
        r = createBitmap(i);
        r.regX = i.width / 2;
        r.regY = i.height / 2;
        s.addChild(r);
        o = new createjs.Container;
        h.addChild(o);
        this._initGrid()
    }
    ;
    this._initGrid = function() {
        var s = s_oSpriteLibrary.getSprite("board_cell"), i = s.width / 3, r = s.height, v = {
            images: [s],
            frames: {
                width: i,
                height: r,
                regX: i / 2,
                regY: r / 2
            },
            animations: {
                state_1: [0],
                state_2: [1],
                state_3: [2]
            }
        }, y = new createjs.SpriteSheet(v), h = "state_1", c, l, n, t;
        for (e = [],
        c = i * (f - 1),
        l = r * (u - 1),
        n = 0; n < u; n++)
            for (t = 0; t < f; t++) {
                var p = -c / 2 + t * (c / (f - 1))
                  , w = -l / 2 + n * (l / (u - 1))
                  , a = new CNumberBoardCell(p,w,n * f + (t + 1),i,r,y,o);
                h = h === "state_1" ? "state_2" : "state_1";
                a.setState(h);
                e.push(a)
            }
    }
    ;
    this.reset = function() {
        for (var n = "state_1", t = 0; t < e.length; t++)
            n = n === "state_1" ? "state_2" : "state_1",
            e[t].setState(n)
    }
    ;
    this.numExtracted = function(n) {
        e[n - 1].setState("state_3")
    }
    ;
    this.setHorizontal = function() {
        var n = s_oSpriteLibrary.getSprite("board_bg_horiz"), t, i, a, v;
        r.image = n;
        r.regX = n.width / 2;
        r.regY = n.height / 2;
        r.x = 0;
        r.y = r.getBounds().height / 2;
        o.x = r.x + c;
        o.y = r.y;
        var n = s_oSpriteLibrary.getSprite("board_cell")
          , y = n.width / 3
          , p = n.height
          , s = y * (f - 1)
          , h = p * (u - 1)
          , l = 0;
        for (t = 0; t < u; t++)
            for (i = 0; i < f; i++)
                a = -s / 2 + i * (s / (f - 1)),
                v = -h / 2 + t * (h / (u - 1)),
                e[l].setPos(a, v),
                l++
    }
    ;
    this.setVertical = function() {
        var n = s_oSpriteLibrary.getSprite("board_bg"), t, i, y, p;
        r.image = n;
        r.regX = n.width / 2;
        r.regY = n.height / 2;
        r.x = -r.getBounds().width / 2;
        r.y = r.getBounds().height / 2;
        o.x = r.x;
        o.y = r.y + c;
        var n = s_oSpriteLibrary.getSprite("board_cell")
          , w = n.width / 3
          , b = n.height
          , s = f
          , h = u
          , l = w * (h - 1)
          , a = b * (s - 1)
          , v = 0;
        for (t = 0; t < h; t++)
            for (i = 0; i < s; i++)
                y = -l / 2 + t * (l / (h - 1)),
                p = -a / 2 + i * (a / (s - 1)),
                e[v].setPos(y, p),
                v++
    }
    ;
    h = i;
    this._init(n, t)
}
function CNumberBoardCell(n, t, i, r, u, f, e) {
    var c, s, h, o, l;
    this._init = function(n, t, i, r, u, f) {
        o = new createjs.Container;
        o.x = n;
        o.y = t;
        l.addChild(o);
        c = createSprite(f, "", 0, 0, r, u);
        o.addChild(c);
        h = new createjs.Text(i,"36px " + PRIMARY_FONT,"#000");
        h.x = 1;
        h.y = 5;
        h.textAlign = "center";
        h.textBaseline = "middle";
        o.addChild(h);
        s = new createjs.Text(i,"36px " + PRIMARY_FONT,"#fff");
        s.y = 4;
        s.textAlign = "center";
        s.textBaseline = "middle";
        o.addChild(s)
    }
    ;
    this.setState = function(n) {
        c.gotoAndStop(n);
        s.color = n === "state_3" ? "#ffc103" : "#fff"
    }
    ;
    this.setPos = function(n, t) {
        o.x = n;
        o.y = t
    }
    ;
    l = e;
    this._init(n, t, i, r, u, f)
}
function CBallExtracted(n, t, i, r, u, f, e, o, s) {
    var y, l, c, a, h, v;
    this._init = function(n, t, i, r, u, f, e, o) {
        y = u;
        h = new createjs.Container;
        h.x = n;
        h.y = t;
        v.addChild(h);
        l = createSprite(o, u, i / 2, r / 2, i, r);
        l.gotoAndStop(u);
        h.addChild(l);
        c = new createjs.Text("",f + "px " + PRIMARY_FONT,"#222");
        c.y = 2;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.outline = e;
        h.addChild(c);
        a = new createjs.Text("",f + "px " + PRIMARY_FONT,"#fff");
        a.y = c.y;
        a.textAlign = "center";
        a.textBaseline = "middle";
        h.addChild(a)
    }
    ;
    this.setMask = function(n) {
        h.mask = n;
        navigator.userAgent.indexOf("Chrome/50.0") > -1 && (h.compositeOperation = "hard-light")
    }
    ;
    this.unload = function() {
        v.removeChild(h)
    }
    ;
    this.setText = function(n) {
        c.text = n;
        a.text = n
    }
    ;
    this.setSprite = function(n) {
        l.gotoAndStop(n)
    }
    ;
    this.moveX = function(n, t, i) {
        createjs.Tween.get(h).to({
            x: n
        }, 300, createjs.Ease.cubicOut).call(function() {
            t.call(i)
        })
    }
    ;
    this.moveY = function(n, t, i, r) {
        this.setText(t);
        createjs.Tween.get(h).to({
            y: n
        }, 300, createjs.Ease.cubicOut).call(function() {
            i.call(r)
        })
    }
    ;
    this.getX = function() {
        return h.x + l.x
    }
    ;
    this.getY = function() {
        return h.y + l.y
    }
    ;
    this.getColor = function() {
        return y
    }
    ;
    v = s;
    this._init(n, t, i, r, u, f, e, o)
}
function CPaytablePanel(n) {
    var i, u, t, f, r, e;
    this._init = function() {
        var n, i;
        r = new createjs.Shape;
        r.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.visible = !1;
        r.on("click", function() {});
        f.addChild(r);
        t = new createjs.Container;
        t.on("click", function() {});
        t.visible = !1;
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        f.addChild(t);
        n = s_oSpriteLibrary.getSprite("msg_box");
        i = createBitmap(n);
        i.regX = n.width / 2;
        i.regY = n.height / 2;
        t.addChild(i);
        var e = 500
          , o = 44
          , s = new CTLText(t,0 - e / 2,-300 - o / 2,e,o,44,"center","#ffc103",PRIMARY_FONT,1,0,0,TEXT_PAYTABLE,!0,!0,!1,!1);
        this._initCards();
        u = new CTextButton(226,276,s_oSpriteLibrary.getSprite("but_gui"),TEXT_PLAY,PRIMARY_FONT,"#ffffff",50,0,t);
        u.addEventListener(ON_MOUSE_UP, this._onButPlay, this)
    }
    ;
    this.unload = function() {
        u.unload();
        t.removeAllEventListeners()
    }
    ;
    this.refreshButtonPos = function() {
        smartResize(t, 40, 40)
    }
    ;
    this.show = function() {
        t.visible = !0;
        r.visible = !0;
        createjs.Ticker.paused = !0
    }
    ;
    this.hide = function() {
        t.visible = !1;
        r.visible = !1;
        createjs.Ticker.paused = !1
    }
    ;
    this._initCards = function() {
        var e = s_oSpriteLibrary.getSprite("card_cell")
          , n = e.width / 5
          , o = {
            images: [e],
            frames: {
                width: n,
                height: n,
                regX: n / 2,
                regY: n / 2
            },
            animations: {
                state_empty: [0],
                state_extracted: [1],
                state_highlight: [2],
                state_star_empty: [3],
                state_star_highlight: [4]
            }
        }
          , r = new createjs.SpriteSheet(o)
          , u = 170
          , f = 190;
        i = [];
        i[0] = new CPaytableCard(-u,-f,n,0,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_DIAGONAL]);
        i[1] = new CPaytableCard(0,-f,n,1,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_COLUMN]);
        i[2] = new CPaytableCard(u,-f,n,2,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_ROW]);
        i[3] = new CPaytableCard(-u,0,n,0,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_2_ROWS]);
        i[4] = new CPaytableCard(0,0,n,1,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_3_ROWS]);
        i[5] = new CPaytableCard(u,0,n,2,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_4_ROWS]);
        i[6] = new CPaytableCard(0,f,n,2,r,t,PAYTABLE_WIN_SCHEME[WIN_TYPE_BINGO])
    }
    ;
    this.initPrizes = function(n) {
        for (var t = 0; t < i.length; t++)
            i[t].setMsg(TEXT_PAYTABLE_PRIZES[t] + ": x" + n[t])
    }
    ;
    this._onButPlay = function() {
        e.hide()
    }
    ;
    e = this;
    f = n;
    this._init()
}
function CPaytableCard(n, t, i, r, u, f, e) {
    var s, o, h;
    this._init = function(n, t, i, r, u, f) {
        var a, v, e, c, l;
        for (o = new createjs.Container,
        o.x = n,
        o.y = t,
        o.scaleX = o.scaleY = .25,
        h.addChild(o),
        a = i * (f[0].length - 1),
        v = i * (f.length - 1),
        e = 0; e < f.length; e++)
            for (c = 0; c < f[e].length; c++)
                l = e === STAR_COORD.row && c === STAR_COORD.col ? f[e][c] === 0 ? createSprite(u, "state_star_empty", 0, 0, i, i) : createSprite(u, "state_star_highlight", 0, 0, i, i) : f[e][c] === 0 ? createSprite(u, "state_empty", 0, 0, i, i) : createSprite(u, "state_highlight", 0, 0, i, i),
                l.x = -a / 2 + c * (a / (f[e].length - 1)),
                l.y = -v / 2 + e * (v / (f.length - 1)),
                o.addChild(l);
        var w = o.getBounds().height / 2 + i / 2
          , y = o.getBounds().width
          , p = 70;
        s = new CTLText(o,0 - y / 2,w - p / 2,y,p,70,"center","#fff",PRIMARY_FONT,1,0,0,TEXT_PAYTABLE_PRIZES[r],!0,!0,!1,!1)
    }
    ;
    this.setMsg = function(n) {
        s.refreshText(n)
    }
    ;
    h = f;
    this._init(n, t, i, r, u, e)
}
function CDisplayText(n, t, i, r, u, f, e) {
    var s, c, o, h;
    this._init = function(n, t, i, r, u, f) {
        o = new createjs.Container;
        o.x = n;
        o.y = t;
        h.addChild(o);
        var e = createBitmap(i);
        o.addChild(e);
        s = new CTLText(o,20,19,i.width - 40,i.height - 40,f,"center","#fff",PRIMARY_FONT,1,0,0,r,!0,!0,!1,!1);
        c = new CTLText(o,0,-40,i.width,36,30,"center","#fff",PRIMARY_FONT,1,10,0,u,!0,!0,!1,!1)
    }
    ;
    this.setPosition = function(n, t) {
        o.x = n;
        o.y = t
    }
    ;
    this.changeText = function(n) {
        s.refreshText(n)
    }
    ;
    this.getX = function() {
        return o.x
    }
    ;
    this.getY = function() {
        return o.y
    }
    ;
    this.setHighlight = function() {
        createjs.Tween.get(s.getText(), {
            loop: !0
        }).to({
            alpha: 0
        }, 600, createjs.Ease.cubicIn).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut)
    }
    ;
    this.stopHighlight = function() {
        s.getText().alpha = 1;
        createjs.Tween.removeTweens(s.getText())
    }
    ;
    h = e;
    this._init(n, t, i, r, u, f)
}
function CAreYouSurePanel(n) {
    var r, u, i, s, f, e, t, o;
    this._init = function() {
        r = [];
        u = [];
        i = new createjs.Shape;
        i.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        i.visible = !1;
        i.on("click", function() {});
        s_oStage.addChild(i);
        t = new createjs.Container;
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        t.visible = !1;
        o.addChild(t);
        var n = s_oSpriteLibrary.getSprite("msg_box")
          , h = createBitmap(n);
        h.regX = n.width / 2;
        h.regY = n.height / 2;
        t.addChild(h);
        s = new CTLText(t,-250,-200,500,250,100,"center","#fff",PRIMARY_FONT,1,0,0,TEXT_ARE_SURE,!0,!0,!0,!1);
        f = new CTextButton(170,170,s_oSpriteLibrary.getSprite("but_gui"),TEXT_YES,PRIMARY_FONT,"#ffffff",50,0,t);
        f.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        e = new CTextButton(-170,170,s_oSpriteLibrary.getSprite("but_gui"),TEXT_NO,PRIMARY_FONT,"#ffffff",50,0,t);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    }
    ;
    this.unload = function() {
        f.unload();
        e.unload();
        i.removeAllEventListeners()
    }
    ;
    this.addEventListener = function(n, t, i) {
        r[n] = t;
        u[n] = i
    }
    ;
    this.refreshButtonPos = function() {
        smartResize(t, 40, 40)
    }
    ;
    this.show = function() {
        t.visible = !0;
        i.visible = !0
    }
    ;
    this.hide = function() {
        t.visible = !1;
        i.visible = !1
    }
    ;
    this._onButYes = function() {
        this.hide();
        r[ON_BUT_YES] && r[ON_BUT_YES].call(u[ON_BUT_YES])
    }
    ;
    this._onButNo = function() {
        this.hide();
        r[ON_BUT_NO] && r[ON_BUT_NO].call(u[ON_BUT_NO])
    }
    ;
    o = n;
    this._init()
}
function CCreditsPanel() {
    var s, i, r, u, f, t, e, n, o;
    this._init = function() {
        var h, c;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(f);
        n = new createjs.Container;
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(n);
        h = s_oSpriteLibrary.getSprite("bg_credits");
        i = createBitmap(h);
        i.regX = h.width / 2;
        i.regY = h.height / 2;
        n.addChild(i);
        t = new createjs.Shape;
        t.graphics.beginFill("#0f0f0f").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.alpha = .01;
        s = t.on("click", this._onLogoButRelease);
        n.addChild(t);
        h = s_oSpriteLibrary.getSprite("but_exit");
        o = {
            x: 236,
            y: -104
        };
        r = new CGfxButton(o.x,o.y,h,n);
        r.addEventListener(ON_MOUSE_UP, this.unload, this);
        u = new createjs.Text(TEXT_CREDITS_DEVELOPED,"36px " + PRIMARY_FONT,"#ffffff");
        u.y = -80;
        u.textAlign = "center";
        n.addChild(u);
        h = s_oSpriteLibrary.getSprite("logo_ctl");
        c = createBitmap(h);
        c.regX = h.width / 2;
        c.regY = h.height / 2;
        n.addChild(c);
        e = new createjs.Text("www.codethislab.com","34px " + PRIMARY_FONT,"#ffffff");
        e.y = 100;
        e.textAlign = "center";
        n.addChild(e)
    }
    ;
    this.unload = function() {
        t.off("click", s);
        r.unload();
        r = null;
        s_oStage.removeChild(f);
        s_oStage.removeChild(n);
        s_oMenu.onExitCredits()
    }
    ;
    this.refreshButtonPos = function() {
        smartResize(n, 40, 40)
    }
    ;
    this._onLogoButRelease = function() {
        window.open("https://www.codethislab.com/", "_blank")
    }
    ;
    this._init()
}
function CTLText(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    this._oContainer = n;
    this._x = t;
    this._y = i;
    this._iWidth = r;
    this._iHeight = u;
    this._bMultiline = p;
    this._iFontSize = f;
    this._szAlign = e;
    this._szColor = o;
    this._szFont = s;
    this._iPaddingH = c;
    this._iPaddingV = l;
    this._bVerticalAlign = y;
    this._bFitText = v;
    this._bDebug = w;
    this._oDebugShape = null;
    this._fLineHeightFactor = h;
    this._oText = null;
    a && this.__createText(a)
}
function CGUIExpandible(n, t, i, r) {
    const v = 74;
    var e, f, o, h, c, u, s, l, a, y;
    this._init = function(n, t, i, r) {
        var h, p;
        f = [];
        y = {
            x: n,
            y: t
        };
        u = new createjs.Container;
        u.x = n;
        u.y = t;
        r.addChild(u);
        s = new createjs.Container;
        u.addChild(s);
        l = new createjs.Container;
        u.addChild(l);
        e = !1;
        c = new CGfxButton(0,0,i,l);
        c.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        o = new createjs.Shape;
        h = -i.width / 2 - i.width * 7;
        o.graphics.beginFill("rgba(255,0,0,0.01)").drawRoundRectComplex(h, -i.height / 2, i.width * 7, i.height, 20, 20, 20, 20);
        p = {
            x: v,
            y: 0
        };
        s.addChild(o);
        a = {
            start: p,
            offset: v
        }
    }
    ;
    this.unload = function() {
        c.unload();
        r.removeChild(u)
    }
    ;
    this.refreshPos = function() {
        u.x = n - s_iOffsetX;
        u.y = t + s_iOffsetY
    }
    ;
    this.addButton = function(n) {
        var t = n.getButtonImage();
        n.setMask(o);
        t.x = 0;
        t.y = 0;
        t.visible = !1;
        s.addChildAt(t, 0);
        f.push(t)
    }
    ;
    this._onMenu = function() {
        e = !e;
        e ? h._expand() : h._collapse()
    }
    ;
    this._expand = function() {
        for (var t = 300, n = 0; n < f.length; n++)
            f[n].visible = !0,
            createjs.Tween.get(f[n], {
                override: !0
            }).wait(n * t / 2).to({
                x: -a.start.x - n * a.offset
            }, t, createjs.Ease.cubicOut)
    }
    ;
    this._collapse = function() {
        for (var t, i = 300, n = 0; n < f.length; n++)
            t = f[f.length - 1 - n],
            createjs.Tween.get(t, {
                override: !0
            }).wait(n * i / 2).to({
                x: 0
            }, i, createjs.Ease.cubicOut).call(function(n) {
                n.visible = !1
            }, [t])
    }
    ;
    h = this;
    this._init(n, t, i, r)
}
function extractHostname(n) {
    var t;
    return t = n.indexOf("://") > -1 ? n.split("/")[2] : n.split("/")[0],
    t = t.split(":")[0],
    t.split("?")[0]
}
function extractRootDomain(n) {
    var t = extractHostname(n)
      , i = t.split(".")
      , r = i.length;
    return r > 2 && (t = i[r - 2] + "." + i[r - 1]),
    t
}
function seekAndDestroy() {
    for (var i = extractRootDomain(PAGE_URL), t = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], n = 0; n < t.length; n++)
        if (t[n] === i)
            return !0;
    return !1
}
var BALL_COLORS, SOUNDTRACK_VOLUME_IN_GAME, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, s_oMenu, s_oGame, s_oInterface;
(function() {
    "use strict";
    var t = typeof window != "undefined" && typeof window.document != "undefined" ? window.document : {}
      , r = typeof module != "undefined" && module.exports
      , n = function() {
        for (var i, r = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, f = r.length, u = {}; n < f; n++)
            if (i = r[n],
            i && i[1]in t) {
                for (n = 0; n < i.length; n++)
                    u[r[0][n]] = i[n];
                return u
            }
        return !1
    }()
      , u = {
        change: n.fullscreenchange,
        error: n.fullscreenerror
    }
      , i = {
        request: function(i) {
            return new Promise(function(r, u) {
                var f = function() {
                    this.off("change", f);
                    r()
                }
                .bind(this);
                this.on("change", f);
                i = i || t.documentElement;
                Promise.resolve(i[n.requestFullscreen]()).catch(u)
            }
            .bind(this))
        },
        exit: function() {
            return new Promise(function(i, r) {
                if (!this.isFullscreen) {
                    i();
                    return
                }
                var u = function() {
                    this.off("change", u);
                    i()
                }
                .bind(this);
                this.on("change", u);
                Promise.resolve(t[n.exitFullscreen]()).catch(r)
            }
            .bind(this))
        },
        toggle: function(n) {
            return this.isFullscreen ? this.exit() : this.request(n)
        },
        onchange: function(n) {
            this.on("change", n)
        },
        onerror: function(n) {
            this.on("error", n)
        },
        on: function(n, i) {
            var r = u[n];
            r && t.addEventListener(r, i, !1)
        },
        off: function(n, i) {
            var r = u[n];
            r && t.removeEventListener(r, i, !1)
        },
        raw: n
    };
    if (!n) {
        r ? module.exports = {
            isEnabled: !1
        } : window.screenfull = {
            isEnabled: !1
        };
        return
    }
    Object.defineProperties(i, {
        isFullscreen: {
            get: function() {
                return Boolean(t[n.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return t[n.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        }
    });
    r ? module.exports = i : window.screenfull = i
}
)();
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license <https://mths.be/mit>
 */
(function() {
    "use strict";
    function p(n) {
        return n = String(n),
        n.charAt(0).toUpperCase() + n.slice(1)
    }
    function nt(n, t, i) {
        var r = {
            "10.0": "10",
            "6.4": "10 Technical Preview",
            "6.3": "8.1",
            "6.2": "8",
            "6.1": "Server 2008 R2 / 7",
            "6.0": "Server 2008 / Vista",
            "5.2": "Server 2003 / XP 64-bit",
            "5.1": "XP",
            "5.01": "2000 SP1",
            "5.0": "2000",
            "4.0": "NT",
            "4.90": "ME"
        };
        return t && i && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (r = r[/[\d.]+$/.exec(n)]) && (n = "Windows " + r),
        n = String(n),
        t && i && (n = n.replace(RegExp(t, "i"), i)),
        o(n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
    }
    function tt(n, t) {
        var r = -1
          , i = n ? n.length : 0;
        if (typeof i == "number" && i > -1 && i <= k)
            while (++r < i)
                t(n[r], r, n);
        else
            s(n, t)
    }
    function o(n) {
        return n = w(n),
        /^(?:webOS|i(?:OS|P))/.test(n) ? n : p(n)
    }
    function s(n, t) {
        for (var i in n)
            g.call(n, i) && t(n[i], i, n)
    }
    function t(n) {
        return n == null ? p(n) : y.call(n).slice(8, -1)
    }
    function it(n, t) {
        var i = n != null ? typeof n[t] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(i) && (i == "object" ? !!n[t] : !0)
    }
    function i(n) {
        return String(n).replace(/([ -])(?!$)/g, "$1?")
    }
    function r(n, t) {
        var i = null;
        return tt(n, function(r, u) {
            i = t(i, r, u, n)
        }),
        i
    }
    function w(n) {
        return String(n).replace(/^ +| +$/g, "")
    }
    function h(n) {
        function ui(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }
        function fi(t) {
            return r(t, function(t, r, u) {
                return t || (r[p] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(p)] || RegExp("\\b" + i(u) + "(?:\\b|\\w*\\d)", "i").exec(n)) && u
            })
        }
        function ei(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }
        function oi(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (t = nt(t, u, r.label || r)),
                t
            })
        }
        function wt(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + u + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + u + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((t = String(r.label && !RegExp(u, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]),
                r = r.label || r,
                t = o(t[0].replace(RegExp(u, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                t
            })
        }
        function si(t) {
            return r(t, function(t, i) {
                return t || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
            })
        }
        function hi() {
            return this.description || ""
        }
        var g = u, ut = n && typeof n == "object" && t(n) != "String", ot, at, tt;
        ut && (g = n,
        n = null);
        ot = g.navigator || {};
        at = ot.userAgent || "";
        n || (n = at);
        var ci = ut || d == b, bt = ut ? !!ot.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(y.toString()), vt = "Object", kt = ut ? vt : "ScriptBridgingProxyObject", dt = ut ? vt : "Environment", gt = ut && g.java ? "JavaPackage" : t(g.java), ni = ut ? vt : "RuntimeObject", st = /\bJava/.test(gt) && g.java, ti = st && t(g.environment) == dt, ii = st ? "a" : "α", ri = st ? "b" : "β", yt = g.document || {}, ft = g.operamini || g.opera, ht = e.test(ht = ut && ft ? ft["[[Class]]"] : t(ft)) ? ht : ft = null, f, ct = n, v = [], lt = null, et = n == at, a = et && ft && typeof ft.version == "function" && ft.version(), pt, k = ui([{
            label: "EdgeHTML",
            pattern: "Edge"
        }, "Trident", {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), c = ei(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
            label: "Microsoft Edge",
            pattern: "Edge"
        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
            label: "Samsung Internet",
            pattern: "SamsungBrowser"
        }, "SeaMonkey", {
            label: "Silk",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", {
            label: "SRWare Iron",
            pattern: "Iron"
        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
            label: "Opera Mini",
            pattern: "OPiOS"
        }, "Opera", {
            label: "Opera",
            pattern: "OPR"
        }, "Chrome", {
            label: "Chrome Mobile",
            pattern: "(?:CriOS|CrMo)"
        }, {
            label: "Firefox",
            pattern: "(?:Firefox|Minefield)"
        }, {
            label: "Firefox for iOS",
            pattern: "FxiOS"
        }, {
            label: "IE",
            pattern: "IEMobile"
        }, {
            label: "IE",
            pattern: "MSIE"
        }, "Safari"]), p = wt([{
            label: "BlackBerry",
            pattern: "BB10"
        }, "BlackBerry", {
            label: "Galaxy S",
            pattern: "GT-I9000"
        }, {
            label: "Galaxy S2",
            pattern: "GT-I9100"
        }, {
            label: "Galaxy S3",
            pattern: "GT-I9300"
        }, {
            label: "Galaxy S4",
            pattern: "GT-I9500"
        }, {
            label: "Galaxy S5",
            pattern: "SM-G900"
        }, {
            label: "Galaxy S6",
            pattern: "SM-G920"
        }, {
            label: "Galaxy S6 Edge",
            pattern: "SM-G925"
        }, {
            label: "Galaxy S7",
            pattern: "SM-G930"
        }, {
            label: "Galaxy S7 Edge",
            pattern: "SM-G935"
        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
            label: "Kindle Fire",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
            label: "Wii U",
            pattern: "WiiU"
        }, "Wii", "Xbox One", {
            label: "Xbox 360",
            pattern: "Xbox"
        }, "Xoom"]), rt = fi({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Archos: {},
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1,
                Nexus: 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                PlayStation: 1,
                "PlayStation Vita": 1
            }
        }), l = oi(["Windows Phone", "Android", "CentOS", {
            label: "Chrome OS",
            pattern: "CrOS"
        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (k && (k = [k]),
        rt && !p && (p = wt([rt])),
        (f = /\bGoogle TV\b/.exec(p)) && (p = f[0]),
        /\bSimulator\b/i.test(n) && (p = (p ? p + " " : "") + "Simulator"),
        c == "Opera Mini" && /\bOPiOS\b/.test(n) && v.push("running in Turbo/Uncompressed mode"),
        c == "IE" && /\blike iPhone OS\b/.test(n) ? (f = h(n.replace(/like iPhone OS/, "")),
        rt = f.manufacturer,
        p = f.product) : /^iP/.test(p) ? (c || (c = "Safari"),
        l = "iOS" + ((f = / OS ([\d_]+)/i.exec(n)) ? " " + f[1].replace(/_/g, ".") : "")) : c != "Konqueror" || /buntu/i.test(l) ? rt && rt != "Google" && (/Chrome/.test(c) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(p)) || /\bAndroid\b/.test(l) && /^Chrome/.test(c) && /\bVersion\//i.test(n) ? (c = "Android Browser",
        l = /\bAndroid\b/.test(l) ? l : "Android") : c == "Silk" ? (/\bMobi/i.test(n) || (l = "Android",
        v.unshift("desktop mode")),
        /Accelerated *= *true/i.test(n) && v.unshift("accelerated")) : c == "PaleMoon" && (f = /\bFirefox\/([\d.]+)\b/.exec(n)) ? v.push("identifying as Firefox " + f[1]) : c == "Firefox" && (f = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (l || (l = "Firefox OS"),
        p || (p = f[1])) : !c || (f = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(c)) ? (c && !p && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(f + "/") + 8)) && (c = null),
        (f = p || rt || l) && (p || rt || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(l)) && (c = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(l) ? l : f) + " Browser")) : c == "Electron" && (f = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && v.push("Chromium " + f) : l = "Kubuntu",
        a || (a = si(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", i(c), "(?:Firefox|Minefield|NetFront)"])),
        (f = k == "iCab" && parseFloat(a) > 3 && "WebKit" || /\bOpera\b/.test(c) && (/\bOPR\b/.test(n) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(k) && "WebKit" || !k && /\bMSIE\b/i.test(n) && (l == "Mac OS" ? "Tasman" : "Trident") || k == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(c) && "NetFront") && (k = [f]),
        c == "IE" && (f = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (c += " Mobile",
        l = "Windows Phone " + (/\+$/.test(f) ? f : f + ".x"),
        v.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (c = "IE Mobile",
        l = "Windows Phone 8.x",
        v.unshift("desktop mode"),
        a || (a = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : c != "IE" && k == "Trident" && (f = /\brv:([\d.]+)/.exec(n)) && (c && v.push("identifying as " + c + (a ? " " + a : "")),
        c = "IE",
        a = f[1]),
        et) {
            if (it(g, "global"))
                if (st && (f = st.lang.System,
                ct = f.getProperty("os.arch"),
                l = l || f.getProperty("os.name") + " " + f.getProperty("os.version")),
                ti) {
                    try {
                        a = g.require("ringo/engine").version.join(".");
                        c = "RingoJS"
                    } catch (li) {
                        (f = g.system) && f.global.system == g.system && (c = "Narwhal",
                        l || (l = f[0].os || null))
                    }
                    c || (c = "Rhino")
                } else
                    typeof g.process == "object" && !g.process.browser && (f = g.process) && (typeof f.versions == "object" && (typeof f.versions.electron == "string" ? (v.push("Node " + f.versions.node),
                    c = "Electron",
                    a = f.versions.electron) : typeof f.versions.nw == "string" && (v.push("Chromium " + a, "Node " + f.versions.node),
                    c = "NW.js",
                    a = f.versions.nw)),
                    c || (c = "Node.js",
                    ct = f.arch,
                    l = f.platform,
                    a = /[\d.]+/.exec(f.version),
                    a = a ? a[0] : null));
            else
                t(f = g.runtime) == kt ? (c = "Adobe AIR",
                l = f.flash.system.Capabilities.os) : t(f = g.phantom) == ni ? (c = "PhantomJS",
                a = (f = f.version || null) && f.major + "." + f.minor + "." + f.patch) : typeof yt.documentMode == "number" && (f = /\bTrident\/(\d+)/i.exec(n)) ? (a = [a, yt.documentMode],
                (f = +f[1] + 4) != a[1] && (v.push("IE " + a[1] + " mode"),
                k && (k[1] = ""),
                a[1] = f),
                a = c == "IE" ? String(a[1].toFixed(1)) : a[0]) : typeof yt.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(c) && (v.push("masking as " + c + " " + a),
                c = "IE",
                a = "11.0",
                k = ["Trident"],
                l = "Windows");
            l = l && o(l)
        }
        if (a && (f = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(a) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (et && ot.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (lt = /b/i.test(f) ? "beta" : "alpha",
        a = a.replace(RegExp(f + "\\+?$"), "") + (lt == "beta" ? ri : ii) + (/\d+\+?/.exec(f) || "")),
        c == "Fennec" || c == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(l))
            c = "Firefox Mobile";
        else if (c == "Maxthon" && a)
            a = a.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(p))
            p == "Xbox 360" && (l = null),
            p == "Xbox 360" && /\bIEMobile\b/.test(n) && v.unshift("mobile mode");
        else if ((/^(?:Chrome|IE|Opera)$/.test(c) || c && !p && !/Browser|Mobi/.test(c)) && (l == "Windows CE" || /Mobi/i.test(n)))
            c += " Mobile";
        else if (c == "IE" && et)
            try {
                g.external === null && v.unshift("platform preview")
            } catch (li) {
                v.unshift("embedded")
            }
        else
            (/\bBlackBerry\b/.test(p) || /\bBB10\b/.test(n)) && (f = (RegExp(p.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || a) ? (f = [f, /BB10/.test(n)],
            l = (f[1] ? (p = null,
            rt = "BlackBerry") : "Device Software") + " " + f[0],
            a = null) : this != s && p != "Wii" && (et && ft || /Opera/.test(c) && /\b(?:MSIE|Firefox)\b/i.test(n) || c == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(l) || c == "IE" && (l && !/^Win/.test(l) && a > 5.5 || /\bWindows XP\b/.test(l) && a > 8 || a == 8 && !/\bTrident\b/.test(n))) && !e.test(f = h.call(s, n.replace(e, "") + ";")) && f.name && (f = "ing as " + f.name + ((f = f.version) ? " " + f : ""),
            e.test(c) ? (/\bIE\b/.test(f) && l == "Mac OS" && (l = null),
            f = "identify" + f) : (f = "mask" + f,
            c = ht ? o(ht.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
            /\bIE\b/.test(f) && (l = null),
            et || (a = null)),
            k = ["Presto"],
            v.push(f));
        return (f = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (f = [parseFloat(f.replace(/\.(\d)$/, ".0$1")), f],
        c == "Safari" && f[1].slice(-1) == "+" ? (c = "WebKit Nightly",
        lt = "alpha",
        a = f[1].slice(0, -1)) : (a == f[1] || a == (f[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) && (a = null),
        f[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1],
        f[0] == 537.36 && f[2] == 537.36 && parseFloat(f[1]) >= 28 && k == "WebKit" && (k = ["Blink"]),
        et && (bt || f[1]) ? (k && (k[1] = "like Chrome"),
        f = f[1] || (f = f[0],
        f < 530 ? 1 : f < 532 ? 2 : f < 532.05 ? 3 : f < 533 ? 4 : f < 534.03 ? 5 : f < 534.07 ? 6 : f < 534.1 ? 7 : f < 534.13 ? 8 : f < 534.16 ? 9 : f < 534.24 ? 10 : f < 534.3 ? 11 : f < 535.01 ? 12 : f < 535.02 ? "13+" : f < 535.07 ? 15 : f < 535.11 ? 16 : f < 535.19 ? 17 : f < 536.05 ? 18 : f < 536.1 ? 19 : f < 537.01 ? 20 : f < 537.11 ? "21+" : f < 537.13 ? 23 : f < 537.18 ? 24 : f < 537.24 ? 25 : f < 537.36 ? 26 : k != "Blink" ? "27" : "28")) : (k && (k[1] = "like Safari"),
        f = (f = f[0],
        f < 400 ? 1 : f < 500 ? 2 : f < 526 ? 3 : f < 533 ? 4 : f < 534 ? "4+" : f < 535 ? 5 : f < 537 ? 6 : f < 538 ? 7 : f < 601 ? 8 : "8")),
        k && (k[1] += " " + (f += typeof f == "number" ? ".x" : /[.+]/.test(f) ? "" : "+")),
        c == "Safari" && (!a || parseInt(a) > 45) && (a = f)),
        c == "Opera" && (f = /\bzbov|zvav$/.exec(l)) ? (c += " ",
        v.unshift("desktop mode"),
        f == "zvav" ? (c += "Mini",
        a = null) : c += "Mobile",
        l = l.replace(RegExp(" *" + f + "$"), "")) : c == "Safari" && /\bChrome\b/.exec(k && k[1]) && (v.unshift("desktop mode"),
        c = "Chrome Mobile",
        a = null,
        /\bOS X\b/.test(l) ? (rt = "Apple",
        l = "iOS 4.3+") : l = null),
        a && a.indexOf(f = /[\d.]+$/.exec(l)) == 0 && n.indexOf("/" + f + "-") > -1 && (l = w(l.replace(f, ""))),
        k && !/\b(?:Avant|Nook)\b/.test(c) && (/Browser|Lunascape|Maxthon/.test(c) || c != "Safari" && /^iOS/.test(l) && /\bSafari\b/.test(k[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(c) && k[1]) && (f = k[k.length - 1]) && v.push(f),
        v.length && (v = ["(" + v.join("; ") + ")"]),
        rt && p && p.indexOf(rt) < 0 && v.push("on " + rt),
        p && v.push((/^on /.test(v[v.length - 1]) ? "" : "on ") + p),
        l && (f = / ([\d.+]+)$/.exec(l),
        pt = f && l.charAt(l.length - f[0].length - 1) == "/",
        l = {
            architecture: 32,
            family: f && !pt ? l.replace(f[0], "") : l,
            version: f ? f[1] : null,
            toString: function() {
                var n = this.version;
                return this.family + (n && !pt ? " " + n : "") + (this.architecture == 64 ? " 64-bit" : "")
            }
        }),
        (f = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(ct)) && !/\bi686\b/i.test(ct) ? (l && (l.architecture = 64,
        l.family = l.family.replace(RegExp(" *" + f), "")),
        c && (/\bWOW64\b/i.test(n) || et && /\w(?:86|32)$/.test(ot.cpuClass || ot.platform) && !/\bWin64; x64\b/i.test(n)) && v.unshift("32-bit")) : l && /^OS X/.test(l.family) && c == "Chrome" && parseFloat(a) >= 39 && (l.architecture = 64),
        n || (n = null),
        tt = {},
        tt.description = n,
        tt.layout = k && k[0],
        tt.manufacturer = rt,
        tt.name = c,
        tt.prerelease = lt,
        tt.product = p,
        tt.ua = n,
        tt.version = c && a,
        tt.os = l || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        },
        tt.parse = h,
        tt.toString = hi,
        tt.version && v.unshift(a),
        tt.name && v.unshift(c),
        !l || !c || l == String(l).split(" ")[0] && (l == c.split(" ")[0] || p) || v.push(p ? "(" + l + ")" : "on " + l),
        v.length && (tt.description = v.join(" ")),
        tt
    }
    var c = {
        "function": !0,
        object: !0
    }, u = c[typeof window] && window || this, b = u, l = c[typeof exports] && exports, a = c[typeof module] && module && !module.nodeType && module, n = l && a && typeof global == "object" && global, f;
    n && (n.global === n || n.window === n || n.self === n) && (u = n);
    var k = Math.pow(2, 53) - 1
      , e = /\bOpera/
      , d = this
      , v = Object.prototype
      , g = v.hasOwnProperty
      , y = v.toString;
    f = h();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (u.platform = f,
    define(function() {
        return f
    })) : l && a ? s(f, function(n, t) {
        l[t] = n
    }) : u.platform = f
}
).call(this);
document.addEventListener("DOMContentLoaded", () => {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(),
    buildIOSMeta())
}
);
window.addEventListener("resize", function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && iosResize()
});
var s_iOffsetX, s_iOffsetY, s_bIsIphone = !1, s_bLandscape = !1, s_bFocus = !0;
if (function(n) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera),
$(window).resize(function() {
    sizeHandler()
}),
window.addEventListener("orientationchange", onOrientationChange),
NoClickDelay.prototype = {
    handleEvent: function(n) {
        switch (n.type) {
        case "touchstart":
            this.onTouchStart(n);
            break;
        case "touchmove":
            this.onTouchMove(n);
            break;
        case "touchend":
            this.onTouchEnd(n)
        }
    },
    onTouchStart: function(n) {
        n.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function() {
        this.moved = !0
    },
    onTouchEnd: function(n) {
        var t, i;
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        this.moved || (t = document.elementFromPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY),
        t.nodeType == 3 && (t = t.parentNode),
        i = document.createEvent("MouseEvents"),
        i.initEvent("click", !0, !0),
        t.dispatchEvent(i))
    }
},
function() {
    function n(n) {
        var i = "visible"
          , r = "hidden"
          , u = {
            focus: i,
            focusin: i,
            pageshow: i,
            blur: r,
            focusout: r,
            pagehide: r
        };
        n = n || window.event;
        n.type in u ? document.body.className = u[n.type] : (document.body.className = this[t] ? "hidden" : "visible",
        document.body.className === "hidden" ? (s_oMain.stopUpdate(),
        s_bFocus = !1) : (s_oMain.startUpdate(),
        s_bFocus = !0))
    }
    var t = "hidden";
    t in document ? document.addEventListener("visibilitychange", n) : (t = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", n) : (t = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", n) : (t = "msHidden")in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin"in document ? document.onfocusin = document.onfocusout = n : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n
}(),
screenfull.isEnabled)
    screenfull.on("change", function() {
        s_bFullscreen = screenfull.isFullscreen;
        s_oInterface !== null && s_oInterface.resetFullscreenBut();
        s_oMenu !== null && s_oMenu.resetFullscreenBut();
        s_oCardSelection !== null && s_oCardSelection.resetFullscreenBut()
    });
!function() {
    "use strict";
    function t(n) {
        return u(f(n), arguments)
    }
    function i(n, i) {
        return t.apply(null, [n].concat(i || []))
    }
    function u(i, r) {
        for (var y = 1, p = i.length, u, h = "", o, f, c, l, a, v, s, e = 0; e < p; e++)
            if (typeof i[e] == "string")
                h += i[e];
            else if (typeof i[e] == "object") {
                if (f = i[e],
                f.keys)
                    for (u = r[y],
                    o = 0; o < f.keys.length; o++) {
                        if (u == undefined)
                            throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"', f.keys[o], f.keys[o - 1]));
                        u = u[f.keys[o]]
                    }
                else
                    u = f.param_no ? r[f.param_no] : r[y++];
                if (n.not_type.test(f.type) && n.not_primitive.test(f.type) && u instanceof Function && (u = u()),
                n.numeric_arg.test(f.type) && typeof u != "number" && isNaN(u))
                    throw new TypeError(t("[sprintf] expecting number but found %T", u));
                n.number.test(f.type) && (v = u >= 0);
                switch (f.type) {
                case "b":
                    u = parseInt(u, 10).toString(2);
                    break;
                case "c":
                    u = String.fromCharCode(parseInt(u, 10));
                    break;
                case "d":
                case "i":
                    u = parseInt(u, 10);
                    break;
                case "j":
                    u = JSON.stringify(u, null, f.width ? parseInt(f.width) : 0);
                    break;
                case "e":
                    u = f.precision ? parseFloat(u).toExponential(f.precision) : parseFloat(u).toExponential();
                    break;
                case "f":
                    u = f.precision ? parseFloat(u).toFixed(f.precision) : parseFloat(u);
                    break;
                case "g":
                    u = f.precision ? String(Number(u.toPrecision(f.precision))) : parseFloat(u);
                    break;
                case "o":
                    u = (parseInt(u, 10) >>> 0).toString(8);
                    break;
                case "s":
                    u = String(u);
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "t":
                    u = String(!!u);
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "T":
                    u = Object.prototype.toString.call(u).slice(8, -1).toLowerCase();
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "u":
                    u = parseInt(u, 10) >>> 0;
                    break;
                case "v":
                    u = u.valueOf();
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "x":
                    u = (parseInt(u, 10) >>> 0).toString(16);
                    break;
                case "X":
                    u = (parseInt(u, 10) >>> 0).toString(16).toUpperCase()
                }
                n.json.test(f.type) ? h += u : (n.number.test(f.type) && (!v || f.sign) ? (s = v ? "+" : "-",
                u = u.toString().replace(n.sign, "")) : s = "",
                l = f.pad_char ? f.pad_char === "0" ? "0" : f.pad_char.charAt(1) : " ",
                a = f.width - (s + u).length,
                c = f.width ? a > 0 ? l.repeat(a) : "" : "",
                h += f.align ? s + u + c : l === "0" ? s + c + u : c + s + u)
            }
        return h
    }
    function f(t) {
        if (r[t])
            return r[t];
        for (var f = t, i, o = [], h = 0; f; ) {
            if ((i = n.text.exec(f)) !== null)
                o.push(i[0]);
            else if ((i = n.modulo.exec(f)) !== null)
                o.push("%");
            else if ((i = n.placeholder.exec(f)) !== null) {
                if (i[2]) {
                    h |= 1;
                    var s = []
                      , e = i[2]
                      , u = [];
                    if ((u = n.key.exec(e)) !== null)
                        for (s.push(u[1]); (e = e.substring(u[0].length)) !== ""; )
                            if ((u = n.key_access.exec(e)) !== null)
                                s.push(u[1]);
                            else if ((u = n.index_access.exec(e)) !== null)
                                s.push(u[1]);
                            else
                                throw new SyntaxError("[sprintf] failed to parse named argument key");
                    else
                        throw new SyntaxError("[sprintf] failed to parse named argument key");
                    i[2] = s
                } else
                    h |= 2;
                if (h === 3)
                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                o.push({
                    placeholder: i[0],
                    param_no: i[1],
                    keys: i[2],
                    sign: i[3],
                    pad_char: i[4],
                    align: i[5],
                    width: i[6],
                    precision: i[7],
                    type: i[8]
                })
            } else
                throw new SyntaxError("[sprintf] unexpected placeholder");
            f = f.substring(i[0].length)
        }
        return r[t] = o
    }
    var n = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }
      , r = Object.create(null);
    typeof exports != "undefined" && (exports.sprintf = t,
    exports.vsprintf = i);
    typeof window != "undefined" && (window.sprintf = t,
    window.vsprintf = i,
    typeof define == "function" && define.amd && define(function() {
        return {
            sprintf: t,
            vsprintf: i
        }
    }))
}();
var CANVAS_WIDTH = 1360, CANVAS_HEIGHT = 1360, EDGEBOARD_X = 360, EDGEBOARD_Y = 360, FPS = 30, FPS_TIME = 1e3 / FPS, DISABLE_SOUND_MOBILE = !1, PRIMARY_FONT = "sourcesanspro-black", STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ON_BUT_EXIT = 6, ON_BUT_RECHARGE = 7, ON_BUT_YES = 8, ON_BUT_NO = 9, ON_BUT_START = 10, ON_CARD_LINE_COMPLETED = 0, ON_CARD_NUM_CLICK = 1, ON_NUM_CLICK = 2, NUM_DIFFERENT_BALLS = 5, ANIMATION_SPEED, WIN_OCCURRENCE = [], BANK, START_PLAYER_MONEY, CARD_ROWS = 5, CARD_COLS = 5, STAR_COORD = {
    row: 2,
    col: 2
}, STAR_VALUE = -1, LABEL_EMPTY = "empty", LABEL_STAR = "star_empty", COIN_BETS, MIN_CARDS = 1, MAX_CARDS = 4, NUM_EXTRACTIONS = [35, 45, 55], NUM_NUMBERS = 75, PAYTABLE_INFO, BUTTON_Y_OFFSET = 3, AUTOFILL_ENABLED, TIME_EXTRACTION, TIME_EXTRACTION_MANUAL, CARD_POSITION = [];
CARD_POSITION.num_1 = [{
    x: 0,
    y: 0,
    scale: 1
}];
CARD_POSITION.num_2 = [{
    x: -320,
    y: 0,
    scale: 1
}, {
    x: 320,
    y: 0,
    scale: 1
}];
CARD_POSITION.num_3 = [{
    x: -320,
    y: -380,
    scale: 1
}, {
    x: 320,
    y: -380,
    scale: 1
}, {
    x: 0,
    y: 380,
    scale: 1
}];
CARD_POSITION.num_4 = [{
    x: -320,
    y: -380,
    scale: 1
}, {
    x: 320,
    y: -380,
    scale: 1
}, {
    x: -320,
    y: 380,
    scale: 1
}, {
    x: 320,
    y: 380,
    scale: 1
}];
BALL_COLORS = ["#fdb400", "#a3e21a", "#1ab9e2", "#be1ae0", "#ff3a3a"];
SOUNDTRACK_VOLUME_IN_GAME = .1;
var s_bMobile, s_bAudioActive = !0, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack, s_oCanvas, s_bFullscreen = !1;
s_oMenu = null;
s_oInterface = null;
var s_oCardSelection = null
  , s_iCurNumCards = 1
  , s_iCurNumToExtract = 0
  , s_iCurCoinBet = 0;
var WIN_TYPE_DIAGONAL = "diagonal"
  , WIN_TYPE_COLUMN = "column"
  , WIN_TYPE_ANY_ROW = "any_row"
  , WIN_TYPE_ANY_2_ROWS = "any_2_rows"
  , WIN_TYPE_ANY_3_ROWS = "any_3_rows"
  , WIN_TYPE_ANY_4_ROWS = "any_4_rows"
  , WIN_TYPE_BINGO = "bingo"
  , PAYTABLE_WIN_SCHEME = [];
PAYTABLE_WIN_SCHEME[WIN_TYPE_DIAGONAL] = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
PAYTABLE_WIN_SCHEME[WIN_TYPE_COLUMN] = [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0]];
PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_ROW] = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_2_ROWS] = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]];
PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_3_ROWS] = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]];
PAYTABLE_WIN_SCHEME[WIN_TYPE_ANY_4_ROWS] = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], ];
PAYTABLE_WIN_SCHEME[WIN_TYPE_BINGO] = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], ];
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var n = this._iFontSize; this._oText.getBounds().height > this._iHeight - this._iPaddingV * 2 || this._oText.getBounds().width > this._iWidth - this._iPaddingH * 2; )
                if (n--,
                this._oText.font = n + "px " + this._szFont,
                this._oText.lineHeight = Math.round(n * this._fLineHeightFactor),
                this.__updateY(),
                this.__verticalAlign(),
                n < 8)
                    break;
            this._iFontSize = n
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var n = this._oText.getBounds().height;
            this._oText.y -= (n - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
        case "middle":
            this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(n) {
        this._bDebug && (this._oDebugShape = new createjs.Shape,
        this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight),
        this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(n,this._iFontSize + "px " + this._szFont,this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - this._iPaddingH * 2 : null;
        switch (this._szAlign) {
        case "center":
            this._oText.x = this._x + this._iWidth / 2;
            break;
        case "left":
            this._oText.x = this._x + this._iPaddingH;
            break;
        case "right":
            this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(n)
    },
    setVerticalAlign: function(n) {
        this._bVerticalAlign = n
    },
    setOutline: function(n) {
        this._oText !== null && (this._oText.outline = n)
    },
    setShadow: function(n, t, i, r) {
        this._oText !== null && (this._oText.shadow = new createjs.Shadow(n,t,i,r))
    },
    setColor: function(n) {
        this._oText.color = n
    },
    setAlpha: function(n) {
        this._oText.alpha = n
    },
    setX: function(n) {
        this._x = n;
        this._oText.x = n
    },
    setY: function(n) {
        this._y = n;
        this._oText.y = n
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(n) {
        n === "" && (n = " ");
        this._oText === null && this.__createText(n);
        this._oText.text = n;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
const getClosestTop = () => {
    let n = window
      , t = !1;
    try {
        while (n.parent.document !== n.document)
            if (n.parent.document)
                n = n.parent;
            else {
                t = !0;
                break
            }
    } catch (i) {
        t = !0
    }
    return {
        topFrame: n,
        err: t
    }
}
  , getBestPageUrl = ({err: n, topFrame: t}) => {
    let i = "";
    if (n)
        try {
            try {
                i = window.top.location.href
            } catch (r) {
                let n = window.location.ancestorOrigins;
                i = n[n.length - 1]
            }
        } catch (r) {
            i = t.document.referrer
        }
    else
        i = t.location.href;
    return i
}
  , TOPFRAMEOBJ = getClosestTop()
  , PAGE_URL = getBestPageUrl(TOPFRAMEOBJ)
