import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="custom-width mx-auto flex flex-col flex-wrap lg:justify-between py-10 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link
            to="/"
            className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 17.6l-2 -1.1v-2.5" />
              <path d="M4 10v-2.5l2 -1.1" />
              <path d="M10 4.1l2 -1.1l2 1.1" />
              <path d="M18 6.4l2 1.1v2.5" />
              <path d="M20 14v2.5l-2 1.12" />
              <path d="M14 19.9l-2 1.1l-2 -1.1" />
              <line x1="12" y1="12" x2="14" y2="10.9" />
              <line x1="18" y1="8.6" x2="20" y2="7.5" />
              <line x1="12" y1="12" x2="12" y2="14.5" />
              <line x1="12" y1="18.5" x2="12" y2="21" />
              <path d="M12 12l-2 -1.12" />
              <line x1="6" y1="8.6" x2="4" y2="7.5" />
            </svg>

            <span className="ml-3 text-xl">SWAP TUNE</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Swap your music instruments with ease.
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-between text-center md:mt-5 md:pl-20 md:text-left">
          <Link
            to="/home"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            All Products
          </Link>

          <Link
            to="/blog"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Blog
          </Link>

          <Link
            to="/login"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="custom-width mx-auto flex flex-col flex-wrap py-4  sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © 2022 Swap Tune —
            <a
              href="https://www.facebook.com/Abhiskg20"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @abhishek
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
