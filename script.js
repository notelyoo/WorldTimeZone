const themes = ["🎨", "🌑", "☀️"];
let currentTheme = "🎨";
const timezoneMap = {
    "Pacific/Pago_Pago": "GMT-11", 
    "Pacific/Honolulu": "GMT-10",
    "America/Vancouver": "GMT-8", 
    "America/Mexico_City": "GMT-6",
    "America/Argentina/Buenos_Aires": "GMT-3",
    "Europe/London": "GMT+0", 
    "Europe/Paris": "GMT+1",
    "Africa/Cairo": "GMT+2", 
    "Europe/Moscow": "GMT+3",
    "Asia/Dubai": "GMT+4", 
    "Asia/Karachi": "GMT+5",
    "Asia/Bangkok": "GMT+7", 
    "Asia/Shanghai": "GMT+8",
    "Asia/Seoul": "GMT+9", 
    "Australia/Sydney": "GMT+10",
    "Pacific/Fiji": "GMT+12",
    "Pacific/Apia": "GMT+13", 
    "Pacific/Kiritimati": "GMT+14"
};
let currentTimezone = "Europe/Paris";

function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString("fr-FR", { timeZone: currentTimezone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    document.getElementById('date').textContent = now.toLocaleDateString("fr-FR", { timeZone: currentTimezone, weekday: "long", day: "numeric", month: "long", year: "numeric" });
    document.getElementById('timezone').textContent = `(${timezoneMap[currentTimezone]})`;
    setTimeout(updateClock, 1000);
}

function updateClockForCity(timezone, timezoneLabel, element) {
    currentTimezone = timezone;
    document.querySelectorAll('.menu li').forEach(li => li.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selected-city').textContent = element.textContent;
    updateClock();
}

function switchTheme(selectedEmoji) {
    const newTheme = selectedEmoji.textContent;
    if (newTheme === currentTheme) return;
    currentTheme = newTheme;
    document.body.className = getThemeClass(newTheme);
    let nextThemes = themes.filter(theme => theme !== currentTheme);
    document.getElementById('theme-toggle').textContent = currentTheme;
    document.querySelectorAll('.theme-option')[0].textContent = nextThemes[0];
    document.querySelectorAll('.theme-option')[1].textContent = nextThemes[1];
}

function getThemeClass(theme) {
    return theme === "🌑" ? "dark-mode" : theme === "☀️" ? "light-mode" : "default-mode";
}

window.onload = () => {
    updateClock();
    document.getElementById('theme-toggle').textContent = currentTheme;
    document.querySelectorAll('.theme-option')[0].textContent = "🌑";
    document.querySelectorAll('.theme-option')[1].textContent = "☀️";

    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.menu-container').classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        const menuContainer = document.querySelector('.menu-container');
        if (!menuContainer.contains(event.target) && !document.querySelector('.menu-btn').contains(event.target)) {
            menuContainer.classList.remove('active');
        }
    });

    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.querySelector('.theme-switcher').classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!document.querySelector('.theme-switcher').contains(event.target)) {
            document.querySelector('.theme-switcher').classList.remove('active');
        }
    });
};