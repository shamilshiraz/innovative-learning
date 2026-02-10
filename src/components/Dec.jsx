// schedule.jsx

import React from 'react';

// --- CONSOLIDATED DATA ---

const febCourses = [
  { course: " FIDIC", startDate: "18-Feb-26", time: " 8.30PM - 11.30PM", frequency: "Wed/Sat/Mon - 30 Hours" },
  { course: " CFPS- - NFPA Standards", startDate: "23-Feb-26", time: " 8.30PM - 11.30PM", frequency: "Mon/Wed/ Sat - 36 Hours" },
  { course: " REVIT", startDate: "25-Feb-26", time: " 8.30PM - 11.30PM", frequency: "Wed/Mon/Sat - 30 Hours" },
];

const marchCourses = [
  { course: " PMP-PMI US", startDate: "30-Mar-2026", time: " 7:00 PM-10:00 PM", frequency: "Mon, Wed, Sat. – 40 Hours" },
  { course: " PMP-PMI US", startDate: "27-Mar-2026", time: " 7:30 AM–11:30 AM", frequency: "Fridays Only – 40 Hours" },
  { course: " CFM", startDate: "27-Mar-2026", time: " 2:00 PM–7:00 PM", frequency: "Fridays Only – 40 Hours" },
  { course: " CFPS", startDate: "27-Mar-2026", time: " 2:00 PM–7:00 PM", frequency: "Fridays Only – 35 Hours" },
  { course: " ISO 9001-2015 (Internal & External)", startDate: "27-Mar-2026", time: " 2:00 PM–7:00 PM", frequency: "Fridays Only – 25 Hours" },
];

const aprCourses = [
  { course: " PMP-PMI US", startDate: "20-Apr-2026", time: " 7:00 PM-10:00 PM", frequency: "Mon, Wed, Sat. – 40 Hours" },
  { course: " CCP", startDate: "17-Apr-2026", time: " 2:00 PM–7:00 PM", frequency: "Fridays Only – 40 Hours" },
  { course: " PRIMAVERA (P6)", startDate: "17-Apr-2026", time: " 2:00 PM–7:00 PM", frequency: "Fridays Only – 35 Hours" },
  { course: " RMP", startDate: "19-Apr-2026", time: " 7:00 PM – 10:00 PM", frequency: "Sun, Tue, Thurs – 30 Hours" },
  { course: " ISO 45001 (Internal & External)", startDate: "24-Apr-2026", time: " 2:00 PM–7:00 PM", frequency: "Fridays Only – 20 Hours" },
];

const novCourses = [
  { course: "PMP-PMI US", startDate: "28-Nov-2025", time: "2:00 PM - 7:00 PM", frequency: "Fridays – 40 Hours" },
  { course: "PMP-PMI US", startDate: "21-Nov-2025", time: "7:30 AM – 11:30 AM", frequency: "Fridays – 40 Hours" },
  { course: "PMP-PMI US", startDate: "19-Nov-2025", time: "7:00 PM – 10:00 PM", frequency: "Mon/Wed/Sat – 40 Hours" },
  { course: "Primavera (P6)", startDate: "21-Nov-2025", time: "3:00 PM – 6:30 PM", frequency: "Fridays – 30 Hours" },
  { course: "Primavera (P6)", startDate: "25-Nov-2025", time: "7:00 PM – 10:00 PM", frequency: "Sun/Tues/Thurs – 30 Hours" },
  { course: "CCP-AACEI US", startDate: "21-Nov-2025", time: "7:30 AM – 11:30 AM", frequency: "Fridays – 40 Hours" },
  { course: "PSP- AACEI US", startDate: "28-Nov-2025", time: "8:00 AM – 11:00 AM", frequency: "Fridays – 30 Hours" },
  { course: "LEED GA&AP USGBC", startDate: "14-Nov-2025", time: "2:00 PM – 7:00 PM", frequency: "Fridays – 45 Hours" },
  { course: "FIDIC – Red Book", startDate: "21-Nov-2025", time: "3:00 PM – 6:00 PM", frequency: "Fridays – 30 Hours" },
  { course: "REVIT – BIM Structural/Mep/Arch", startDate: "07-Nov-2025", time: "2:30 PM – 6:30 PM", frequency: "Fridays – 30 Hours" },
];

const decCourses = [
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


// --- TAILWIND CLASSES ---

const thClasses = "px-4 py-3 text-left font-semibold text-gray-900 uppercase tracking-wider bg-yellow-600/80";
const tdClasses = "px-4 py-3 whitespace-nowrap text-sm text-white border-b border-yellow-800";
const headerClasses = "text-3xl font-serif text-gray-800 mb-6 border-b-2 border-yellow-600 pb-2";
const monthHeaderClasses = "text-2xl font-semibold text-gray-700 mt-8 mb-4";
const tableContainerClasses = "shadow-2xl overflow-x-auto rounded-lg border-4 border-yellow-800";
const tableClasses = "min-w-full divide-y divide-yellow-800 bg-gray-900/95";


// --- RENDER FUNCTION ---

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


// --- MAIN COMPONENT ---

const Schedule = () => {
  return (
    <section className="p-4 sm:p-8 lg:p-12 bg-gray-50">
      <h2 className={headerClasses}>Specialized Courses Schedule</h2>

      {/* Feb Section (nv) */}
      <div id="schedule-nv" className="month-schedule">
        <h3 className={monthHeaderClasses}>February 2026</h3>
        {renderCourseTable(febCourses)}
      </div>

      <div className="my-8 border-t border-gray-300"></div>

     
    </section>
  );
};

export default Schedule;
