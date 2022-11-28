import useDocTitle from "../../hooks/useDocTitle";

const Blog = () => {
  useDocTitle("Blog");
  const data = [
    {
      id: 1,
      question:
        "What are the different ways to manage a state in a React application?",
      answer:
        "There are four main types of state you need to properly manage in your React apps.Local state, Global state, Server state, URL state. Local state is most often managed in React using the useState hook. useReducer is another option that can be used for either local or global state. Global state is data we manage across multiple components. UseContext, Zustand, Jotai, and Recoil are used to manage it. Server state is managed my useEffect.",
    },
    {
      id: 2,
      question: "How does prototypical inheritance work?",
      answer:
        "Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.",
    },
    {
      id: 3,
      question: "What is a unit test? Why should we write unit tests?",
      answer:
        "Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.",
    },
    {
      id: 4,
      question: "React vs. Angular vs. Vue?",
      answer:
        "Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries.",
    },
  ];

  return (
    <div>
      <h1 className="header-style">Blog</h1>
      <div className="inner-width mx-auto mb-20 space-y-4">
        {data.map((blog) => (
          <details key={blog.id} className="group">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
              <h2 className="font-medium text-gray-900">{blog.question}</h2>

              <svg
                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              {blog.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Blog;
