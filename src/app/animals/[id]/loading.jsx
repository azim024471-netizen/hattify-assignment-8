import {Spinner} from "@heroui/react";

const LoadingDetails = () => {
    return (
        <div className='p-20 flex  flex-col justify-center gap-5 items-center'>
            <h1 className='text-4xl text-black'>Details Loading..........</h1>
             <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        
      </div>
        </div>
    );
};

export default LoadingDetails;