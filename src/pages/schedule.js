// schedule.jsx

import React from 'react';

/**
 * Data extracted from the provided image.
 * All courses start in December 2025.
 */
const courseData = [
  { course: "PMP-PMI US", startDate: "26-Dec-2025", time: "2:00 PM - 7:00 PM", frequency: "Fridays – 40 Hours" },
  { course: "PMP-PMI US", startDate: "19-Dec-2025", time: "7:30 AM – 11:30 AM", frequency: "Fridays – 40 Hours" },
  { course: "PMP-PMI US", startDate: "29-Dec-2025", time: "7:00 PM – 10:00 PM", frequency: "Mon/Wed/Sat – 40 Hours" },
  { course: "Primavera (P6)", startDate: "19-Dec-2025", time: "3:00 PM – 6:30 PM", frequency: "Fridays – 30 Hours" },
  { course: "CCP-AACEI US", startDate: "16-Dec-2025", time: "7:00 PM – 10:00 PM", frequency: "Sun/Tues/Thurs – 30 Hours" },
  { course: "LEED GA&AP USGBC", startDate: "17-Dec-2025", time: "7:00 PM – 10:00 PM", frequency: "Mon/Wed/Sat – 30 Hours" },
  { course: "FIDIC – Red Book", startDate: "29-Dec-2025", time: "7:00 PM – 10:00 PM", frequency: "Mon/Wed/Sat – 30 Hours" },
  { course: "CFPS-NFPA", startDate: "19-Dec-2025", time: "2:00 PM – 7:00 PM", frequency: "Friday – 40 Hours" },
  { course: "CFM-IFMA", startDate: "26-Dec-2025", time: "2:00 PM – 7:00 PM", frequency: "Friday – 40 Hours" },
  { course: "IELTS", startDate: "19-Dec-2025", time: "2:00 PM – 7:00 PM", frequency: "Friday – 40 Hours" },
];

// Tailwind classes for the table header (Gold background, dark text)
const thClasses = "px-4 py-3 text-left font-semibold text-gray-900 uppercase tracking-wider bg-yellow-600/80";
// Tailwind classes for table data cells (Dark background, light text)
const tdClasses = "px-4 py-3 whitespace-nowrap text-sm text-gray-100 border-b border-yellow-800";
// Tailwind classes for the header/title
const headerClasses = "text-3xl font-serif text-gray-800 mb-6 border-b-2 border-yellow-600 pb-2";
// Tailwind classes for month sub-headings
const monthHeaderClasses = "text-2xl font-semibold text-gray-700 mt-8 mb-4";
// Tailwind classes for the overall table container
const tableContainerClasses = "shadow-2xl overflow-x-auto rounded-lg border-4 border-yellow-800";
// Tailwind classes for the table itself
const tableClasses = "min-w-full divide-y divide-yellow-800 bg-gray-900/95";


const renderCourseTable = (courses) => {
  if (courses.length === 0) {
    return <p className="text-gray-600 italic p-4">No specialized courses scheduled for this month.</p>;
  }

  return (
    <div className={tableContainerClasses}>
      <table className={tableClasses}>
        <thead className="bg-yellow-600/80">
          <tr>
            <th scope="col" className={thClasses}>Course</th>
            <th scope="col" className={thClasses}>Start Date</th>
            <th scope="col" className={thClasses}>Time</th>
            <th scope="col" className={thClasses}>Frequency</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow-800">
          {courses.map((course, index) => (
            <tr key={index} className="hover:bg-gray-800 transition duration-150">
              <td className={tdClasses}>{course.course}</td>
              <td className={tdClasses}>{course.startDate}</td>
              <td className={tdClasses}>{course.time}</td>
              <td className={tdClasses}>{course.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Schedule = () => {
  // Filter data based on month (all courses in the data are for December)
  const novCourses = courseData.filter(course => course.startDate.includes('Nov'));
  const decCourses = courseData.filter(course => course.startDate.includes('Dec'));

  return (
    <section className="p-4 sm:p-8 lg:p-12 bg-gray-50">
      <h2 className={headerClasses}>Specialized Courses</h2>

      {/* November Section (nv) */}
      <div id="schedule-nv" className="month-schedule">
        <h3 className={monthHeaderClasses}>November 2025</h3>
        {/* Render for nv */}
        {renderCourseTable(novCourses)}
      </div>

      <div className="my-8 border-t border-gray-300"></div>

      {/* December Section (dec) */}
      <div id="schedule-dec" className="month-schedule">
        <h3 className={monthHeaderClasses}>December 2025</h3>
        {/* Render for dec */}
        {renderCourseTable(decCourses)}
      </div>
    </section>
  );
};

export default Schedule;