import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export function nicknameToEmail(nickname) {
  return `${nickname.toLowerCase()}@raymarines.local`;
}

export function isStaff(userData) {
  return userData && (
    userData.role === "owner" ||
    userData.role === "super_admin" ||
    userData.role === "admin" ||
    userData.role === "scorer"
  );
}

export function isAdmin(userData) {
  return userData && (
    userData.role === "owner" ||
    userData.role === "super_admin" ||
    userData.role === "admin"
  );
}


export function isOwner(userData) {
  return userData && (
    userData.role === "owner" ||
    userData.role === "super_admin"
  );
}

export function checkLogin(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      location.href = "login.html";
      return;
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      alert("회원 정보가 없습니다.");
      await signOut(auth);
      location.href = "login.html";
      return;
    }

    const userData = userDoc.data();

    if (!userData.approved) {
      await signOut(auth);
      location.href = "pending.html";
      return;
    }

    callback(user, userData);
  });
}

export async function logout() {
  await signOut(auth);
  location.href = "login.html";
}
