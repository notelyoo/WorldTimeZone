# 🌍 WorldTimeZone – Simple & Stylish Timezone Clock 🕰️

Welcome to **WorldTimeZone**, a minimal and responsive world clock app built in vanilla HTML/CSS/JS.  
It allows users to **browse timezones**, **view live clocks**, and **switch between themes** — all with smooth UI interactions.

---

## 🌟 Features

- 🕒 **Real-Time Clock** – Displays the current time and date for a selected city
- 🌐 **18+ Timezones** – Easily switch between major global timezones
- 🎌 **Emoji Flags** – Country flags with city names for better clarity
- 🌓 **Theme Switcher** – Toggle between light and dark themes (with emoji buttons)
- 📱 **Responsive Design** – Mobile-friendly and sleek layout
- ⚡ **Pure Frontend** – No frameworks, no libraries — 100% vanilla JS

---

## 🛠️ Technologies Used

- **HTML5** – Semantic layout structure
- **CSS3** – Flexbox, transitions, dark/light mode
- **JavaScript (ES6)** – Timezone switching, DOM interaction, real-time updates
- **Google Fonts** – [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

---

## 📂 Project Structure

```
WorldTimeZone/
│
├── index.html        → Main HTML structure
├── style.css         → All styling and themes
├── script.js         → Clock logic, city menu, theme switching
├── favicon.ico       → Page favicon
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/NotElyoo/WorldTimeZone.git
cd WorldTimeZone
```

### 2️⃣ Open in Browser

Just open `index.html` with your favorite browser:

```sh
open index.html
```

✅ No build step or dependencies required.

---

## 💡 How It Works

- When the page loads, it defaults to **Paris (GMT+1)**.
- You can open the dropdown to select a city — the time updates instantly.
- Theme icons (🌞/🌙) let you toggle between light/dark modes.
- The clock updates every second using `setInterval()` and adjusts according to the selected timezone via `Intl.DateTimeFormat`.

---

## ✨ Demo

> A live version will be available soon (or feel free to host it yourself via GitHub Pages!)

---

## 📢 Contributing

Feel free to fork the project, suggest improvements or create pull requests!

```bash
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
```

---

## 📜 License

This project is licensed under **custom terms written by the author**:

- ✅ You are free to view, use, and modify the code for **non-commercial purposes**.
- ✅ Attribution is **required** — please credit the author by name or link.
- ❌ Commercial use of this code is **not permitted** without explicit permission.

Please refer to the `LICENSE` file for full details.

---

## 📬 Contact

📧 Email: contact@miyeon.fr  
🐦 Twitter: [@NotElyoo](https://x.com/NotElyoo)

---

## 📌 Future Improvements (Ideas 💡)

✅ Add analog clock mode  
✅ Add option to save preferred city in localStorage  
✅ Support more cities / timezones  
✅ Localized language support (FR/EN)  
✅ Animations on theme change