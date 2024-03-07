import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Oops!</h1>
            <p className="md:text-[20px]">Sorry, an unexpected error has occurred.</p>
            <p className="text-gray-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage