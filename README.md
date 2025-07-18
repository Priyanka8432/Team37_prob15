# Team37
---

## 🚀 *Novera*

### 🧩 Category

**Developer Tools**

### 🛠 Tech Stack

* **Frontend**: React
* **Styling**: Tailwind CSS
* **Routing**: React Router
* **File Upload (optional)**: Drag & Drop with image preview
* **Hosting**: StackBlitz (dev), Vercel or Netlify (prod)

---

### 📌 Problem Statement

**Design a Landing Page Builder Specifically for Internal Product Launches**

Companies often need quick, professional-looking landing pages to announce new features, internal demos, stakeholder updates, and beta testing opportunities — all without involving designers or devops for every update. This tool solves that.

---

### ✅ Solution Overview

This tool is a lightweight **drag-and-drop landing page builder** designed for **internal launches** within teams or organizations.

🔧 Key Features:

* 🧱 **Template-based builder**: Start from pre-defined launch templates like:

  * Beta Testing
  * Internal Demo
  * Stakeholder Update
  * Feature Release
  * Maintenance Notification
  * Alpha Launch
  * Blank Template (fully customizable)

* 📦 **Drag & Drop Upload**: Attach product images or logos for quick previews.

* 👤 **Login Simulation**: Mimics user login for a personalized experience (can be extended to real auth).

* ⚡ **Fast Setup**: Built for teams to create pages in minutes without waiting on design or deployment pipelines.

---

### 📂 Project Structure

```
src/
│
├── App.js                  # Main router and logic
├── FakeLogin.js            # Simple user login simulation
├── DragDropUpload.js       # Drag-and-drop file uploader
├── Template.js             # Template selector UI
├── TemplateLooker.js       # Exports all template page components
└── ...
```

---

### 🧪 How It Works

1. **User logs in** via a fake login screen (can simulate any identity).
2. **User uploads** a product image or logo via drag-and-drop.
3. **User selects a template**, which routes to a launch-ready landing page.
4. Optionally, **user can choose a blank template** and customize from scratch.

---

### 🌐 Use Cases

* Internal testing launches
* Stakeholder reports
* New feature rollouts
* Maintenance downtime notices
* Early access program onboarding

---

### 🎯 Future Enhancements (Ideas)

* ✅ Real-time markdown editing
* ✅ Add custom form builder blocks
* 🔐 Integration with company SSO
* 🧠 Template recommendation based on launch type
* 📊 Analytics tracking for views and feedback

---

### 📦 Deployment Tip

For easy deployment:

* Export as a GitHub repo from StackBlitz
* Deploy on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)
* Set the root path as `/` and use `react-router-dom` with fallback routes

---

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Priyanka8432/Team37_prob15)
