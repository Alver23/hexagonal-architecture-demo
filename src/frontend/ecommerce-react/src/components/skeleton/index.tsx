import { ReactElement } from "react";

export const Skeleton = (): ReactElement => {
  return (
    <div className="w-96 h-80 border-2 rounded-md mx-auto mt-20">
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div className="flex flex-col space-y-3">
          <div className="w-80 bg-gray-300 h-40 rounded-md">
          </div>
          <div className="w-80 bg-gray-300 h-6 rounded-md">
          </div>
          <div className="w-60 bg-gray-300 h-6 rounded-md">
          </div>
          <div className="w-40 bg-gray-300 h-6 rounded-md">
          </div>
        </div>
      </div>
    </div>
  );
}
