import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
// import axios from "../hooks/useAxiosSecure"; // later

export default function Home() {
  /* ======================
     STATE (API READY)
     ====================== */
  const [stats, setStats] = useState({
    totalUsers: null,
    activeMedicines: null,
    refillRequests: null,
  });

  const [userGrowth, setUserGrowth] = useState([]);
  const [monthlyMedicines, setMonthlyMedicines] = useState([]);

  /* ======================
     API CALL (LATER)
     ====================== */
  useEffect(() => {
    // axios.get("/dashboard/stats").then(res => setStats(res.data));
    // axios.get("/dashboard/user-growth").then(res => setUserGrowth(res.data));
    // axios.get("/dashboard/monthly-medicines").then(res => setMonthlyMedicines(res.data));
  }, []);

  return (
    <div className="space-y-6 md:space-y-10">

  {/* =====================
     TOP SUMMARY CARDS
     ===================== */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-[#FFF1E6] p-4 md:p-8 rounded-2xl">

    {/* TOTAL USERS */}
    <div className="bg-white rounded-xl p-6 md:p-14 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-lg md:text-2xl text-black font-semibold">
          Total Users
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          {stats.totalUsers ?? "--"}
        </h3>
      </div>
      <div className="h-14 w-14 md:h-12 md:w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon icon="material-symbols:group-outline" width="26" height="26" />
      </div>
    </div>

    {/* ACTIVE MEDICINES */}
    <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-lg md:text-2xl text-black font-semibold">
          Active Medicines
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          {stats.activeMedicines ?? "--"}
        </h3>
      </div>
      <div className="h-14 w-14 md:h-12 md:w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon icon="material-symbols:medication-outline" width="26" height="26" />
      </div>
    </div>

    {/* REFILL REQUESTS */}
    <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-lg md:text-2xl text-black font-semibold">
          Refill requests
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          {stats.refillRequests ?? "--"}
        </h3>
      </div>
      <div className="h-14 w-14 md:h-12 md:w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon icon="material-symbols:sync-alt" width="26" height="26" />
      </div>
    </div>

  </div>

  {/* =====================
     CHART SECTION
     ===================== */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

    {/* USER GROWTH */}
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
      <h3 className="text-primary font-semibold mb-3 md:mb-4">
        User Growth
      </h3>

      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#E7772E"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* MONTHLY MEDICATION */}
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
      <h3 className="text-primary font-semibold mb-3 md:mb-4">
        Monthly Added Medication
      </h3>

      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyMedicines}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#E7772E"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

  </div>
</div>

  );
}
