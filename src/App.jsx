import { useState, useEffect } from "react";
import Header from "./component/Header.jsx";
import Card from "./component/Card.jsx";
import Service from "./component/Service.jsx";
import About from "./component/About.jsx";
import Blog from "./component/Blog.jsx";
import Footer from "./component/Footer.jsx";
import blog1 from "./assets/img/2.png";

import {
    Laptop,
    Smartphone,
    Bot,
    Database
} from "lucide-react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = isDarkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900";
    }, [isDarkMode]);

    return (
        <>
            <Header
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />

            <Card />

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 max-[740px]:p-4">

           <Service
                icon={Laptop}
               title="Web Development"
                description="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.."
            />

            <Service
            icon={Smartphone}
            title="Mobile Development"
             description="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
        />

    <Service
        icon={Bot}
        title="AI Solutions"
        description="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
    />

    <Service
        icon={Database}
        title="Software Development"
        description="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
    />

</div>

<About />


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">

    <Blog
        image={blog1}
        category="Web Development"
        title="How to Build a Modern Website"
        description="Learn the basics of building a responsive and modern website."
        date="October 1, 2026"
    />

    <Blog
        image={blog1}
        category="JavaScript"
        title="Understanding JavaScript"
        description="A beginner-friendly guide to understanding JavaScript."
        date="September 28, 2026"
    />

    <Blog
        image={blog1}
        category="React"
        title="Getting Started with React"
        description="Learn how React components and props work together."
        date="September 25, 2026"
    />

    <Blog
        image={blog1}
        category="Technology"
        title="The Future of AI"
        description="Discover how artificial intelligence is changing businesses."
        date="September 20, 2026"
    />

</div>
<Footer/>
        </>
    );
}

export default App;