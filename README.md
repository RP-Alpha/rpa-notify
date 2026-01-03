# rpa-notify

A standalone, modern notification system using NUI.

## Features
- **Glassmorphism Design**: Clean, modern aesthetic.
- **Animations**: Smooth slide-in/out animations.
- **Queue System**: Handles multiple notifications gracefully.

## Installation
1. Ensure `rpa-lib` is started (optional, can run standalone).
2. Add `ensure rpa-notify` to your `server.cfg`.

## Usage
```lua
-- Client Event
TriggerEvent('rpa-notify:client:notify', "Message", "success")

-- Server Event
TriggerClientEvent('rpa-notify:client:notify', source, "Message", "error")
```

## Credits
- RP-Alpha Development Team

## License
MIT
