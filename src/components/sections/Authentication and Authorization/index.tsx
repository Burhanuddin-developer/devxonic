'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
export default function AuthenticationandAuthorization() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const sliderImages = [
    {
      src: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/female-informatic-engineer-working-inside-server-r-A7JSN9A-1024x683.jpg.webp',
      alt: 'Team working on performance',
    },
    {
      src: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/modern-technologies-Z8ZQBFL-1024x683.jpg.webp',
      alt: 'Data center performance testing',
    },
    {
      src: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/programmers-cooperating-at-information-technology-2AGVCUN-1024x683.jpg.webp',
      alt: 'Team working on performance',
    },
    {
      src: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/employees-working-collaboration-and-strategy-on-c-Y68B8FQ-1024x683.jpg.webp',
      alt: 'Data center performance testing',
    },
  ];
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
                {`const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// Secret key
const SECRET_KEY = 'your-secret-key';

app.post('/login', (req, res) => {
  const user = authenticateUser(req.body);  // Custom function to verify credentials
  
  if (user) {
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).send('Invalid token');
      }
      req.userId = decoded.userId;
      res.send('Protected content');
    });
  } else {
    res.status(401).send('No token provided');
  }
});  `}
              </code>
            </pre>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. OAuth and Social Logins
            </h2>
            <p className="text-gray-300">
              OAuth allows users to authenticate through third-party services like Google, Facebook, or GitHub without needing to create new credentials for your application. This is commonly referred to as “social login.”
              <br />
              Using OAuth 2.0, you can redirect users to the provider’s login page. Once authenticated, the provider sends a token that your server can use to identify the user and grant access.
            </p>
          </section>

          <section>
            <h5 className="text-md font-semibold">
              Steps for OAuth 2.0:
            </h5>
            <ol className="list-decimal pl-6 text-gray-300 space-y-1">
              <li>The user clicks on a “Login with Google” button (for example).</li>
              <li>The user is redirected to the Google login page.</li>
              <li>
                After logging in, Google sends a token back to your server.
              </li>
              <li>
                Your server uses the token to request user information and authenticate them.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-md font-semibold">Pros:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Simplifies the login process for users.
              </li>
              <li>No need to manage sensitive information like passwords.</li>
              <li>
                Reduces friction, encouraging higher user registration rates.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-md font-semibold">Cons:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Reliant on third-party services.
              </li>
              <li>Requires integration with OAuth providers and proper handling of tokens.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl bold">Example Using passport.js with Google OAuth:</h3>
            <pre className=" p-4 rounded-md overflow-auto text-sm">
              <code>
                {`const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (token, tokenSecret, profile, done) => {
  // Save user information here
  return done(null, profile);
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
); `}
              </code>
            </pre>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Role-Based Authorization
            </h2>
            <p className="text-gray-300">
              Once users are authenticated, you need to manage what they can and cannot do based on their roles. For example, you might have roles like admin, editor, and user, each with different access levels.
            </p>
            <h3 className="text-2xl bold">Example of Role-Based Authorization:</h3>
            <pre className=" p-4 rounded-md overflow-auto text-sm">
              <code>
                {`function authorize(roles = []) {
  return (req, res, next) => {
    const user = req.user;  // Assume user info is added to req after authentication
    
    if (roles.length && !roles.includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
}

app.get('/admin', authorize(['admin']), (req, res) => {
  res.send('Admin content');
});`}
              </code>
            </pre>
          </section>
          <section>
            <h5 className="text-md font-semibold">
              Best Practices for Authentication and Authorization in Node.js
            </h5>
            <ol className="list-decimal pl-6 text-gray-300 space-y-1">
              <li> <strong>Use HTTPS:</strong>Always secure your Node.js application with SSL/TLS to protect user data.</li>
              <li><strong>Encrypt Sensitive Data:</strong>Never store passwords in plaintext. Use hashing algorithms like bcrypt for password storage.</li>
              <li>
                <strong>Session Security:</strong>If using sessions, implement proper session management practices, such as limiting session lifetimes and regenerating session IDs on login.
              </li>
              <li>
                <strong>Use Security Libraries:</strong> Libraries like Helmet and csurf help protect against common web vulnerabilities like CSRF and XSS.
              </li>
              <li>
                <strong>Use Security Libraries:</strong> Libraries like Helmet and csurf help protect against common web vulnerabilities like CSRF and XSS.
              </li>
            </ol>
            <Slider {...settings}>
              {sliderImages.map((image, index) => (
                <div key={index} className="px-5 border-none shadow-none outline-none">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-2xl border-none shadow-none outline-none"
                  />
                </div>

              ))}
            </Slider>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-6">Conclusion</h2>
            <p className="text-gray-300 mb-8">
              Handling authentication and authorization in Node.js is a fundamental aspect of securing your applications. Whether you’re building session-based login systems, using JWT for stateless authentication, or integrating OAuth for social logins, Node.js provides powerful tools and libraries to streamline these processes.
              <br /><br />
              By understanding the differences between various authentication methods and following best practices, you can ensure that your Node.js applications remain secure, scalable, and user-friendly.
            </p>
          </section>

          {/* Post Tags and Share Row */}
          <div className="border-t border-gray-700 pt-8 flex justify-between text-sm text-gray-400">
            <span><strong>Post Tags :</strong></span>
            <span><strong>Share :</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
