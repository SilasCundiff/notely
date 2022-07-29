import React from "react";
import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Note app</title>
      </Head>
      <div className="flex text-2xl h-screen w-full p-6">
        <div className="h-full w-96 mr-auto ">
          Well that was easy
          <ol>
            <li>1. pet cat 🐱‍👤</li>
            <li>2. take out trash ✔</li>
            <li>
              3. Sell this app for a million dollars even though it only took 20
              mins to make 💰
            </li>
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
