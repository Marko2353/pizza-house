import { doc, collection, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../firebase";

export async function CronJob() {
  const docRef = doc(db, "pizzas", "pizza");
  const docFetched = await getDoc(docRef);
  const pizzas = docFetched.data();
  const numb = Math.floor(Math.random() * 10);
  const dailyPizzaName = pizzas?.title[numb];
  const dailyPizzaDesc = pizzas?.info[numb];

  return { dailyPizzaName, dailyPizzaDesc };
}
