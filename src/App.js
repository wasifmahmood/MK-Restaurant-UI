import React from "react";
import "./App.css";
import Home from "./pages/homepage/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;

// import React, { useState, useRef } from "react";
// import { Link } from "react-scroll";

// const App = () => {
//   const sections = ["section1", "section2", "section3"];
//   const [activeSection, setActiveSection] = useState(sections[0]);
//   const sectionRefs = useRef(sections.map(() => React.createRef()));

//   const handleSetActive = (sectionId) => {
//     setActiveSection(sectionId);
//   };

//   const Nav = () => {
//     return (
//       <nav>
//         <ul>
//           {sections.map((section, index) => (
//             <li key={section}>
//               <Link
//                 activeClass="active"
//                 to={section}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 onSetActive={handleSetActive}
//                 containerId="scroll-container"
//               >
//                 {`Section ${index + 1}`}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };

//   return (
//     <>
//       <Nav />
//       <div id="scroll-container">
//         <div ref={sectionRefs.current[0]} id="section1" className="section">
//           <h2>Section 1</h2>
//           <p>This is section 1.</p>
//         </div>
//         <div ref={sectionRefs.current[1]} id="section2" className="section">
//           <h2>Section 2</h2>
//           <p>This is section 2.</p>
//         </div>
//         <div ref={sectionRefs.current[2]} id="section3" className="section">
//           <h2>Section 3</h2>
//           <p>This is section 3.</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
