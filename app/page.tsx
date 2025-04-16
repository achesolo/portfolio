import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Code2, Hammer, FolderOpen } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Solomon Acheampong</h1>
      <p className="text-lg text-center mb-10 text-gray-600">
        Mining Engineer | Software Developer | GIS Enthusiast
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Mining Engineering */}
        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6">
            <Hammer className="w-8 h-8 text-yellow-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Mining Engineering</h2>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Open Pit Mine Design & Planning</li>
              <li>Block Model Import & Processing</li>
              <li>Cut-off Grade & Pit Optimization</li>
              <li>Mine Scheduling & Equipment Sizing</li>
              <li>Cost Estimation & Reserve Evaluation</li>
            </ul>
          </CardContent>
        </Card>

        {/* Software Development */}
        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6">
            <Code2 className="w-8 h-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Software Development</h2>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Python (Automation, Simulation, Data Analysis)</li>
              <li>GUI apps (Tkinter)</li>
              <li>Web Development (React, Flask)</li>
              <li>Crypto Trading Bots (Arbitrage)</li>
              <li>Reinforcement Learning in Mining</li>
            </ul>
          </CardContent>
        </Card>

        {/* GIS & Mapping */}
        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6">
            <MapPin className="w-8 h-8 text-green-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">GIS & Geospatial Analysis</h2>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Geological Mapping</li>
              <li>Mine Layouts & Visualization</li>
              <li>Integration with Block Models</li>
              <li>3D Geospatial Data Interpretation</li>
              <li>Tools: QGIS, ArcGIS, Python Geopandas</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Project Showcase */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-6">
              <FolderOpen className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Pit Scheduler</h3>
              <p className="text-gray-700 mb-2">A Python-based application for scheduling open pit production with block model import support and custom reporting.</p>
              <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg mt-2">
                View Project
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-2xl">
            <CardContent className="p-6">
              <FolderOpen className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stope Optimization with PPO</h3>
              <p className="text-gray-700 mb-2">Reinforcement learning algorithm for optimizing underground stope shapes using real block models and mining constraints.</p>
              <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg mt-2">
                View Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button className="text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-2">
          Download CV
        </Button>
      </div>
    </div>
  );
}
