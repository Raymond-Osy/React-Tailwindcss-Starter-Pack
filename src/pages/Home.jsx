import React from "react";
import reactTailwind from "../assets/images/tailwind-react-webpack-config.jpg";

const HomePage = () => (
  <div class="max-w-sm mx-auto flex p-4 m-40 rounded overflow-hidden shadow-lg bg-white">
    <div class="px-6 py-4">
      <h1 class="font-bold text-xl mb-2 text-green-600 text-center">Welcome to React-Tailwindcss Starter Pack!</h1>
      <img src={reactTailwind} class="my-2" />
      <p class="text-gray-700 text-base">
        <strong>React-Tailwindcss</strong> is a simple starter pack that gets you up and running with you or your team's project real quick. You don't have to worry about setting up react or thailwind. This setup simply skips that process thereby making your life easier!
       </p>
    </div>
  </div>
);

export default HomePage;
