import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-start gap-8 space-y-8 lg:space-y-0">
          <section className="sidebar">
            <div className="w-full lg:w-64 border rounded space-y-2">
              <ul className="flex flex-col">
                <Link to="request-blood/" className="py-3 px-4 border-b">
                  Create Request
                </Link>
                <Link to="own-requests/" className="py-3 px-4 border-b">
                  Own Requests
                </Link>
                <Link to="ongoing-requests/" className="py-3 px-4 border-b">
                  Ongoing Requests
                </Link>
                <Link to="donation-history/" className="py-3 px-4">
                  Donation History
                </Link>
              </ul>
            </div>
          </section>
          <section className="w-full">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
