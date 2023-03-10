import React from 'react';

const Card = () => {
    return (
        <div className="flex justify-center m-2">
            <div
                className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <a href="#!">
                    <img
                        className="rounded-t-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                        alt=""/>
                </a>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        data-te-ripple-init
                        onClick={()=>console.log("card")}
                        data-te-ripple-color="light">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;