import React from "react"

const HomePage: React.FC = () => {
 return (
  <div className="grid justify-center min-h-dvh">
    <div className="mt-12">
    <h2 className="text-4xl font-bold mb-7 text-center">Welcome to my Shopping Cart App!</h2>

    <div className="px-4">
    <p>This is a practice project from the <a href="https://www.theodinproject.com/paths/full-stack-javascript" className="underline hover:text-blue-700" target="_blank" rel="noopener noreferrer ">Odin Project</a> full stack Javascript path. This project was a learning ground for the following technologies:</p>
    <ul className="m-6 grid gap-4 list-disc">

      <li>
        I used <span className="font-bold">Next.js</span> as the framework. The <span className="font-bold">App Router</span> for file based routing was much easier than routing in React.
      </li>

      <li>
        This is the first project I styled with <span className="font-bold">Tailwind CSS</span>.
      </li>

      <li>
        I used a <span className="font-bold">Cart Context</span> to reduce props drilling and make the code less cumbersome to write and follow.
      </li>

      <li>
        I integrated the <span className="font-bold">React Hot Toast</span> library to enhance user experince with a notification to provide visual confirmation when an item is added to the cart. 
      </li>
    </ul>
    <p>Overall, I am proud of what I was able to accomplish. My skills with the aforementioned technologies imporved significantly throughout this journey.</p>
    </div>

    </div>

  </div>
 )
}

export default HomePage