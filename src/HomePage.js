import React from "react";
import {
  FrontSection,
  CoursesSection,
  MailSection,
  CoursesSectionCard
} from "./components/componentsindex";

const HomePage = () => {
  return (
    <>
      <FrontSection />
      <MailSection />
      <CoursesSectionCard/>
      <CoursesSection />
    </>
  );
};

export default HomePage;
