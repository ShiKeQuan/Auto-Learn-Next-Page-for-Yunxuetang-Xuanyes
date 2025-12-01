## **🇺🇸 English Documentation**

A Tampermonkey user script designed for enterprise training platforms like **Yunxuetang** and **Xuanyes**.

It automatically detects the course countdown, clicks "Next Page" upon completion, handles anti-idle verification popups, and includes stability mechanisms like anti-double-click protection, enabling unattended automated learning.

### **✨ Key Features**

* **⏱️ Smart Countdown Detection**: Automatically identifies the "Remaining xx seconds" timer on the page and jumps to the next page when it reaches zero.  
* **🛡️ Anti-Idle Verification**: Automatically detects and clicks the "Continue Learning" popup to prevent the session from pausing due to inactivity.  
* **⏯️ Video Playback Detection**: For video courses, includes a timeout mechanism (waits for the countdown by default, but judges as completed if the countdown fails to load for a long time) to prevent getting stuck on video pages without timers.  
* **🚫 Anti-Repeat Click**: Built-in 10-second click cooldown to prevent skipping classes or page freezes caused by network lag and double clicks.  
* **⚡ Plain Text Page Support**: Automatically identifies and clicks the next page for plain text/PPT pages that do not have videos or countdowns.

### **🚀 Installation**

#### **1\. Install Browser Extension**

First, install a user script manager for your browser:

* **Chrome / Edge**: [Tampermonkey](https://www.tampermonkey.net/)  
* **Firefox**: [Greasemonkey](https://addons.mozilla.org/zh-CN/firefox/addon/greasemonkey/)

#### **2\. Install the Script**

1. Open the Tampermonkey dashboard and click **"Add a new script"**.  
2. Delete all default code in the editor.  
3. Copy and paste the full content of main.js (or your saved script code) into the editor.  
4. Press Ctrl \+ S to save.

### **⚙️ Supported Platforms**

The script matches the following domain rules by default (customizable in the script header):

* \*://\*.xuanyes.com/\*  
* \*://\*.yunxuetang.cn/\*

If your enterprise training platform uses a custom domain but is based on the Yunxuetang system, please add your domain to the // @match section in the script header.

### **🛠️ Version History**

* **v1.5**: Added anti-idle popup detection (auto-clicks "Continue Learning").  
* **v1.4**: Introduced "Timeout Release" mechanism to fix the issue where completed courses would get stuck.  
* **v1.3**: Added click cooldown lock (10s) to fix double-click bugs.  
* **v1.2**: Added video player detection to prevent skipping unloaded videos.  
* **v1.0**: Basic countdown detection and auto-jump functionality.

### **⚠️ Disclaimer**

1. **For Educational Use Only**: This script is for technical research and educational exchange only. **Do not use it for any commercial purposes.**  
2. **Compliance**: Please abide by the training regulations of your enterprise or school. Using automated scripts may violate the platform's terms of service. Users are solely responsible for any consequences (e.g., account suspension, clearing of learning records).  
3. **No Warranty**: The author makes no guarantees regarding the stability, security, or effectiveness of the script in specific scenarios.

If you find this script helpful, please give it a ⭐️ Star\!
