"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { jobListing } from "@/lib/mockApi";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Filter,
  MapPin,
  Send,
} from "lucide-react";
import React, { useState } from "react";

export default function JobListingSection() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const departments = [
    "all",
    "Human Resources",
    "Operations",
    "Customer Success",
    "Marketing",
    "Finance",
    "Technology",
  ];
  const locations = [
    "all",
    "Remote",
    "New York, NY",
    "San Francisco, CA",
    "Austin, TX",
  ];

  const filteredJobs = jobListing.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "all" || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });
  return (
    <>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Open <span className="text-green-400">Positions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find your next opportunity to make a meaningful impact
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Filter by:</span>
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "all" ? "All Locations" : loc}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl text-white mb-2 group-hover:text-green-400 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex items-center space-x-4 mb-4">
                            <Badge
                              variant="outline"
                              className="border-green-500/30 text-green-400"
                            >
                              {job.department}
                            </Badge>
                            <div className="flex items-center space-x-1 text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 text-lg mb-1">
                            {job.salary}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {job.posted}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-white mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 2).map((req, index) => (
                            <li
                              key={index}
                              className="text-gray-400 text-sm flex items-start"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="space-y-2">
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                        >
                          {job.level}
                        </Badge>
                      </div>

                      <div className="space-y-3 mt-6">
                        <Button
                          className="w-full bg-green-500 hover:bg-green-600 text-black rounded-full"
                          //   onClick={() => onViewJobDetail(job)}
                        >
                          Apply Now
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full"
                          //   onClick={() => onViewJobDetail(job)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl text-white mb-2">No positions found</h3>
              <p className="text-gray-400">
                Try adjusting your filters or check back later for new
                opportunities.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
