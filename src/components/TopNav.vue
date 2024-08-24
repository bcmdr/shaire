<!-- src/components/TopNav.vue -->
<template>
  <nav class="top-nav">
    <div class="nav-content">
      <h1>AI Creation Platform</h1>
      <div v-if="username">Welcome, {{ username }}!</div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "TopNav",
  setup() {
    const username = ref("");

    // Listen for authentication state changes
    onMounted(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // User is signed in, fetch the username from Firestore
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            username.value = userSnap.data().username;
          } else {
            console.log("No such document!");
          }
        } else {
          // User is signed out
          username.value = "";
        }
      });
    });

    return {
      username,
    };
  },
};
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
