import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-5">
          <div class="sidebar w-84 border rounded space-y-2">
            <Link to="create-event/">Blood Event Request</Link>
            <Link to="ongoing-requests/">OnGoing Requests</Link>
            <Link to="donation-history/">Donation History</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
