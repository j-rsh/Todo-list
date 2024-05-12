const AddTodoSkeleton: React.FC<any> = ({ todo, done }) => {
  return (
    <div className="animate-pulse">
      <div className=" w-1/2 m-auto my-5 flex justify-around ">
        <input
          type="text"
          className="bg-gray-300  w-4/5 px-4 py-2 border rounded-lg"
        />
        <button className="bg-gray-300 w-20 px-4 py-2 border rounded-lg"></button>
      </div>
      <div className="animate-pulse flex justify-center">
        <div className="bg-gray-300  w-full max-w-sm m-5 px-4 py-1 border  rounded-lg shadow ">
          <div className="flex flex-col space-y-3">
            <br />
            <div className="h-20 bg-gray-200 flex w-full justify-between leading-10 max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg group"></div>
            <div className="h-20 bg-gray-200 flex w-full justify-between leading-10 max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg group"></div>
            <div className="h-20 bg-gray-200 flex w-full justify-between leading-10 max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg group"></div>
          </div>
        </div>

        <div className="bg-gray-300  w-full max-w-sm m-5 px-4 py-1 border  rounded-lg shadow ">
          <div className="flex flex-col space-y-3">
            <br />
            <div className="h-20 bg-gray-200 flex w-full justify-between leading-10 max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg group"></div>
            <div className="h-20 bg-gray-200 flex w-full justify-between leading-10 max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg group"></div>
            <div className="h-20 bg-gray-200 flex w-full justify-between leading-10 max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg group"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodoSkeleton;
