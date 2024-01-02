import React from 'react';

const Blogs = () => {
    return (
        <div className='m-8'>
            <div className='collapse collapse-plus bg-[#3bb77e] text-white mb-2'>
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium'>
                    Difference between javascript and nodejs
                </div>
                <div className='collapse-content mx-10'>
                    <ul>
                        <b className='text-lg underline'>Javascript:</b>
                        <li className='list-disc'>
                            <b>Client-Side Language:</b> JavaScript is primarily
                            used as a scripting language for web development on
                            the client-side. It runs within web browsers and is
                            used to create dynamic and interactive web pages.
                        </li>
                        <li className='list-disc'>
                            <b>Browser Interpretation:</b> Browsers interpret
                            and execute JavaScript code, allowing it to
                            manipulate the Document Object Model (DOM), handle
                            events, perform client-side validations, and make
                            asynchronous requests (AJAX) to the server.
                        </li>
                        <li className='list-disc '>
                            <b>Front-End Development:</b> JavaScript is crucial
                            for front-end development, enabling the creation of
                            engaging user interfaces and interactivity on
                            websites.
                        </li>
                        <br />
                        <b className='text-lg underline'>NodeJS:</b>
                        <li className='list-disc'>
                            <b>Server-Side JavaScript Runtime:</b> Node.js is a
                            runtime environment that allows the execution of
                            JavaScript code on the server-side.
                        </li>
                        <li className='list-disc'>
                            <b>Built on Chrome's V8 Engine:</b> Node.js is built
                            on the V8 JavaScript runtime, the same engine that
                            powers Google Chrome. It enables developers to write
                            server-side applications using JavaScript.
                        </li>
                        <li className='list-disc'>
                            <b>Event-Driven and Non-Blocking I/O:</b> Node.js is
                            known for its event-driven architecture, which makes
                            it well-suited for building scalable and efficient
                            applications. It uses non-blocking I/O operations,
                            allowing multiple operations to be executed without
                            waiting for each other, which can significantly
                            improve performance in certain scenarios.
                        </li>
                        <li className='list-disc'>
                            <b>Back-End Development:</b> Node.js is commonly
                            used for back-end development, powering server-side
                            applications, APIs, and handling server-side logic
                            for web applications.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='collapse collapse-plus bg-[#3bb77e] text-white mb-2'>
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium'>
                    When should you use nodejs and when should you use mongodb
                </div>
                <div className='collapse-content mx-10'>
                    <p>
                        Node.js and MongoDB serve different purposes in the
                        world of web development, often working together but
                        addressing distinct aspects of the application stack.
                    </p>
                    <br />
                    <ul>
                        <li className='list-disc'>
                            <b className='text-lg'>Node.js:</b> Use it when you
                            need to create server-side applications or APIs that
                            require real-time capabilities, asynchronous
                            handling, or event-driven architecture. Node.js is
                            particularly effective for building applications
                            where high concurrency and performance are
                            essential.
                        </li>
                        <li className='list-disc'>
                            <b className='text-lg'>MongoDB:</b> Use it when you
                            need a highly scalable database solution that can
                            handle large amounts of unstructured or
                            semi-structured data. It's beneficial for
                            applications that prioritize flexibility in schema
                            design and scalability, especially for projects
                            where rapid iteration or evolving data structures
                            are common.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='collapse collapse-plus bg-[#3bb77e] text-white mb-2'>
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium'>
                    Differences between sql and nosql databases.
                </div>
                <div className='collapse-content mx-10'>
                    <p>
                        SQL (Structured Query Language) and NoSQL (Not Only SQL)
                        are two different types of database management systems
                        (DBMS) with distinct characteristics. Here are some key
                        differences between them:
                    </p>
                    <br />
                    <ul>
                        <b className='text-lg underline'>1. Data Model:</b>
                        <li className='list-disc'>
                            <b>SQL: </b>
                            SQL databases use a structured data model with a
                            predefined schema. They rely on tables with fixed
                            columns and rows where data is stored in a
                            structured manner.
                        </li>
                        <li className='list-disc'>
                            <b>NoSQL: </b>
                            NoSQL databases support various data models,
                            including document-based, key-value pairs,
                            column-oriented, or graph-based structures. They are
                            schema-less or have a flexible schema, allowing for
                            more dynamic and unstructured data storage.
                        </li>
                        <br />
                        <b className='text-lg underline'>2. Schema:</b>
                        <li className='list-disc'>
                            <b>SQL: </b>
                            SQL databases require a predefined schema, which
                            defines the structure of the tables and the types of
                            data each column can hold. Changes to the schema
                            often require careful planning and may cause
                            downtime during migrations.
                        </li>

                        <li className='list-disc'>
                            <b>NoSQL: </b>
                            NoSQL: NoSQL databases often don't enforce a schema,
                            allowing more flexibility in accommodating diverse
                            data types and evolving data structures. This
                            flexibility makes it easier to adapt to changing
                            data requirements without downtime.
                        </li>
                        <br />
                        <b className='text-lg underline'>3. Examples:</b>
                        <li className='list-disc'>
                            <b>SQL: </b>
                            SQL: Examples of SQL databases include MySQL,
                            PostgreSQL, Oracle, SQL Server, and SQLite.
                        </li>
                        <li className='list-disc'>
                            <b>NoSQL: </b>
                            NoSQL: NoSQL databases include MongoDB
                            (document-based), Cassandra (column-oriented), Redis
                            (key-value store), Couchbase (document-based), and
                            Neo4j (graph database).
                        </li>
                    </ul>
                </div>
            </div>

            <div className='collapse collapse-plus bg-[#3bb77e] text-white mb-2'>
                <input type='radio' name='my-accordion' />
                <div className='collapse-title text-xl font-medium'>
                    What is the purpose of jwt and how does it work
                </div>
                <div className='collapse-content mx-10'>
                    <p>
                        JWT stands for JSON Web Token. Its purpose is to
                        securely transmit information between parties as a JSON
                        object. It's commonly used for authentication and
                        information exchange in web development. JWTs are widely
                        used due to their simplicity, flexibility, and ability
                        to maintain stateless communication between parties
                        while ensuring the security of transmitted data.
                    </p>
                    <br />
                    <ul>
                        <b className='text-lg underline'>Purpose:</b>
                        <li className='list-disc'>
                            <b>Authentication: </b>
                            After a user logs in, a JWT is often used to
                            securely transmit information about the user between
                            the client (like a browser) and the server. This
                            token contains information about the user's identity
                            and any other relevant data.
                        </li>
                        <li className='list-disc'>
                            <b>Information Exchange: </b>
                            JWTs can carry any JSON data, making them versatile
                            for exchanging information between different parties
                            in a secure and compact manner.
                        </li>
                        <br />
                        <b className='text-lg underline'>How it Works:</b>
                        <li className='list-disc'>
                            <b>Creation: </b>After a user logs in successfully,
                            the server generates a JWT containing information
                            about the user's session or identity.
                        </li>
                        <li className='list-disc'>
                            <b>Transmission: </b>This JWT is sent to the client
                            and typically stored (often in local storage or
                            cookies) for subsequent requests to the server.
                        </li>
                        <li className='list-disc'>
                            <b>Verification: </b>When the client makes a request
                            to a protected resource (like an API endpoint), it
                            sends the JWT along with the request.
                        </li>
                        <li className='list-disc'>
                            <b>Validation: </b>The server verifies the received
                            JWT. It checks the token's signature to ensure it's
                            valid and hasn’t been tampered with. This involves
                            decoding the JWT, verifying its signature using a
                            secret key that only the server knows, and checking
                            the token's expiration time, audience, issuer, etc.
                        </li>
                        <li className='list-disc'>
                            <b>Usage: </b>Upon successful validation, the server
                            uses the information contained in the JWT to
                            authorize the client's request, allowing access to
                            the requested resource or performing the specified
                            action.
                        </li>
                        <li className='list-disc'>
                            <b>Expiration: </b>JWTs often have an expiration
                            time (specified in the token itself) to ensure
                            security. Once expired, they are no longer
                            considered valid and require the user to
                            re-authenticate.
                        </li>
                        <b className='text-lg underline'>Purpose:</b>
                        <p>
                            JWTs consist of three parts separated by dots
                            (header.payload.signature):
                        </p>
                        <li className='list-disc'>
                            <b>Payload: </b>Contains the claims or data being
                            transmitted. These claims can include user
                            information, metadata, or any data relevant to the
                            application.
                        </li>
                        <li className='list-disc'>
                            <b>Signature: </b>Created by combining the encoded
                            header, encoded payload, and a secret key. It's used
                            to verify that the sender of the JWT is who it says
                            it is and to ensure that the message wasn’t changed
                            along the way.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
