
---

# **Parcel Lift – Parcel Delivery Frontend**

## **Live Demo:** [Parcel Lift](https://parcel-lift.netlify.app)

**Frontend Repository:** [GitHub Client](https://github.com/Arittro7/parcel_lift)

**Backend Repository:** [GitHub Backend](https://github.com/Arittro7/parcel-lift-a5)

**Backend API URL:** [Parcel Lift Backend](https://parcel-lift-backend.vercel.app/)

---

## **Project Overview**

*Parcel Lift* is a secure, role-based, and user-friendly frontend application for a Parcel Delivery System, built with **React.js**, **Redux Toolkit**, and **RTK Query**.

The app interacts with a REST API backend to enable **Senders**, **Receivers**, and **Admins** to perform parcel operations, manage records, and track shipments efficiently. The UI is fully responsive, clean, and modern using **Tailwind CSS**.

---

## 🌐 **Tech Stack**

**Frontend:**

* React.js + TypeScript
* Redux Toolkit & RTK Query (state management & API calls)
* Tailwind CSS (styling)
* React Hook Form + Zod (form handling & validation)
* Sonner / SweetAlert2 (notifications)

**Backend (API):**

* Node.js + Express
* MongoDB + Mongoose
* JWT + bcrypt (authentication & authorization)

---

# 🚀 Key Features
## **1. Public Pages**
- Home: Introductory overview of the service.
- About: Mission, vision, and team details.
- Contact: Inquiry form with simulated submission.
## **2. Authentication**
- JWT‑based login and registration.
- Role‑aware redirects (Sender, Receiver, Admin).
- Persistent login state across refreshes.
- Secure logout functionality.
## **3. Sender Dashboard**
- Create new parcel delivery requests.
- Cancel parcels (if not yet dispatched).
- View all created parcels with detailed status history.
## 4. **Receiver Dashboard**
- View parcels assigned to the receiver.
- Confirm successful deliveries.
- Access complete delivery history.
## 5. **Admin Dashboard**
- Manage users (block/unblock).
- Manage parcels (block/unblock, update delivery status).
- (Optional) Assign delivery personnel.
## 6. **Parcel Tracking**
- Unique tracking ID for every parcel.
- Search parcels by tracking ID (public or authenticated).
- Detailed timeline with status, timestamp, updatedBy, and notes.
## 7. **General Features**
- Role‑based navigation menus.
- Global error handling and loading indicators.
- Strong form validation (required fields, numeric checks, positive values).
- Pagination and advanced table filtering.
- Toast notifications for success/error feedback.
## 8. **Dashboard & Data Visualization**
- Overview Cards: Total, Delivered, In Transit, Pending/Cancelled.
- Charts: Bar and pie charts for parcel trends and delivery status.
- Parcel Table: Paginated, searchable, filterable with actions (View, Cancel, Confirm).
- Status Timeline: Visual history of parcel updates.
- Fully responsive and mobile‑friendly design.
---

## **UI/UX Considerations**

* Fully responsive design across devices.
* Consistent margins, spacing, and typography.
* Accessible color contrast for readability.
* Performance optimized via lazy-loading and skeleton loaders.
* Realistic data used instead of placeholders.

---

## **Setup Instructions**

1. **Clone Repository**

```bash
git clone https://github.com/Arittro7/parcel_lift.git
cd parcel_lift
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run Development Server**

```bash
npm run dev
```

4. **Build for Production**

```bash
npm run build
npm run preview
```

---

## **Credentials for Demo**

* **Admin:** `admin@parcel.com / Parcel#123`
* **Sender:** `sender@parcel.com / Sender#123`
* **Receiver:** `receiver@parcel.com / Receiver#123`


---

## Code Walk Through Video

**Code Explanation:** [Video](https://drive.google.com/file/d/1g1hz0PdElT9SW9k4tRwo6PyobqJOs2y6/view?usp=sharing)

---