<!-- firebase-config.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDVUEZ3ZVmH4ld7LVnEq_L368wEJpEs-l8",
    authDomain: "zeepaylater-93a94.firebaseapp.com",
    projectId: "zeepaylater-93a94",
    storageBucket: "zeepaylater-93a94.firebasestorage.app",
    messagingSenderId: "358065954807",
    appId: "1:358065954807:web:66619211fea82a4b2518f2",
    measurementId: "G-1XJKPF8X5C"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { auth, db };
</script>
