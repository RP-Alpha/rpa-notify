# rpa-notify

<div align="center">

![GitHub Release](https://img.shields.io/github/v/release/RP-Alpha/rpa-notify?style=for-the-badge&logo=github&color=blue)
![GitHub commits](https://img.shields.io/github/commits-since/RP-Alpha/rpa-notify/latest?style=for-the-badge&logo=git&color=green)
![License](https://img.shields.io/github/license/RP-Alpha/rpa-notify?style=for-the-badge&color=orange)
![Downloads](https://img.shields.io/github/downloads/RP-Alpha/rpa-notify/total?style=for-the-badge&logo=github&color=purple)

**Modern Glassmorphism Notification System**

</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean glassmorphism aesthetic
- 🎬 **Smooth Animations** - Slide-in/out transitions
- 📚 **Queue System** - Handles multiple notifications gracefully
- 🔧 **Standalone** - Works independently or via rpa-lib

---

## 📥 Installation

1. Download the [latest release](https://github.com/RP-Alpha/rpa-notify/releases/latest)
2. Extract to your `resources` folder
3. Add to `server.cfg`:
   ```cfg
   ensure rpa-notify
   ```

---

## 📚 Usage

```lua
-- Client
TriggerEvent('rpa-notify:client:notify', "Message", "success")

-- Server
TriggerClientEvent('rpa-notify:client:notify', source, "Message", "error")
```

**Types**: `success`, `error`, `info`, `warning`

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/RP-Alpha">RP-Alpha</a></sub>
</div>
