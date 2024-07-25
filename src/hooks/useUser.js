import { collection, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { firebaseDB } from "../components/firebase/firebase";
import { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const useUser = () => {
  const { login, id, token } = useSelector((state) => state.user);
  const userRef = collection(firebaseDB, "users");
  const userQuery = query(userRef, where("id", "==", id));

  const [user, loading, error] = useCollectionData(userQuery);


  return { isUser: !!id, id, login, token, user, loading, error };
};
