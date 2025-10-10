// pages/courses/[coursename].js 👈 Correct file location for Pages Router

import { useRouter } from 'next/router'; // 👈 Use Next.js Router for Pages
import coursesData from '../../../courses.json'; // 👈 Adjust the path to courses.json as needed
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Optional, but good practice

// Helper function to find course data
const getCourseData = (id) => {
    return coursesData.find(course => course.id === id);
};

// 💥 CORRECT FUNCTIONAL COMPONENT FOR PAGES ROUTER 💥
export default function CoursePage() {
    const router = useRouter();
    
    // 1. Get the dynamic ID from router.query
    // The key must match your file name: [coursename] -> router.query.coursename
    const { coursename } = router.query; 

    // If the query hasn't populated yet (happens on first client-side render)
    if (!coursename) {
        return <div className="p-20 text-center">Loading course details...</div>;
    }

    const course = getCourseData(coursename);

    if (!course) {
        // Simple 404 handling for Pages Router client-side (You can implement a proper 404 page if needed)
        return (
            <div className="p-20 text-center min-h-screen">
                <h1 className="text-4xl font-bold text-red-600">404 - Course Not Found</h1>
                <p className="mt-4 text-gray-600">The course ID "{coursename}" does not exist.</p>
                <Link href="/courses" className="text-lg text-[#b1976b] hover:underline mt-8 inline-block">
                    &larr; Back to all Courses
                </Link>
            </div>
        );
    }

    // 2. The component is now a valid React function returning JSX
    return (
        <div className="py-20 px-8 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb / Back Link */}
                <Link href="/courses" className="text-lg text-[#b1976b] hover:underline mb-8 inline-block">
                    &larr; Back to all Courses
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#213742] mb-4">
                        {course.name}
                    </h1>
                    <p className="text-2xl text-gray-600 border-l-4 border-[#b1976b] pl-4">
                        {course.desc}
                    </p>
                </div>

                {/* Content Layout (Image and Details) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column (Long Description) */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl font-bold text-[#213742]">Course Overview</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {course.longDesc}
                        </p>
                        
                        {/* Action Button */}
                        <a 
                            href={course.brochureLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#b1976b] text-white px-8 py-4 rounded-lg text-xl font-medium hover:bg-[#a0855c] transition duration-300 shadow-md"
                        >
                            Download Course Brochure
                            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                        </a>
                    </div>
                    
                    {/* Right Column (Image and Info Box) */}
                    <div className="lg:col-span-1">
                        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src={course.image}
                                alt={course.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Quick Info Box (Example) */}
                        <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 space-y-4">
                            <h3 className="text-xl font-semibold text-[#213742]">Key Details</h3>
                            <p className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Duration:</span>
                                <span className="font-medium">40 Hours</span>
                            </p>
                            <p className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">Mode:</span>
                                <span className="font-medium">Online & Classroom</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}