import useDocTitle from "../../hooks/useDocTitle";

const Blog = () => {
  useDocTitle("Blog");
  const data = [
    {
      id: 1,
      question:
        "What are the different ways to manage a state in a React application?",
      answer:
        "SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data",
    },
    {
      id: 2,
      question: "How does prototypical inheritance work?",
      answer:
        "JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted",
    },
    {
      id: 3,
      question: "What is a unit test? Why should we write unit tests?",
      answer:
        "JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. NodeJs, on the other hand, is an interpreter or execution environment for the JavaScript programming language. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.  Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. ",
    },
    {
      id: 4,
      question: "React vs. Angular vs. Vue?",
      answer:
        "NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy. When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. ",
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
