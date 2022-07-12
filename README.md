# journal
## About the app
Simple demo app which allows to add and delete journal entries. 
The aim of this app is to try out Ionic franework with Angular along with QuillJs. 
The app is hosted on Firebase and using Firestore to store journal entries.

### Prerequisites
Angular CLI: 14.0.4
Node: 16.15.1
Package Manager: npm 8.12.1

### Installation
1. Install the dependencies
   ```sh
   npm install
   ```
2. Run the service
   ```sh
   ng serve
   ```
   
### Specification
#### **Part 1:**

- [x] Start a new project using Ionic with Angular.
- [x] Create a GitHub repo and share it with us.
- [x] Deploy your app to a fresh firebase project
- [x] Use QuillJS as the core editor and include any functionality in the toolbar that you think is important for this app
- [x] Design using Ionic components

#### **Part 2:**
- [x] Integrate firebase with your project using AngularFire
- [x] Allow entries to be saved to a Firestore collection.
- [x] Display a list of saved entries somewhere on the screen 
- [x] Make it possible to view individual entries in the modal
- [ ] Make it possible to edit an entry
- [x] Make it possible to delete an ntry
- [ ] Store previous versions of the entry in a subcollection on the entry document whenever an edit is saved
- [ ] When you view an entry, have an option to select and view a previous version of the entry.
- [x] Ensure your data objects are typed.
- [x] Consider implementing RXJS behaviour subjects for state management where necessary.
- [x] UX / UI
- [ ] Authentication (email/password or google sign-in) and the necessary security rules and route guards to make the app and entries only accessible by authenticated users. Any authenticated user can see/modify any entry created by any user. There is no need to segregate entries by user.
