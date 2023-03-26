import { Link } from 'react-router-dom'
import React from "react";
const Aboutt = () => {
    return (
        <>
        <div className='col-10 mx-auto'>
            <h1 className='text-center'> Welcome to about page </h1>
            <p>Welcome to our coding contest website, where students from our college can compete with each other and improve their programming skills. Our website is designed to enhance the competitive spirit among students and help them overcome their fear of competitive programming. <br />

                We have carefully designed our questions to be challenging yet solvable, and relevant to the skill level of the participants. We have a range of problems from easy to difficult, to cater to the different skill levels of the participants. Our questions are designed to not only test the technical knowledge of the participants, but also their problem-solving skills and creativity.
                <br />
                Participating in our contest is easy. Simply register on our website and create an account. Once you have an account, you can participate in any of our ongoing contests. You will have a set duration to solve the problems, and you can submit your solutions through our website. <br />

                Our website provides real-time feedback on the correctness and efficiency of the solutions submitted by the participants. This feedback helps participants to learn from their mistakes and improve their programming skills. <br />

                We believe that healthy competition is essential for improving one's skills and staying motivated. Therefore, we encourage all students to participate in our contests and challenge themselves to improve their programming skills. We also provide rewards and recognition to the winners and participants, which encourages more students to participate and enhances the competitive spirit.
                <br />
                In summary, our coding contest website is designed to help students from our college improve their programming skills, overcome their fear of competitive programming, and enhance their competitive spirit. We invite all students to participate in our contests and challenge themselves to become better programmers. <br />
            </p>
            </div>
            <Link exact to="/" style={{ cursor: 'pointer', textDecoration: 'none', marginLeft: 126 }}>Go to Home Page</Link>
        </>
    )
}
// function Aboutt(){
//     return(
//         <div>
//             <p>This is our About page</p>
//             {/* <Link to="/about" style={{ cursor: 'pointer' }}>About Us</Link> */}
//         </div>
//     )
// }
export default Aboutt