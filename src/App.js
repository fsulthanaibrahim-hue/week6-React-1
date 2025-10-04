//********************************************DAY-1******************************************************/
//--------------------------------------Component--------------------------------------
// import React from "react";
// function App(){
//   return<h1>Welcome to My App</h1>
// }
// export default App; 


// import { useState } from "react";
// function App() {
//   return <h1>Hello React!</h1>
// }
// export default App;



//-------------------------------------JSX------------------------------------------------
// import React from "react";
// function App() {
//     const user = "Sulthana";
//     return (
//         <div>
//             <h1>Welcome to React!</h1>
//             <p>Hello, {user} 👋</p>
//         </div>
//     );
// }
// export default App;

import React from "react";
function App() {
    const user = "Fathima";
   return (
    <div>
        <h1>Hello {user}!</h1>
    </div>
   );
}
export default App;






// import React from "react";
// const food = "Pizzaa";
// function FavFood() {
//     return (
//         <div>
//             <h1><p>Udaifa's favourite food is {food} 😄</p></h1>
//         </div>
//     );
// }
// export default FavFood;


// import React from "react";
// function MathExample() {
//     const a = 5;
//     const b = 10;
//     return (
//         <div>
//             <h1>Math Example</h1>
//             <p>{a} + {b} = {a + b}</p>
//             <p>{a} * {b} = {a * b}</p>
//         </div>
//     );
// }
// export default MathExample;


// import React from "react";
// function Age() {
//     const age = 20;
//     return (
//         <div>
//             <h2><p>Next year my age will be {age + 1}</p></h2>
//         </div>
//     );
// }
// export default Age;



//------------------------------------functional components-----------------------------
// import React from "react";
// function Header() {
//   return <h1>Welcome to React App!</h1>;
// }
// export default Header;


// import React from "react";
// function Label() {
//   return <span> Label A </span>
// }
// export default Label;


// import React, { useState } from "react";
// function Greetings({ name }) {
//     return <h1>Hello, {name}!</h1>;
// }
// export default Greetings;



//----------------------------------class components-----------------------------------
// import React, {Component} from "react";
// class Header extends Component {
//   render() {
//     return <h1>Helloo, React!</h1>;
//   }
// }
// export default Header;



//----------------------------------Virtual DOM----------------------------------------
// import React, {useState} from "react";
// function Counter() {
//   const[count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }
// export default Counter;



// import React, { useState } from "react";
// function Counter() {
//   //state declare cheyyukaa
//   const[count, setCount] = useState(0);
// return (
//   <div style={{ textAlign: "center", marginTop: "50px", columnGap: "50px"}}>
//     <h1>Counter App</h1>
//     <p>Current count: {count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button> 
//     <button onClick={() => setCount(count -1)}>Decrement</button> 
//     <button onClick={() => setCount(0)}>Reset</button>
//   </div>
//   );
// }
// export default Counter;



// import { useState } from "react";
// function Greet() {
//   const [message, setMessage] = useState("Helloo!");
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={() => setMessage("Welcome to React!")}>Change Message</button>
//     </div>
//   );
// }
// export default Greet;


//------------------------------------------Templating-----------------------------------
// import { useState } from "react";
// function App() {
//   const name = "John";
//   return <h1>Hello,{name}!</h1>;
// }
// export default App;
 


// import { useState } from "react";
// function App() {
//   const name = "Fathima";
//   const age = "20";
//   return <h1>Helloo, my name is {name}. I am {age} years old.</h1>
// }
// export default App;




//-------------------------------------class component(this is not imp bcz old model)------------------------------------
// import React from "react";
// class Label extends React.Component{
//   render() {
//     return <span> Label KK</span>
//   }
// }
// export default Label;

// import React, {Component} from "react";
// class Header extends Component {
//   render() {
//     return <h1>Helloo, React!</h1>;
//   }
// }
// export default Header;



//********************************************DAY-2******************************************************/

//------------------------------------------useState---------------------------------------
//              //========Counter App=======
// import React, { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }
// export default Counter;



// import React, { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0)

//     return (
//         <div style={{margin: "50px"}}>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increase</button><br/><br/>
//             <button onClick={() => setCount(count - 1)}>Decrease</button><br/><br/>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }
// export default Counter;



// import React, { useState } from "react";
// function Counter() {
//     const[count, setCount] = useState(5)
//     const[input, setInput] = useState("")
//     const updateValue = ()=>setCount(input)
//     return (
//         <div>
//             <h2>count: {count}</h2>
//             <input
//             type="number"
//             count={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter a count"
//             />
//             <button onClick={updateValue}>Change</button>
//         </div>
//     );
// }
// export default Counter;


//             //========Text Input with useState==========
// import React, { useState } from "react";
// function TextInput() {
//     const [text, setText] = useState("");
//    return (
//     <div>
//         <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         />
//         <p>You typed: {text}</p>
//     </div>
//    );
// }
// export default TextInput;



//---------------------------------------useEffect---------------------------------------
             //=========Run when state change============
// import React, { useState, useEffect } from "react";
// function Message() {
//     const[count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Component rendered / count updated");
//     }, [count]);

//     return (
//         <div>
//             <p>You Clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>Click</button>
//         </div>
//     );
// }
// export default Message;

           //========Runs on every render===========
// import React, { useState, useEffect } from "react";
// function Message() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         console.log("component rendered / count updated");
//     },[count]);

//     return (
//         <div>
//             <i><h2><p>You Clicked {count} times.</p></h2></i>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }
// export default Message;

         
            //=======Runs only once=========
// import React, { useEffect } from "react";    
// function Example2() {
//     useEffect(() => {
//         console.log("Component mounded - run only once");
//     }, []);
//     return <h1>Hello World</h1>;
// }
// export default Example2;



//-------------------------------------------useRef--------------------------------------
                  //======Accessing DOM========
// import React, { useRef } from "react";
// function FocusInput() {
//     const inputRef = useRef(null);

//    const focusInput = () => {
//     inputRef.current.focus();
//    };

//    return (
//     <div>
//         <input ref={inputRef} type="text" />
//         <button onClick={focusInput}>Focus Input</button>
//     </div>
//    );
// }
// export default FocusInput;


// import React, { useRef } from "react";
// function InputFocus() {
//     const inputRef = useRef(null);

//     function handleFocus() {
//         inputRef.current.focus();
//     }
//     return (
//         <div>
//             <input type="text" ref={inputRef} />
//             <button onClick={handleFocus}>Focus Input</button>
//         </div>
//     );
// }
// export default InputFocus;


//            //============Storing values without re-render===============
// import React, { useState, useRef } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);
//     const renderCount = useRef(0);
//     renderCount.current = renderCount.current + 1;

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <p>Component rendered {renderCount.current} times</p>
//         </div>
//     );
// }
// export default Counter;



//-------------------------------------------props------------------------------------------
// function Welcome(props) {
//     return  <h1>Hello I am {props.name}!.</h1>;
// }
// function App() {
//     return (
//         <div>
//             <Welcome name="Fathima" />
//         </div>
//     );
// }
// export default App; 


// function Welcome(props) {
//     return <h1>Hello {props.name}</h1>
// }
// function App() {
//     return <Welcome name="Udaifa" />;
// }
// export default App;



//-------------------------------------State----------------------------------------------
// import React, { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h3>Count = {count}</h3>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//         </div>
//     );
// }
// export default Counter;



//-------------------------------------conditional rendering---------------------------------
//               //=========eg:- if-else method==========
// function Greetings(props) {
//     if (props.isLoggedIn) {
//         return <h1>Welcome Back!</h1>;
//     } else {
//         return <h1>Please Login</h1>;
//     }
// }
// function App() {
//     return <Greetings isLoggedIn={true} />;
// } 
// export default App;


// import React from "react";
// function Profile() {
//     const [loggedin, setLoggedIn] = React.useState(true);
//    return (
//     <div>
//         {
//             loggedin?<h1>Welcome Sulthana</h1>
//             :<h1>Welcome Guest</h1>
//         }
//     </div>
//    )
// }
// export default Profile;



//                 //=========Ternary operator(? :)==============
// function Greetings(props) {
//     return (
//         <h1>
//             {props.isLoggedIn ? "Welcome Back!" : "Please Login"}
//         </h1>
//     );
// }
// function App() {
//     return <Greetings isLoggedIn={false} />
// }
// export default App;


//                 //=============using && operator=============
// function Message(props) {
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {props.showMessage && <p>You have new notifications</p>}
//         </div>
//     );
// }
// function App() {
//     return <Message showMessage={true} />;   
// }
// export default App;



//----------------------------------------List and Keys--------------------------------------
//             //========List========
// function NameList() {
//     const name = ["Ali", "Fathima"];
//     return (
//         <ul>
//             {name.map((n)=> (
//                 <li>{n}</li>
//             ))}
//         </ul>
//     );
// }
// export default NameList;


               //=======list with keys=======
// function NameList() {
//     const names = ["Hasna", "Wafa"];
//     return (
//         <ul>
//             {names.map((n, index) => (
//                 <li key={index}>{n}</li>
//             ))}
//         </ul>
//     );
// }
// export default NameList;



//----------------------------------------Event Handling---------------------------------------
//              //=======Button click==========
// import React from "react";
// function ClickExample() {
//     function handleClick() {
//         alert("Button clicked");
//     }
// return (
//     <div>
//         <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
// export default ClickExample;


               //========Passing function with Arrow=========
// function ArrowExample() {
//     const handleClick = () => {
//         console.log("Clicked!");        
//     };
//     return <button onClick={handleClick}>Click Here</button>
// }
// export default ArrowExample;


//              //===========imput change event==============
// import React, {useState } from "react";
// function InputExample() {
//     const [text, setText] = useState("");

//         function handleChange(event) {
//             setText(event.target.value);
//         }
//         return (
//             <div>
//                 <input type="text" onChange={handleChange} />
//                 <p>You typed: {text}</p>
//             </div>
//         );
// }
// export default InputExample;



//----------------------------------Multiple ways of fetching events------------------------------
//              //========Inline function=========
// function InlineExample() {
//     return (
//         <button onClick={() => alert("Button clicked!")}>Click Inline</button>
//     );
// }
// export default InlineExample;


//                  //=========Seperate function========
// function SeperateExample() {
//      function handleClick() {
//        alert("Handled with separate  function!");
//     }
//     return (
//         <button onClick={handleClick}>
//             Click separate
//         </button>
//     );
// }
// export default SeperateExample;


//                   //=========Arrow function as Handler===========
// function ArrowExample() {
//     const handleClick = () => {
//         alert("Arrow function handler!");
//     };
//     return (
//         <button onClick={handleClick}>
//             Click Arrow
//         </button>
//     );
// }
// export default ArrowExample;


//               //===========Passing arguments in Event handler==========
// function ArgumentExample() {
//     function handleClick(name) {
//         alert("Hello " + name);
//     }
//     return (
//         <div>
//             <button onClick={() => handleClick("Sulthana")}>
//                 Greet Me
//             </button>
//         </div>
//     );
// }
// export default ArgumentExample;



//************************************************DAY-3***********************************************/
//-------------------------------------Previous state in useState ----------------------------
//           //==========Counter with Previous state=============
// import React, { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);
//    function increaseByTwo() {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//    } 
//    return (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={increaseByTwo}>Increase by 2</button>
//     </div>
//    );
// }
// export default Counter;


//            //===========Toggle State=========
// import React, { useState } from "react";
// function Toggle() {
//     const [isOn, setIsOn] = useState(false);
//    function toggleHandler()  {
//     setIsOn((prev) => !prev);
//    }
//    return (
//     <div>
//         <p>Light is {isOn ? "ON" : "OF"}</p>
//         <button onClick={toggleHandler}>Toggle</button>
//     </div>
//    ); 
// }
// export default Toggle;


//--------------------------------------Form Validation------------------------------------
//          //=========Simple required field==========
// import React, { useState } from "react";
// function SimpleForm() {
//     const [name, setName] = useState("");
//     const [error, setError] = useState("");
//    function handleSubmit(e) {
//     e.preventDefault();
//     if (name.trim() === "") {
//         setError("Name is required!");
//     }else {
//         setError("");
//         alert("Form Submitted successfully!");
//     }
//    } 
//    return (
//     <form onSubmit={handleSubmit}>
//         <input
//            type="text"
//            placeholder="Enter your name"
//            value={name}
//            onChange={(e) => setName(e.target.value)}
//            />
//            <br />
//            {error && <p style={{color: "red"}}>{error}</p>}
//            <button type="submit">submit</button>
//     </form>
//    );
// }
// export default SimpleForm;


//             //=========Email + Password validation=========
// import React, { useState } from "react";
// function LoginForm() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});
//   function handleSubmit(e) {
//     e.preventDefault();
//     let tempErrors = {};
//   if(!email.includes("@")) {
//     tempErrors.password = "Password must be at least 6 characters!";
//   }
//   setErrors(tempErrors);
//     if(Object.keys(tempErrors).length === 0) {
//         alert("Login successfull");
//      }
//    }
//    return (
//     <form onSubmit={handleSubmit}>
//         <div>
//             <input
//               type="text"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//         </div>
//         <div>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               />
//               {errors.password && (
//                 <p style={{ color: "red" }}>{errors.password}</p>
//               )}
//         </div>
//         <button type="submit">Login</button>
//     </form>
//    );
// }
// export default LoginForm;


//---------------------------------------CSS Styling in React--------------------------------------
//             //=========Inline Styling=========
// function InlineStyle() {
//     return (
//         <h1 style={{ color: "blue", fontSize: "30px"}}>
//             Hello Inline Styling
//         </h1>
//     );
// }
// export default InlineStyle;


//                //========Dynamic Styling===========
// import React, { useState } from "react";
// function DynamicStyle() {
//     const [isActive, setIsActive] = useState(false);
//     return (
//         <button
//           style={{
//             backgroundColor: isActive ? "green" : "red",
//             color: "white",
//             padding: "10px",
//           }}
//           onClick={() => setIsActive(!isActive)}
//           >
//             {isActive ? "Active" : "Inactive"}
//           </button>
//     );
// }
// export default DynamicStyle;


//--------------------------------------------React Bootstrap---------------------------------
// import React from "react";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// function App() {
//     return (
//         <div style={{textAlign: "center", marginTop: "50px"}}>
//             <h2>React Bootstrap Example</h2>
//             <Button variant="primary">Primary Button</Button>
//             <Button variant="success" style={{ marginLeft: "10px"}}>Success Button</Button>
//         </div>
//     );
// }
// export default App;


//----------------------------------------Mini_Project----------------------------------
// import React, { useState } from "react";
// function App() {
//     const [darkMode, setDarkMode] = useState(false);
//    const toggleTheme = () => {
//     setDarkMode((prevMode) => !prevMode);
//    };
//    const appStyle = {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     backgroundColor: darkMode ? "#333" : "#fff",
//     color: darkMode ? "#fff" : "#000",       
//    };
//    return (
//     <div style={appStyle}>
//         <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
//         <button onClick={toggleTheme}>Switch Theme</button>
//     </div>
//    );
// }
// export default App;



//*********************************************DAY-4**************************************************/
//-------------------------------------------Strict mode--------------------------------------
// import React, { useEffect } from "react";
// function Test() {
//     useEffect(() => {
//         console.log("useEffect ran!");
//     }, []);
//     return <h1>Hello StrictMode</h1>;
// }
// export default Test;  


//-----------------------------------------Component Composition------------------------------
//             //========simple composition==========
// import React from "react";
// function Header() {
//     return <h1>Welcome to My Website</h1>;
// }
// function Footer() {
//     return <p>© 2025 My Website</p>;
// }
// function App() {
//     return (
//         <div>
//             <Header />
//             <p>This is the main content of the page.</p>
//             <Footer />
//         </div>
//     );
// }
// export default App;


//          //=========passing components as children============
// function Card(props) {
//     return (
//         <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
//             {props.children}
//         </div>
//     );
// }
// function App() {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is inside the Card.</p>
//             </Card>
//             <Card>
//                 <button>Click Me</button>
//             </Card>
//         </div>
//     );
// }
// export default App;


//          //=======Nested Components=========
// function Button({ text }) {
//     return <button>{text}</button>;
// }
// function Toolbar() {
//     return (
//         <div>
//             <Button text="Login" />
//             <Button text="Signup" />
//         </div>
//     );
// }
// function App() {
//     return (
//         <div>
//             <h1>My App</h1>
//             <Toolbar />
//         </div>
//     );
// }
// export default App;


//---------------------------------------------Mini_project-------------------------------------------
// import React,{ useState, useEffect } from "react";
// function App() {
//     const [quotes, setQuotes] = useState([]);
//    useEffect(() => {
//     fetch("https://dummyjson.com/quotes")
//     .then((res) => res.json())
//     .then((data) => {
//         setQuotes(data.quotes.slice(0, 10));
//     })
//     .catch((err) => console.log("Error:" err));
//    }, []);
//    return (
//     <div>
//         <h2>Quotes</h2>
//         {quotes.map((quote) => (
//             <h1 key={quote.id}>{quote.quote}</h1>
//         ))}
//     </div>
//    ); 
// }
// export default App



//*********************************************DAY-5******************************************************/
//--------------------------------Todo List App-------------------------------------
// import React, {useState } from "react";
// function App() {
//     const [task, setTask] = useState("");
//     const [tasks, setTasks] = useState([]);
//    const addTask = () => {
//     if(task.trim() !== "") {
//         setTasks([...tasks, task]);
//         setTask("");
//      }
//    };
//    const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//    };
//    return (
//     <div className="min-h-screen bg-gray-100">
//         {/* Navbar */}
//         <nav className="bg-blue-600 p-4 text-white">
//             <h1 className="text-2xl font-bold">Todo App</h1>
//         </nav>
//         {/* Main Content */}
//         <div className="p-6 max-w-md mx-auto">
//             {/* Input and Button */}
//             <div className="flex gap-2 mb-4">
//               <input
//                 type="text"
//                 value={task}
//                 onChange={(e) => setTask(e.target.value)}
//                 placeholder="Enter task"
//                 className="flex-1 border rounded-lg px-3 py-2"
//                 />
//               <button
//                 onClick={addTask}
//                 className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//                 >
//                     Add Task
//                 </button>
//             </div>
//             {/* Tasks List */}
//             <ul className="space-y-2">
//                 {tasks.map((t, index) => (
//                   <li
//                     key={index}
//                     className="flex justify-between items-center bg-white shadow p-3 rounded-lg"
//                     >
//                         <span>{t}</span>
//                         <button
//                         onClick={() => deleteTask(index)}
//                         className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </div>
//    );
// }
// export default App;












