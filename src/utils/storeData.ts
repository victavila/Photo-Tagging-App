import { db } from "../firebase/firebase";
import { doc, setDoc} from "firebase/firestore";

const storeData = async (name: string, time: number) => {
  await setDoc(doc(db, "leaderboard", name), {
    name: name,
    time: time
  });
};

export default storeData;