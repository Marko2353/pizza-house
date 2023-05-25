// "use client";
// import { collection, getDocs } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { db } from "../firebase";

// export default function fetchStatic() {
//   const [staticData, setStaticData] = useState<{ [x: string]: any }[]>([]);

//   const dbInstance = collection(db, "static");

//   const getStatic = () => {
//     getDocs(dbInstance).then((data) => {
//       setStaticData(
//         data.docs.map((item) => {
//           return { ...item.data() };
//         })
//       );
//     });
//   };

//   useEffect(() => {
//     getStatic();
//   }, []);

//   return { staticData };
// }
