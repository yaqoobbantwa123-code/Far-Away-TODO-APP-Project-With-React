# ✈️ Far Away — Packing List

A modern and interactive **React Packing List application** built to practice React fundamentals such as components, state management, props, event handling, array methods, conditional rendering, and dynamic UI updates.

The application allows users to add travel items, set quantities, mark items as packed, delete individual items, sort the packing list, and clear the complete list.

---

## 🚀 Live Demo

> Add your deployed project link here.

🔗 **Live Demo:** [Far Away Packing List](#)

---

## 📸 Preview

> Add your project screenshot here.

![Far Away Packing List Preview](./public/preview.png)

---

## ✨ Features

- 🧳 Add travel items to the packing list
- 🔢 Select item quantity from 1–10
- ☑️ Mark items as packed or unpacked
- ❌ Delete individual items
- 🧹 Clear the entire packing list
- 🔤 Sort items by description
- 📋 Sort items by input order
- 📦 Sort items by packed status
- 📊 Automatically calculate packing statistics
- 📈 Display the percentage of packed items
- ⚡ Dynamic UI updates using React state
- 📱 Responsive design for different screen sizes

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Vite**
- **React Hooks**
- **Array Methods**
  - `map()`
  - `filter()`
  - `sort()`
  - `Array.from()`

---

## 📂 Project Structure

```text
far-away-packing-list/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Logo.jsx
│   │   ├── Form.jsx
│   │   ├── PackingList.jsx
│   │   └── Stats.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md

🧩 Components
1. Logo

Responsible for displaying the main application branding and title.

🏝️ FAR AWAY 🧳
2. Form

The Form component allows users to:

Select item quantity
Enter the item description
Add a new item to the packing list

It uses React state to keep track of the current input values.

3. PackingList

The PackingList component displays all added items.

Users can:

Mark an item as packed
Delete an item
Sort items
Clear the complete list
4. Stats

The Stats component displays useful packing information:

Total number of items
Number of packed items
Percentage of completed packing

Example:

🧳 You have 6 items on your list,
and you already packed 3 (50%)
🧠 React Concepts Practiced

This project focuses on several important React concepts.

useState

Used to manage the packing list and form values.

const [items, setItems] = useState([]);
Props

Data and functions are passed between parent and child components.

<Form onAddItem={handleAddItem} />
<PackingList
  items={items}
  onDeleteItem={handleDeleteItem}
  onToggleItem={handleToggleItem}
/>
Event Handling

The project uses events such as:

onChange
onClick
onSubmit

to respond to user interactions.

Array Methods

Several JavaScript array methods are used throughout the project.

map()

Used to render packing items.

items.map((item) => ...)
filter()

Used to delete items and count packed items.

items.filter((item) => item.packed)
sort()

Used to arrange items according to the selected sorting option.

sortedItems.sort(...)
Array.from()

Used to generate quantity options.

Array.from({ length: 10 }, (_, i) => i + 1)
📊 Packing Percentage Logic

The application automatically calculates the percentage of packed items.

The formula is:

Packed Items ÷ Total Items × 100

For example:

Total Items = 10
Packed Items = 7

7 ÷ 10 × 100 = 70%

The percentage is rounded using:

Math.round()

If there are no items, the percentage remains:

0%
🔄 Application Flow
User enters item
        ↓
Form component
        ↓
handleAddItem()
        ↓
App.jsx updates items state
        ↓
PackingList receives updated items
        ↓
User can pack / delete / sort items
        ↓
Stats receives updated items
        ↓
Packing statistics update automatically
🎯 Learning Objectives

This project was built to strengthen practical understanding of:

React component architecture
Parent-to-child data flow
Passing functions through props
State management with useState
Controlled form inputs
Event handling
Rendering lists with map()
Updating arrays without directly mutating state
Conditional logic
Sorting and filtering arrays
Dynamic calculations
Responsive UI development
⚙️ Installation & Setup
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
2. Navigate to the project
cd far-away-packing-list
3. Install dependencies
npm install
4. Start the development server
npm run dev
5. Open the local development URL

Vite will provide a local URL similar to:

http://localhost:5173
📦 Build for Production

To create a production build:

npm run build

To preview the production build:

npm run preview
📱 Responsive Design

The application is designed to work across different screen sizes, including:

💻 Desktop
💻 Laptop
📱 Tablet
📱 Mobile

Responsive CSS media queries are used to improve the layout on smaller screens.

🔮 Future Improvements

Possible future improvements include:

💾 Save packing items using Local Storage
🌙 Add Dark/Light theme support
✏️ Edit existing items
🔍 Search packing items
🗂️ Add item categories
🔔 Add notifications
📊 Add advanced packing statistics
☁️ Connect the application to a backend
👨‍💻 Developer

Shamir Yaqoob

MERN Stack Developer — Aspiring / Learning

Currently building projects and strengthening skills in modern web development and the MERN ecosystem.

⭐ Acknowledgements

This project was created as part of my React learning journey to practice component-based development, state management, props, event handling, and JavaScript array methods.