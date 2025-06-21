export default function AuthenticationandAuthorization() {
  return (
    <div className="min-h-screen bg-[#0b0b17] text-white py-12 md:px-20 page-section">
      <div className="max-w-5xl mx-auto section-container">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            In today’s world of web and mobile applications, ensuring secure
            access to resources is a critical requirement. Developers must
            handle authentication (verifying the identity of users) and
            authorization (determining what resources a user can access)
            effectively to maintain the integrity and security of their systems.
            Node.js, with its non-blocking, event-driven architecture, is a
            popular platform for building scalable web applications, and
            handling secure user authentication is a key part of that.
            <br />
            In this article, we’ll dive into how authentication and
            authorization work in Node.js, exploring different methods and best
            practices to help you build secure, reliable applications.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is Authentication?</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Authentication is the process of verifying a user’s identity. It
            typically involves users providing credentials (such as a username
            and password) and the server confirming whether those credentials
            are valid.
            <br />
            There are multiple ways to implement authentication in Node.js, with
            common methods including:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-300 mt-3">
            <li>
              <strong>Session-based Authentication:</strong>
            </li>
            <li>
              <strong>Token-based Authentication (e.g., JWT)</strong>
            </li>
            <li>
              <strong>OAuth and Social Logins</strong>
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is Authorization?</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Authorization defines what actions an authenticated user is allowed
            to perform within an application. After a user’s identity is
            verified, the application must determine which resources or
            functionalities the user can access.
            <br />
            Authorization typically comes into play after authentication, once
            the user’s identity is known. Examples of authorization include:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-300 mt-3">
            <li>
              <strong>Allowing users to view only their own data</strong>
            </li>
            <li>
              <strong>
                Restricting admin-only actions to users with specific roles
              </strong>
            </li>
          </ul>
        </section>
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">
            Popular Authentication Methods in Node.js
          </h1>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Session-Based Authentication
            </h2>
            <p className="text-gray-300">
              Session-based authentication is one of the oldest and most widely
              used methods. After a user successfully logs in, the server
              creates a session and stores the session ID on the server. The
              session ID is then sent to the client via cookies.
            </p>
          </section>

          <section>
            <h5 className="text-md font-semibold">
              Steps for Session-Based Authentication:
            </h5>
            <ol className="list-decimal pl-6 text-gray-300 space-y-1">
              <li>User submits credentials (username, password).</li>
              <li>Server verifies the credentials.</li>
              <li>
                If valid, a session is created, and the session ID is stored in
                the server.
              </li>
              <li>The session ID is sent to the client as a cookie.</li>
              <li>
                For future requests, the client sends the session ID, and the
                server uses it to identify the user.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-md font-semibold">Pros:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Well-established and supported by many libraries, such as{" "}
                <code className="text-white">express-session</code>.
              </li>
              <li>
                Server-side session management allows for easy session
                invalidation.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-md font-semibold">Cons:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scalability issues with server-side session storage.</li>
              <li>Not ideal for stateless architectures or APIs.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl bold">Example Using express-session:</h3>
            <pre className=" p-4 rounded-md overflow-auto text-sm">
              <code>
                {`const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true in production
}));

app.post('/login', (req, res) => {
  // Authenticate user here
  req.session.userId = user.id; // Save userId in session
  res.send('Logged in!');
}); `}
              </code>
            </pre>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Token-Based Authentication (JWT)
            </h2>
            <p className="text-gray-300">
              JWT (JSON Web Tokens) is a stateless authentication method that
              has become very popular for modern web applications, especially
              single-page applications (SPAs) and APIs. With JWT, the server
              generates a token (usually signed) that contains a payload with
              user information. This token is then sent to the client, which
              stores it (typically in localStorage or sessionStorage).
              <br />
              For subsequent requests, the client sends the token in the
              Authorization header. The server then verifies the token to
              authenticate the user.
            </p>
          </section>

          <section>
            <h5 className="text-md font-semibold">
              Steps for JWT Authentication:
            </h5>
            <ol className="list-decimal pl-6 text-gray-300 space-y-1">
              <li>User submits credentials.</li>
              <li>Server verifies the credentials.</li>
              <li>
                If valid, the server generates a JWT containing user
                information.
              </li>
              <li>
                The client stores the JWT and sends it in the Authorization
                header for future requests.
              </li>
              <li>The server verifies the JWT and authenticates the user.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-md font-semibold">Pros:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                JWTs are stateless, so no session management is required on the
                server.
              </li>
              <li>Ideal for APIs and microservices.</li>
              <li>
                Easy to scale since the server doesn’t need to store session
                data.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-md font-semibold">Cons:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Once issued, the server cannot easily invalidate a JWT unless
                additional mechanisms (e.g., blacklists) are used.
              </li>
              <li>Sensitive to client-side storage vulnerabilities.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl bold">Example Using jsonwebtoken:  </h3>
            <pre className=" p-4 rounded-md overflow-auto text-sm">
              <code>
                {`const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true in production
}));

app.post('/login', (req, res) => {
  // Authenticate user here
  req.session.userId = user.id; // Save userId in session
  res.send('Logged in!');
}); `}
              </code>
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
}
