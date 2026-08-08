# WEB_DEVLOPMENT
# Development

A collection of web development projects and learning materials covering HTML, CSS, and frontend fundamentals.

## 📁 Project Structure

```
Development/
├── index.html          # Portfolio homepage
├── DP1.html            # Personal bio page with navigation
├── form.html           # HTML forms reference guide
├── table.html          # HTML tables reference guide
├── practice.html       # Practice page with navigation anchors
├── assets/
│   ├── css/site.css        # Shared stylesheet for every page
│   └── js/components.js    # Shared markup helpers (custom elements)
└── README.md           # This file
```

## 📄 File Descriptions

### **index.html**
Portfolio homepage showcasing your frontend journey.
- Navigation bar with links
- Personal introduction
- Skills section (C, C++, Python, HTML, CSS, Git)
- Link to GitHub projects

### **DP1.html**
Personal bio page with navigation and form.
- About section with introduction
- Hobbies list (Cricket, Photography, Traveling, Reading)
- Skills list (HTML, CSS, JavaScript, Python)
- Contact links (LinkedIn, GitHub, Instagram)
- Bio form (Name, Gender, Age inputs)

### **form.html**
Comprehensive HTML form reference with extensive documentation.
- **Basic Login Form** - Email & password with submit buttons
- **All Input Types** - Complete showcase including:
  - Text inputs (text, email, password, search, url, tel)
  - Numeric inputs (number, range)
  - Date & Time inputs (date, time, datetime-local, month, week)
  - Choice inputs (checkbox, radio buttons)
  - Select dropdowns (single, multiple, optgroup)
  - File upload and color picker
  - Hidden and readonly fields
  - Textarea and buttons

Each element includes detailed inline comments explaining purpose and attributes.

### **table.html**
HTML tables reference guide with advanced features.
- **Table 1** - Student records with `rowspan` demonstration
- **Table 2** - Rowspan + colspan combined examples
- **Table 3** - Employee salary table with `tfoot` (table footer)
- **Table 4** - Complex geographic/population table with nested rowspans

Includes `thead`, `tbody`, and `tfoot` sections. Well-commented code explaining merging cells vertically and horizontally.

### **practice.html**
Practice page demonstrating navigation anchors and internal linking.
- Navigation menu
- Jump links to sections
- "Go to Top" functionality
- Multiple sections (programming, articles)

### **assets/css/site.css**
Single stylesheet shared by every page: navbar, card, skills, form rows and the
`.data-table` class that replaces the repeated `border="1"` attribute in `table.html`.

### **assets/js/components.js**
Shared markup helpers implemented as custom elements, so the repeated navbar,
contact footer, "back to top" link and label+input blocks live in one place.
No build step — just open the HTML files in a browser.

| Element | Replaces |
|---------|----------|
| `<site-nav logo="Divyesh" links="HOME=#, About=#about">` | hand-written `<nav class="navbar">` blocks |
| `<site-footer>` | duplicated LinkedIn/GitHub/Instagram link lists |
| `<back-to-top>` | "back to top" / "go up" anchors |
| `<form-field label="Name:" type="text" name="name">` | `<label>` + `<input>` + `<br><br>` triples |
| `<choice-group legend="Gender" type="radio" name="gender" options="Male=male, Female=female">` | fieldsets of radios/checkboxes with duplicated ids |

`form-field` also supports `type="select"` (with `options` and `prompt`) and
`type="textarea"`, and passes attributes like `placeholder`, `required`, `min`,
`max`, `rows` and `accept` through to the control.

`form.html`, `form2.html` and `table.html` deliberately keep their raw,
heavily-commented markup — they are reference guides for the underlying HTML.

## 🎯 Learning Focus

This project covers:
- ✅ Semantic HTML structure
- ✅ Form elements and validation
- ✅ Table layouts and cell merging
- ✅ Navigation and internal linking
- ✅ Best practices with detailed comments

## 🚀 How to Use

1. Clone or download this repository
2. Open any `.html` file in your web browser
3. Read the inline comments to understand each element
4. Modify and experiment with different attributes
5. Use as a reference for your own projects

## 📚 Key Concepts Covered

| Topic | File |
|-------|------|
| Forms & Inputs | `form.html` |
| Tables & Merging | `table.html` |
| Navigation | `DP1.html`, `practice.html` |
| Portfolio Layout | `index.html` |
| Semantic HTML | All files |

## 👤 Author

**Divyesh Pant**  
B.Tech CSE Student at Graphic Era Deemed to be University

### Connect
- 🔗 [LinkedIn](https://www.linkedin.com/in/divyesh-pant-69911a325/)
- 🐙 [GitHub](https://github.com/divyeshpant1103-bit)
- 📷 [Instagram](https://www.instagram.com/divyesh_pant/)

## 📝 Notes

- All files contain extensive inline documentation
- Perfect for beginners learning HTML fundamentals
- Use as a reference guide during development

---

**Last updated:** 6 June 2026
