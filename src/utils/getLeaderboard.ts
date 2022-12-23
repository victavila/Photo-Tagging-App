import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const getLeaderboard = async () => {
  const querySnapshot = await getDocs(collection(db, "leaderboard"));
  let leaderboard: any[] = [];
  querySnapshot.forEach((doc) => {
    leaderboard.push(doc.data());
  });
  const firstTen = leaderboard.sort((a, b) => a.time - b.time).slice(0, 10);
  return firstTen;
};

export default getLeaderboard;