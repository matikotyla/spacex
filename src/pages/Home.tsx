import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getRockets } from "graphql/Queries";

interface Rocket {
  id: string;
  name: string;
  mass: {
    kg: number;
  };
  height: {
    meters: number;
  };
}

interface RocketQuery {
  rockets: Rocket[];
}

const Home = () => {
  const { error, loading, data } = useQuery<RocketQuery>(getRockets, {
    variables: {
      limit: 4,
    },
    onError: (e) => console.log(e),
    onCompleted: (d) => console.log(d),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Take control of your team.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
