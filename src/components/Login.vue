<template>
  <div>
    <h1>Welcome to AI Creation Platform</h1>
    <button @click="loginAnonymously">Continue as Guest</button>
    <div v-if="username">
      <p>
        Your random username is: <strong>{{ username }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebaseConfig";
import { signInAnonymously } from "firebase/auth";
import { generateUsername } from "../usernameGenerator";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "Login",
  data() {
    return {
      username: null,
    };
  },
  methods: {
    async loginAnonymously() {
      try {
        const userCredential = await signInAnonymously(auth);
        const user = userCredential.user;
        console.log("User signed in anonymously", user);

        // Generate a random username
        this.username = generateUsername(user.uid);
        console.log("Generated username:", this.username);

        // Save the username in Firestore
        await setDoc(doc(db, "users", user.uid), {
          username: this.username,
        });
        console.log("Username saved to Firestore");
      } catch (error) {
        console.error(
          "Error signing in anonymously or saving username:",
          error
        );
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
