# 🍽 Stylish Meals App

## 📌 Project Overview
Stylish Meals App is a modern and stylish food menu application that displays a variety of meals. Users can browse different meal options, view their details, and navigate through a well-structured UI.

## 🛠 Technologies Used
- React.js (with TypeScript)
- Tailwind CSS for styling
- React Router for navigation
- JSON for meal data management

## 🚀 Features
- Display meals in a responsive grid layout.
- Click on any meal card to navigate to its details page.
- Stylish UI with hover effects.
- Uses `useNavigate` for seamless navigation.

## 📂 Project Structure
```
/src
│── components
│   ├── Card.tsx   # Meal Card component
│── pages
│   ├── HomePage.tsx   # Displays all meals
│   ├── MealDetails.tsx   # Displays meal details
│── data
│   ├── meals.json   # Contains meal data
│── App.tsx   # Main component with routing
│── index.tsx   # Entry point
```

## 🖥 Setup & Run
### 1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/stylish-meals-app.git
cd stylish-meals-app
```

### 2️⃣ Install dependencies:
```sh
yarn install  # or npm install
```

### 3️⃣ Start the application:
```sh
yarn start  # or npm start
```

## 🏷 Routes
| Path          | Description |
|--------------|-------------|
| `/`          | Displays all meal cards |
| `/meals/:id` | Displays details of the selected meal |

## 📸 Screenshots
![Meal Cards](screenshot1.png)
![Meal Details](screenshot2.png)

## 📌 Future Improvements
- Add search and filtering functionality.
- Implement a backend for dynamic meal updates.
- Improve animations and transitions.

## 📜 License
This project is open-source and available under the MIT License.

---
🔗 **Created by [Your Name](https://github.com/yourusername)**

