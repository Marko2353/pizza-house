"use client";
import useFetchPizzas from "../hooks/fetchDescriptions";
import React from "react";

export default function Home() {
  const { descriptions, loading, error } = fetchDescriptions();
  console.log(descriptions);

  if (descriptions === null || descriptions === undefined) {
    return <div>{loading}</div>;
  }
  return (
    <main>
      {Object.keys(descriptions).map((i) => {
        return (
          <>
            <h1>{descriptions[i]}</h1>
          </>
        );
      })}
    </main>
  );
}
