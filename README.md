# bayer-test

Hackethon - HCL

**Backend**

* MongoDB
* Express JS

**Frontend**

* React js
* Typescript
* RTK
* BootStrap

**Test Cases**

1. Jest Library

**Things to be worked on Module**

1. Staff list Management
2. Shift scheduler
3. Search and filter

**Tables**

### 1. Users Table

This is your base identity table for authentication & authorization.

Columns

* id (PK, UUID/int)
* full_name (string)
* email (unique)
* phone (unique)
* password_hash
* role (ENUM: admin, supervisor etc.)
* status (active / inactive / suspended)
* created_at
* updated_at


### 2. Doctors Table

Doctor-specific metadata.

Columns

* id (PK)
* user_id (FK → users.id)
* hospital_id (FK → hospitals.id)
* specialization (cardiology, neurology, etc.)
* license_number
* years_of_experience
* qualification (MBBS, MD, etc.)
* available_status (on-duty, off-duty, leave)
* consultation_fee (optional)
* created_at
* updated_at

### 3. Nurses Table

Nurse-specific info.

Columns

* id
* user_id (FK)
* hospital_id (FK)
* department (ICU, OT, general ward, etc.)
* license_number
* grade (junior nurse, senior nurse, head nurse)
* years_of_experience
* available_status
* created_at
* updated_at

### 4. Technicians Table

For lab technicians, radiographers, etc.

Columns

* id
* user_id (FK)
* hospital_id (FK)
* field (lab, x-ray, MRI, blood bank, pharmacy tech)
* certifications (optional JSON)
* license_number
* years_of_experience
* available_status
* created_at
* updated_at

### 5. Hospitals Table

Info to identify the hospital itself.

Columns

* id
* name
* registration_number
* address
* city
* state
* pincode
* contact_number
* email
* type (government, private, speciality)
* created_at
* updated_at

### 6. Shifts Table

This table defines shift blocks — applicable to doctors, nurses, technicians.

Columns

* id
* hospital_id (FK)
* staff_user_id (FK → users.id)
* role (doctor/nurse/technician)
* start_time
* end_time
* shift_type (morning, evening, night, on-call)
* status (scheduled, completed, cancelled)
* created_at
* updated_at


### B. Staff_Leaves Table

Tracks leave & time-off.

Columns

* id
* user_id
* hospital_id
* leave_type (sick, casual, etc.)
* start_date
* end_date
* status (approved/pending/rejected)

