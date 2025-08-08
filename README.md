## Price Prediction App

A full-stack web application that predicts prices using a machine learning model.  
The backend is built with Node.js and Python (Flask), and the frontend is built with React.js.

---
## How It Works

1. The user enters input data in the React form.
2. Data is sent to the Python backend API.
3. Backend processes data with the ML model.
4. Predicted price is returned and displayed in the UI.

---

 ## Technologies Used

* **Backend:** Node.js, Express.js, Python, Flask, scikit-learn, pandas, numpy
* **Frontend:** React.js, Tailwindcss, motions
* **ML:** Regression models (customizable in `model.py`)

---


## Features

- **Machine Learning Backend** – Model built and served in Python.
- **React Frontend** – Interactive and responsive UI for users to input data and get predictions.
- **REST API** – Communication between frontend and backend over HTTP.
- **Cross-platform** – Works locally or can be deployed to cloud hosting.



## Prerequisites

- **Python 3.7+**
- **Node.js** & **npm**

---

## model-api Setup

1. Create and activate a virtual environment (recommended):

```bash
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
````

2. Install dependencies

```bash
pip install -r requirements.txt
```

3. Run the model-api

```bash
python app.py
```

The backend will run on:
`http://localhost:5000` (default for Flask).

---
## backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
---




## Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
---

