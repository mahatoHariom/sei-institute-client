import React from "react";
import { motion } from "framer-motion";
// import { Button } from "../ui/button";

// Flattened courses array, combining all items from each category
const allCourses = [
  { title: "English", description: "Learn spoken and written English." },
  { title: "French", description: "Basic and advanced French courses." },
  {
    title: "Python Programming",
    description: "Beginner to advanced Python programming.",
  },
  { title: "JavaScript", description: "Learn JavaScript for web development." },
  {
    title: "Mathematics",
    description: "Brush up on high school math for college readiness.",
  },
  { title: "Science", description: "Prepare for science-intensive programs." },
  {
    title: "Physics",
    description: "Learn physics concepts and problem-solving.",
  },
  { title: "Biology", description: "Master the foundations of life sciences." },
  {
    title: "Project Management",
    description: "Learn PMP essentials and best practices.",
  },
  {
    title: "Business Management",
    description: "Master business fundamentals and leadership.",
  },
  {
    title: "HA Lab Training",
    description: "Comprehensive training for lab assistants.",
  },
  {
    title: "Nurse Preparation",
    description: "Prepare for staff nurse certification exams.",
  },
  {
    title: "MS Office Package",
    description: "Learn Word, Excel, PowerPoint, and more.",
  },
  {
    title: "Advanced Computing",
    description: "Learn hardware, networking, and system maintenance.",
  },
  {
    title: "A-Level Preparation",
    description: "Expert guidance for A-Level students.",
  },
  {
    title: "Home Tuition",
    description: "Personalized tuition for all academic levels.",
  },
];

export const CoursesSection = () => {
  return (
    <div className="py-16 px-6 lg:px-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 ">
        Courses We Offer
      </h2>

      {/* Render all courses as cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allCourses.map((course, index) => (
          <motion.div
            key={index}
            className="relative p-6  border rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Course Content Section */}
            <div className="flex-grow mb-4">
              <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
              <p className="">{course.description}</p>
            </div>

            {/* Button Section */}
            {/* <Button>Learn More</Button> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
